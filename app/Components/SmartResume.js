import React from "react";
import Button from "./Button";
import img from "@/public/smartResume.png";
import Image from "next/image";

const SmartResume = () => {
  return (
    <div className="md:mt-24 mt-20 mb-10">
      <section className="flex flex-col md:flex-row md:items-center gap-10">
        {/* text part */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Smart Resume Tailoring
          </h2>
          <p className="text-gray-600 mb-6">
            Let our smart AI craft the perfect resume for every job—packed with
            the right keywords, skills, and experiences to grab recruiters’
            attention and land interviews faster.
          </p>
          <Button>Go Mentoring</Button>
        </div>

        {/* image part */}
        <div className="w-full relative md:w-1/2 flex justify-center">
          <Image src={img} alt="Smart Resume" />

          <p className="absolute text-xs md:text-sm font-semibold  ">
            Job Description
          </p>
          <p className="absolute  text-xs md:text-sm left-6 top-16  font-semibold  ">
            Resume
          </p>
          {/* dotted here */}
          <div className="flex absolute -right-4 flex-col items-end list-inside">
            <ul className="flex flex-col gap-2 ">
              <li className="flex justify-between items-center">
                <span className="text-xs whitespace-nowrap">
                  Customize Resume
                </span>
                <span className="w-1 h-1 bg-[#80C0FF] rounded-full"></span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-xs whitespace-nowrap">
                  Experiences Match
                </span>
                <span className="w-1 h-1 bg-[#80C0FF] rounded-full"></span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-xs whitespace-nowrap">Keyword Match</span>
                <span className="w-1 h-1 bg-[#80C0FF] rounded-full"></span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-xs whitespace-nowrap">
                  Relevant Skills
                </span>
                <span className="w-1 h-1 bg-[#80C0FF] rounded-full"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartResume;
