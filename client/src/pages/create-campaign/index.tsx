import Title from "@/components/common/title";
import CampaignForm from "@/components/form/campaign-form";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CreateCampaignPage = () => {
  const router = useRouter();
  
const address = useAddress();

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
  }, [address, router]);

  return (
    <div className="h-full lg:h-screen w-full flex flex-col justify-start gap-4 my-10">
      <Title
        title="Create a Campaign"
        subtitle="Create a campaign to raise funds for your cause."
      />

      <CampaignForm />
    </div>
  );
};

export default CreateCampaignPage;
