import React from "react";
import clock from "@/public/clock.png";
import Image from "next/image";
import img from "@/public/frame5.png";

const FastJob = () => {
  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center md:items-center gap-6 md:gap-10">
        {/* image part */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={clock}
            alt="Clock Image"
            className="w-full h-auto max-w-sm"
          />
        </div>

        {/* text part */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Lightning-Fast Job <br /> Matching
          </h2>
          <p className="text-gray-600 mb-6">
            AI-powered 1:1 Job to Resume matching that positions you perfectly
            aligned in the competitive Job market with your skills, salary
            expectations, and career goals.
          </p>
          <div className="w-full flex justify-start">
            <Image
              src={img}
              alt="Frame Image"
              className="w-1/2 md:w-1/2 h-auto max-w-[250px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastJob;
