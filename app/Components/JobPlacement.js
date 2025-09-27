import Image from "next/image";
import React from "react";
import icon from "@/public/frame4.png";

import img1 from "@/public/job1.png";
import img2 from "@/public/job2.png";
import img3 from "@/public/job3.png";
import img4 from "@/public/job4.png";
import img5 from "@/public/job5.png";
import img6 from "@/public/job6.png";

const JobPlacement = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "AI Resume writer",
      description:
        "Generate compelling bullet points, professional summaries, and achievement-focused content that showcases your expertise and captures employer attention.",
    },
    {
      id: 2,
      img: img2,
      title: "Keyword Optimization",
      description:
        "Automatically incorporate job-specific keywords without stuffing, ensuring your resume ranks high in ATS systems while maintaining natural readability.",
    },
    {
      id: 3,
      img: img3,
      title: "ATS Checker",
      description:
        "Ensure 99% ATS compatibility with instant scoring and detailed feedback on format, keywords, and structure optimization.",
    },
    {
      id: 4,
      img: img4,
      title: "Cover Letter Writer",
      description:
        "Create personalized cover letters that complement your tailored resume and tell your unique professional story effectively.",
    },
    {
      id: 5,
      img: img5,
      title: "Job Application Tracker",
      description:
        "Organize applications, interviews, and follow-ups in one comprehensive dashboard with automated reminders and status updates.",
    },
    {
      id: 6,
      img: img6,
      title: "Interview Preparation",
      description:
        "AI-powered practice sessions with role-specific questions, personalized feedback, and confidence-building exercises.",
    },
  ];

  return (
    <div className="mb-10">
      <div className="my-5">
        <h2 className="text-4xl font-bold">
          Comprehensive ai-powered <br /> job placement suite
        </h2>
        <Image src={icon} alt="this is icon "></Image>
      </div>

      {/* card here */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={job.img}
                alt={job.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 text-sm">{job.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobPlacement;
