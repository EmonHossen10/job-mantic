import React from "react";
import Button from "./Button";
import img from "@/public/careerMonitor.png";
import Image from "next/image";

const CareerMonitor = () => {
  return (
    <div className="">
      <section className="flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* text part */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Career Mentoring
          </h2>
          <p className="text-sm md:text-base mb-6">
            Personalized Career Mentoring to position yourself strong in the Job
            market; Craft a job-winning resume and optimize your profile for
            maximum visibility. Step-by-step mentoring to align your skills,
            resume, and career path that helps you get interview and land on a
            Job with confidence.
          </p>
          <Button>Go Mentoring</Button>
        </div>

        {/* image part */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={img} alt="Career Monitoring" />
        </div>
      </section>
    </div>
  );
};

export default CareerMonitor;
