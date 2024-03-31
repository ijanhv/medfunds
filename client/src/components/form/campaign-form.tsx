import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { campaignSchema } from "@/schema/campaign";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";
import { CalendarIcon, ImageUp } from "lucide-react";
import { Calendar } from "../ui/calendar";
import ImapgeUpload from "./image-upload";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { toast } from "sonner";

const CampaignForm = () => {
  const address = useAddress();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );
  const { mutateAsync: createCampaign, isSuccess } = useContractWrite(
    contract,
    "createCampaign"
  );

  const form = useForm<z.infer<typeof campaignSchema>>({
    resolver: zodResolver(campaignSchema),
  });

  function onSubmit(values: z.infer<typeof campaignSchema>) {
    try {
      const owner = address;
      const { name, title, description, target, image } = values;
      const deadlineString = values.deadline;

      const deadline = new Date(deadlineString).getTime();

      createCampaign({
        args: [owner, title, name, description, target, deadline, image],
      }).then(() => {
        toast.success("Campaign created successfully", {
          position: "top-center",
          style: {
            backgroundColor: "#CEED86",
            color: "black",
          },
        });
      });
    } catch (error) {
      toast.error("Error creating campaign", {
        position: "top-center",
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    }
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-7 font-manrope my-4"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base ">Enter Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Campaign Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="
                    Write a title
                  "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    Campaign Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder="
                    Write your story
                  "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <ImapgeUpload form={form} />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="target"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Campaign Target</FormLabel>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0</span>

                    <span>1000000</span>
                  </div>
                  <FormControl>
                    <>
                      <Slider
                        value={[parseInt(field.value)]}
                        max={1000000}
                        step={1}
                        className="w-full"
                        onValueChange={(value) => {
                          field.onChange(value[0].toString());
                        }}
                      />
                    </>
                  </FormControl>

                  <span className="my-10">
                    {field.value ? parseInt(field.value).toLocaleString() : 0}
                  </span>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="button w-32 hover:bg-refreshed ">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CampaignForm;
