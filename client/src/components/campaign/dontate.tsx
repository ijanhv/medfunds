import { useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


const DonateToCampaign = ({ id }: { id: string }) => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
  );

  const [amount, setAmount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const donate = async ({ pId, amount }: { pId: string; amount: string }) => {
    const data = await contract?.call("donateToCampaign", [id], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };
  const handleDonate = async () => {
    setIsLoading(true);
    await donate({ pId: id, amount: amount.toString() });
    setIsLoading(false);
  };

  return (
    <div className="flex items-center gap-2">
    <Input 
        placeholder="Amount"
        type="number"
        value={amount}
        min={0}
        onChange={(e) => setAmount(Number(e.target.value))}
    />
      <Button
        className="button hover:bg-refreshed"
        onClick={handleDonate}
        disabled={isLoading}
      >
        Donate Now
      </Button>
    </div>
  );
};

export default DonateToCampaign;
