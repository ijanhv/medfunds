import Title from "@/components/common/title";
import CampaignForm from "@/components/form/campaign-form";
import React from "react";

const CreateCampaignPage = () => {
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
