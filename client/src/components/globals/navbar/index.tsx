import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "My Campaigns",
      path: "/my-campaigns",
    },
  ];
  return (
    <div className="h-16 w-full flex justify-between items-center py-2">
      <Logo />
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="lg:flex items-center hidden gap-5 ">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>

    
         <ConnectWallet
            style={{
              padding: "20px",
              fontSize: "16px",
                backgroundColor: "#CEED85",
                borderRadius: "10px",
                height: "35px",
            
                color: "#15532D",
            }}
        theme={"light"}
   

      />
      </div>
    </div>
  );
};

export default Navbar;
