import React from "react";
import Image from "next/image";

import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import img6 from "@/public/img6.png";
import gradient from "@/public/gradient2.png";

const ResumeBuilder = () => {
  const data = [
    {
      id: 1,
      title: "Upload or Import",
      description:
        "Start with existing resume, LinkedIn profile, or build from scratch",
      image: img1,
    },
    {
      id: 2,
      title: "AI Analysis",
      description:
        "Our system analyzes your background and identifies strengths",
      image: img2,
    },
    {
      id: 3,
      title: "Job Targeting",
      description: "Paste job descriptions for instant resume customization",
      image: img3,
    },
    {
      id: 4,
      title: "Content Enhancement",
      description:
        "AI improves bullet points, adds keywords, optimizes formatting",
      image: img4,
    },
    {
      id: 5,
      title: "ATS Scoring",
      description: "Real-time feedback ensures maximum compatibility",
      image: img5,
    },
    {
      id: 6,
      title: "Export & Apply",
      description: "Download in multiple formats (PDF, DOCX, ATS-friendly)",
      image: img6,
    },
  ];

  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold text-center my-10">
        How Our <span className="text-[#23A2FC]">AI Resume </span> Builder Works
      </h2>
      {/* card section */}
      <section
        className="grid grid-cols-1 md:grid-cols-3  p-5  gap-6"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl">
            <div className="flex  pb-2 justify-between items-center">
              {/* flex here */}
              <h2 className="font-bold bg-[#23A2FC1A] w-9 h-9 rounded-full flex items-center justify-center">
                {item.id}
              </h2>

              <Image src={item.image} alt={item.title} />
            </div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumeBuilder;
