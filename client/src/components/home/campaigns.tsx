import { useContract, useContractRead } from "@thirdweb-dev/react";
import Title from "../common/title";
import { ethers } from "ethers";
import CampaignCard from "../card/campaign-card";
import { any } from "zod";

interface Campaign {
  id?: number;
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: string;
  image: string;
  pId: number;
}

const Campaigns = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );

  const { data, isLoading } = useContractRead(contract, "getCampaigns");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const parsedCampaings = data.map((campaign: any, i: number) => ({
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
    <div className="container2 w-full">
      <Title
        title="Urgent Fundraising!"
        subtitle="Time is of the essence. Join our mission NOW to make a difference."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {!isLoading &&
          parsedCampaings.length > 0 &&
          parsedCampaings.map((campaign: Campaign, i: number) => (
            <CampaignCard key={campaign.id} id={i} {...campaign} />
          ))}
      </div>
    </div>
  );
};

export default Campaigns;
