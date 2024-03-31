import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/custom-accordion";
import Title from "../common/title";

const FAQs = () => {
  return (
    <div className="container2">
      <Title
        title="FAQs"
        subtitle="Frequently asked questions about our product."
      />
      <Accordion type="single" collapsible className="w-full ">
        {faqs.map((feature, index) => (
          <AccordionItem key={index} className="w-full" value={`item-${index}`}>
            <AccordionTrigger className="flex items-center justify-between w-full p-4 hover:no-underline">
              <div className="items-center gap-4 flex">
                <span className="text-sm text-black/70 font-aeoRegular ">
                  <pre>
                    00{index} {"/  "}
                  </pre>
                </span>
                <span className="text-lg md:text-3xl  text-left font-aeoRegular ">
                  {feature.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className=" text-lg md:ml-28 text-black/60">
              {feature.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;

const faqs = [
  {
    title: "What is the purpose of this platform?",
    description:
      "MedFunds is a fundraising platform that allows users to create campaigns to raise funds for their cause. It is a global platform that connects donors from all over the world.",

  },
  {
    title: "How do I create a campaign?",
    description:
      "To create a campaign, you need to sign up for an account on MedFunds. Once you have an account, you can create a campaign by filling out the campaign form with the required details.",
  },

    {
    title: "How do I donate to a campaign?",
    description:
      "To donate to a campaign, you need to sign up for an account on MedFunds. Once you have an account, you can donate to a campaign by selecting the campaign you want to donate to and entering the amount you wish to donate.",
    },

  
];
