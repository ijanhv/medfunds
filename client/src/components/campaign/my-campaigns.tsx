import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import CampaignsDisplayLoader from "../loaders/campaigns-display";
import { ethers } from "ethers";
import CampaignCard from "../card/campaign-card";

const MyCampaigns = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );
  const address = useAddress();

  const { data, isLoading } = useContractRead(contract, "getCampaigns");

  if (isLoading) return <CampaignsDisplayLoader />;

  const filteredCampaigns = data?.filter(
    (campaign: any) => campaign.owner === address
  );

  const parsedCampaings = filteredCampaigns.map((campaign: any, i: number) => ({
    owner: campaign?.owner,
    title: campaign?.title,
    description: campaign?.description,
    target: ethers.utils.formatEther(campaign?.target ?? 0),
    deadline: campaign?.deadline.toNumber(),
    amountCollected: ethers.utils.formatEther(
      campaign?.amountCollected?.toString() ?? "0"
    ),
    image: campaign?.image,
    pId: i,
  }));
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-full">
        {!isLoading &&
          parsedCampaings.length > 0 &&
          parsedCampaings.map((campaign: Campaign, i: number) => (
            <CampaignCard key={campaign.id} id={i} {...campaign} />
          ))}
      </div>
    </div>
  );
};

export default MyCampaigns;
