import Title from "@/components/common/title";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import React from "react";

const CampaignDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );

  const { data, isLoading } = useContractRead(contract, "getCampaign", [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const campaignObject = {
    address: data[0],
    title: data[1],
    author: data[2],
    description: data[3],
    target: ethers.utils.formatEther(data[4] ?? 0),
    deadline: data[5]?.toNumber(),
    amountCollected: ethers.utils.formatEther(
      data[6]?.amountCollected?.toString() ?? "0"
    ),
    imageUrl: data[7],
  };

  console.log(campaignObject);

  return <div></div>;
};

export default CampaignDetails;
