import React from "react";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import Navbar from "../globals/navbar";
import Footer from "../globals/footer";

type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="h-full max-w-7xl px-10 lg:px-8 mx-auto ">
        <Navbar />
        {children}
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default Layout;
