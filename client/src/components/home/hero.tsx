import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[300px] lg:h-[550px] w-full my-10">
      <Image
        src="https://img.freepik.com/free-photo/woman-holding-heart-shaped-object_23-2150703740.jpg?t=st=1711820336~exp=1711823936~hmac=eac26cb274a5bb26103f666e971c8c060a007f2ad1abb3943dfce5e26b629727&w=2000"
        alt="Picture of the author"
        fill
        className="object-cover h-full w-full rounded-lg"
        unoptimized
      />

      <div className="absolute w-full h-full flex flex-col lg:flex-row items-center lg:items-end justify-between p-10">
        <div className="flex items-end gap-2">
          <h3 className="text-5xl lg:text-9xl font-semibold text-white">
            Fund
          </h3>
          <h3 className="text-sm lg:text-2xl text-white font-semibold lg:mb-2">
            Help
            <br />
            Others
          </h3>
        </div>

        <Link href="/" className="button">
          Start Fundraising
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
