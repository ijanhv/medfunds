import { daysLeft } from "@/utils/cal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CampaignCard = ({
  image,
  title,
  id,
  description,
  amountCollected,
  target,
  owner,
  deadline,
}: {
  image: string;
  deadline: number;
  title: string;
  id: number;
  description: string;
  amountCollected: string;
  target: string;
  owner: string;
}) => {
  const remainingDays = daysLeft(deadline);
  return (
    <Link
      href={`/campaigns/${id}`}
      className=" rounded-[15px] border cursor-pointer"
    >
      <div className="group relative w-full h-[200px]  rounded-[15px] overflow-hidden">
        <Image
          src={image}
          alt="fund"
          fill
          className="w-full object-cover rounded-[15px] group-hover:scale-105 transition-all duration-300 ease-in-out"
          unoptimized
        />
      </div>

      <div className="flex flex-col p-4">
        <div className="block">
          <h3 className="font-semibold text-[16px] text-left leading-[26px] truncate">
            {title}
          </h3>
          <p className="mt-[5px] font-normal  text-left leading-[18px] truncate">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px]  leading-[22px]">
              {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px]  sm:max-w-[120px] truncate">
              Raised of {Number(target) * 1000000000000000000}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">
              {remainingDays}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px]  sm:max-w-[120px] truncate">
              Days Left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            {/* <img
              src={thirdweb}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            /> */}
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            by <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
