import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Get Started",
      subLinks: [
        {
          title: "Start Fundraising",
          url: "/",
        },
        {
          title: "Find a Campaign",
          url: "/",
        },
      ],
    },
    // {
    //   title: "Resources",
    //   subLinks: [
    //     {
    //       title: "Resume Tools",
    //       url: "/",
    //     },
    //     {
    //       title: "Interview Prep",
    //       url: "/",
    //     },
    //     {
    //       title: "Career Coaching",
    //       url: "/",
    //     },
    //   ],
    // },
    {
      title: "Company",
      subLinks: [
        {
          title: "About",
          url: "/about-us",
        },
        {
          title: "Contact",
          url: "/contact-us",
        },

      ],
    },


   
    {
      title: "Site",
      subLinks: [
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
        },
        {
          title: "Terms of Service",
          url: "/terms",
        },
        {
          title: "Cookies Policy",
          url: "/cookies-policy",
        },
        {
          title: "Data Policy",
          url: "/data-policy",
        },
        {
          title: "Frequency Asked Questions",
          url: "/faq",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 bg-foreground rounded-xl text-background w-full">
      <div className="flex flex-col items-start justify-between w-full gap-10">
        <div className="flex items-center gap-4">
          {/* <Image
            src="/logos/refermeet-blue.svg"
            alt="ReferMeet"
            width={60}
            height={60}
          /> */}
          <p className="text-3xl font-bold text-azul">MedFunds</p>
        </div>
        <hr className="w-full border-1 border-refreshed" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-start w-full ">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-2 w-full">
              <p className="text-xl font-semibold">{link.title}</p>
              {link.subLinks.map((subLink, index) => (
                <Link
                  href={subLink.url}
                  key={index}
                  className="text-base font-normal text-background/60"
                >
                  {subLink.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;