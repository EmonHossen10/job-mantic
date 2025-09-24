import Image from "next/image";
import React from "react";
import logo from "@/public/topPick.png";
import { IoIosArrowDropright } from "react-icons/io";
import frame from "@/public/frame.png";
import img1 from "@/public/summary1.png";
import img2 from "@/public/summary2.png";
import img3 from "@/public/summary3.png";
import heroBg from "@/public/gradient.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center max-h-screen pb-10  "
      style={{ backgroundImage: `url(${heroBg.src})`,    }}
      >
        {/* left */}
        <div className="space-y-2 px-4 md:px-0">
          <div className="flex justify-center md:justify-start">
            <Image width={200} height={200} src={logo} alt="Top Pick" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
              AI Resume Builder & <br /> Job Placement{" "}
              <span className="font-bold">
                – Get <br className="hidden md:block" /> Hired 3X Faster
              </span>
            </h2>
          </div>
          <div>
            <p className="w-full max-w-md">
              Boost your job search with our AI-powered platform that tailors
              resumes, beats ATS, and helps you land better jobs faster.
            </p>
          </div>
          <div>
            <button className="flex items-center text-sm md:text-base gap-2 px-4 py-2 bg-black text-white rounded-full">
              Improve your resume for FREE
              <IoIosArrowDropright
                className="bg-white text-black rounded-full "
                size={24}
              />
            </button>
          </div>
        </div>

        {/* right */}

        <div className="relative">
          <div>
            <Image src={frame} alt="Frame" />
          </div>
          <div className="absolute  right-0 bottom-1 ">
            <div className="relative">
              <Image
                className="absolute bottom-8  right-0"
                src={img1}
                alt="Frame"
              />
            </div>
            <div className="relative">
              <Image
                className="absolute bottom-0 right-0"
                src={img2}
                alt="Frame"
              />
            </div>

            {/* <Image src={img2} alt="Frame" /> */}
            <Image src={img3} alt="Frame" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
