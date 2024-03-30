import { campaignSchema } from "@/schema/campaign";
import React, { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebase";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Image from "next/image";
import { CloudCog, CloudUpload, Loader, Loader2, UploadIcon, X } from "lucide-react";

interface ImageUploadProps {
  form: UseFormReturn<z.infer<typeof campaignSchema>>;
}

const ImapgeUpload = ({ form }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [itemImage, setItemImage] = useState<boolean>(false);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event.target.value = "";
    const randomString = Math.random().toString(36).substring(6);
    const imageRef = ref(
      storage,
      `images/${randomString + "_" + fileObj.name}`
    );
    const res = await uploadBytes(imageRef, fileObj);

    const resImage = await getDownloadURL(imageRef);
    setItemImage(true);
    setLoading(false);

    form.setValue("image", resImage);
  };


  return (
    <div className="h-full">
      <FormField
        control={form.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Image</FormLabel>
            <FormControl>
              <div className="relative flex gap-3 h-44 ">
                {itemImage && (
                  <>
                  <div className="relative w-full h-44">
                    <Image
                      src={field.value}
                      fill
                      alt="menu item"
                      className=" object-cover  rounded-xl"
                      unoptimized
                    />
                    </div>
                    <X
                      className="bg-red-500 absolute text-white rounded-lg p-1 cursor-pointer -top-2 -right-2 "
                      onClick={() => {
                        form.setValue("image", "");
                        setItemImage(false);
                        setLoading(false);
                      }}
                    />
                  </>
                )}

                {loading && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 h-44  flex items-center justify-center rounded-xl">
                    <Loader2 className=" animate-spin text-5xl" />
                  </div>
                )}
                {!loading && !itemImage && (
                  <div
                    className="flex flex-colitems-center justify-center w-full cursor-pointer relative h-44 "
                    onClick={() => inputRef.current?.click()}
                  >
                    <div className="flex flex-col w-full p-3 border-2 dark:border-zinc-800 h-full justify-center gap-3 border-zinc-200 border-dashed rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 ">
                      <div className="flex flex-col items-center justify-center pt-3">
                        <CloudUpload className="text-5xl" />
                        <p className="py-1 text-sm font-semibold ">
                          Click here to upload
                        </p>
                        <p className="text-xs text-foreground/60">
                          Only .pdf, .docx, .doc files are allowed
                        </p>
                      </div>
                      <input
                        type="file"
                        ref={inputRef}
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      </div>

  );
};

export default ImapgeUpload;
