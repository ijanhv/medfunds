import React from "react";
import FeatureCard from "../card/feature-card";
import { Building2, CloudLightningIcon, Globe } from "lucide-react";
import Title from "../common/title";

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Ignite Impact",
      description:
        "Fundraise at the speed of thought! Elevate your fundraising experience with MedFunds.",
    },
    {
      icon: CloudLightningIcon,
      title: "Spread the word",
      description:
        "Levarage the power of social media to spread the word about your cause.",
    },
    {
      icon: Globe,
      title: "Connect Globally",
      description:
        "Connect with donors from all over the world. MedFunds is a global platform.",
    },
  ];
  return (
    <div className="container2 w-full">
      <Title
        title="Fund, Fast as Flash"
        subtitle="Fundraise at the speed of thought! Elevate your fundraising experience with MedFunds."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
