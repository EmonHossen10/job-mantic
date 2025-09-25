import Image from "next/image";
import React from "react";
import img from "@/public/frame4.png";
const Revolutionary = () => {
  return (
    <div className="py-10 mb-16 relative">
      <div className="absolute  left-9">
        <h2 className="md:text-3xl font-bold ">
          Revolutionary AI Resume <br /> Building Technology
        </h2>
        <Image src={img} alt="Revolutionary AI Resume Building Technology" />
      </div>
    </div>
  );
};

export default Revolutionary;
