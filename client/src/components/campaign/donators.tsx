import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { User } from "lucide-react";
import React from "react";

const Donators = ({ id }: { id: string }) => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );

  const { data, isLoading } = useContractRead(contract, "getDonators", [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const parsedDonators = data[0].map((address: string, index: number) => ({
    address,
    amount: ethers.utils.formatEther(data[1][index]?.toString()),
  }));



  return (
    <div>
      <h3 className="text-2xl font-semibold text-left  mb-3 ">Donators</h3>

      <div className="flex flex-col gap-3">
        {!isLoading &&
          parsedDonators.length > 0 &&
          parsedDonators.map((donator: any, i: number) => (
            <div className="flex gap-2 items-center" key={i}>
            <div className="bg-refreshed h-10 w-10 rounded-full items-center justify-center flex">
                <User className="text-white h-6 w-6" />
            </div>
              <div>
                <h2>{donator.address}</h2>
                <h3>Amount: {donator.amount}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Donators;
