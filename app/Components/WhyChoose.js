import Image from "next/image";
import React from "react";
import img from "@/public/frame4.png";

const WhyChoose = () => {
  return (
    <div className="py-10  relative ">
      <div className="absolute md:left-16 left-10">
        <h2 className="md:text-3xl text-xl font-bold uppercase pb-2">
          Why Choose Our AI Job <br /> Placement Platform?
        </h2>
        <Image src={img} alt="Frame 4" />
      </div>
    </div>
  );
};

export default WhyChoose;
