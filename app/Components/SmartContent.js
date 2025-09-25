import Image from "next/image";
import React from "react";
import img1 from "@/public/Vector.png";
import img2 from "@/public/Vector2.png";
import img3 from "@/public/Vector3.png";

const SmartContent = () => {
  return (
    <div>
      <section>
        {/* parent 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between md:items-center gap-8 md:gap-10 mb-5">
          {/* text part */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Smart Content Generation
            </h1>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                AI-powered bullet point writer creates achievement-focused
                descriptions
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Automatic quantification of accomplishments with
                industry-specific metrics
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Professional summary generator tailored to your career level and
                goals
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Skills section optimization based on job market trends
              </li>
            </ul>
          </div>

          {/* image part */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={img1}
              alt="Smart Content 1"
              className="w-3/4 md:w-full h-auto max-w-sm"
            />
          </div>
        </div>

        {/* parent 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-8 md:gap-10 mb-5">
          {/* image part */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={img2}
              alt="Smart Content 2"
              className="w-3/4 md:w-full h-auto max-w-sm"
            />
          </div>

          {/* text part */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              ATS Optimization Engine
            </h1>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Real-time ATS compatibility scoring (0-100 scale)
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Keyword density analysis and optimization
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Format checking for maximum readability by ATS systems
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Industry-specific template recommendations
              </li>
            </ul>
          </div>
        </div>

        {/* parent 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between md:items-center gap-8 md:gap-10 mb-5">
          {/* text part */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Multi-Version Resume Management
            </h1>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Create unlimited resume variations for different job types
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Master resume with all experience that branches into targeted
                versions
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                One-click customization for specific job applications
              </li>
              <li className="flex items-center gap-2 before:content-['✔'] before:text-[#23A2FC]">
                Version history and comparison tools
              </li>
            </ul>
          </div>

          {/* image part */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={img3}
              alt="Smart Content 1"
              className="w-3/4 md:w-full h-auto max-w-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartContent;
