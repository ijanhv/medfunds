import Donators from "@/components/campaign/donators";
import DonateToCampaign from "@/components/campaign/dontate";
import CountCard from "@/components/card/count-card";
import CampaignLoader from "@/components/loaders/campaign-loader";
import { calculateBarPercentage, daysLeft } from "@/utils/cal";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { Calendar, Handshake, IndianRupee, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CampaignDetails = () => {
  const router = useRouter();
  const address = useAddress();
  const { id } = router.query;
  const [view, setView] = useState(false);
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );

  const { data, isLoading: isCampaignLoading } = useContractRead(
    contract,
    "getCampaign",
    [id]
  );

  if (isCampaignLoading) {
    return <CampaignLoader />;
  }

  const campaignObject = {
    address: data[0],
    title: data[1],
    author: data[2],
    description: data[3],
    target: ethers.utils.formatEther(data[4] ?? 0),
    deadline: data[5]?.toNumber(),
    amountCollected: ethers.utils.formatEther(data[6]?.toString() ?? "0"),
    imageUrl: data[7],
  };

  const percentage = calculateBarPercentage({
    goal: Number(campaignObject.target),
    raisedAmount: Number(campaignObject.amountCollected),
  });

  return (
    <div className="container2 w-full h-full ">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 border bg-gray-50 dark:bg-gray-800 p-6 lg:p-10 rounded-xl">
        <div className="col-span-1 lg:col-span-3 w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-full relative">
          <Image
            src={campaignObject.imageUrl}
            alt="fund"
            fill
            className="w-full object-cover rounded-[15px]"
            unoptimized
          />
        </div>

        <div className="col-span-1 lg:col-span-2 w-full space-y-4">
          <h3 className="font-semibold text-2xl text-left leading-[26px] ">
            {campaignObject.title}
          </h3>
          <p className="text-foreground/60 text-sm text-left">
            {campaignObject.description.slice(0, 300)}

            {view && campaignObject.description.slice(300)}

            <button onClick={() => setView(!view)} className="text-blue-500">
              {view ? "Read Less" : "....Read More"}
            </button>
          </p>

          <div className="relative w-full h-[8px] rounded-full bg-[#999999] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{ width: `${percentage}%`, maxWidth: "100%" }}
            />
          </div>

          <div className=" flex justify-between gap-4 items-center">
            <CountCard
              icon={Handshake}
              title="Funds Raised"
              amount={campaignObject.amountCollected}
            />
            <CountCard
              icon={IndianRupee}
              title="Target"
              amount={campaignObject.target}
            />
          </div>

          {/* <DonateToCampaign id={id as string} /> */}
          {address !== campaignObject.address && (
            <DonateToCampaign id={id as string} />
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-10 ">
        <div className="flex items-center gap-3">
          <User className="text-refreshed/100 h-10 w-10" />
          <p className="text-foreground/70">{campaignObject.author}</p>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="text-refreshed/100 h-10 w-10 " />
          <p className="text-foreground/70">
            {daysLeft(campaignObject.deadline)} Days Left
          </p>
        </div>
      </div>

      <Donators
        id={id as string}
      />
    </div>
  );
};

export default CampaignDetails;
