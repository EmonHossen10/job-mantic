import React from "react";
import img from "@/public/frame6.png";
import Image from "next/image";

const Preview = () => {
  return (
    <div className="w-full   flex justify-center p-4">
      <Image src={img} alt="Preview" />
    </div>
  );
};

export default Preview;
