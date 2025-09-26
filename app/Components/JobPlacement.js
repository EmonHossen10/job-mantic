import Image from "next/image";
import React from "react";
import icon from "@/public/frame4.png"

const JobPlacement = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-4xl font-bold">Comprehensive ai-powered <br />  job placement suite</h2>
      <Image src={icon} alt="this is icon "></Image>
      </div>
    </div>
  );
};

export default JobPlacement;
