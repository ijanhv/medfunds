import MyCampaigns from "@/components/campaign/my-campaigns";
import Title from "@/components/common/title";
import React from "react";

const MyCampaginsPage = () => {
  return (
    <div className="h-full  w-full flex flex-col justify-start gap-4 my-10">
      <Title
        title="My Campaigns"
        subtitle="View your campaigns and their status."
      />

      <MyCampaigns />
    </div>
  );
};

export default MyCampaginsPage;
