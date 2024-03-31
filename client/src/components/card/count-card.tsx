import { LucideIcon } from 'lucide-react';
import React from 'react'

const CountCard = ({
    icon: Icon,
  
    title,
    amount,
  }: {
    icon: LucideIcon;
    title: string;
    amount: string;
  }) => {
    return (
      <div className="bg-foreground/4 border p-4 lg:p-6 rounded-xl flex flex-col gap-2 w-full h-full">
        <div className="bg-refreshed/10 rounded-full h-10 w-10 flex items-center justify-center">
          <Icon className="text-refreshed/100 h-6 w-6" />
        </div>
  
        <h3 className="text-xl font-semibold truncate">{title}</h3>
        <p className="text-foreground/70">
        {title === "Target" ?  `${Number(amount) * 1000000000000000000}` : amount}
        </p>
      </div>
    );
  };
  

export default CountCard