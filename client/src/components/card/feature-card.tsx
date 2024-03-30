import { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="bg-foreground/4 border p-4 lg:p-6 rounded-xl flex flex-col gap-2">
      <div className="bg-refreshed/20 rounded-full h-10 w-10 flex items-center justify-center">
        <feature.icon className="text-refreshed/100 h-6 w-6" />
      </div>

      <h3 className="text-xl font-semibold">{feature.title}</h3>
      <p className="text-foreground/70">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
