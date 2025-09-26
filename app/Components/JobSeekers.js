import React from "react";
import bgShadow from "@/public/bg-shadow.png";
import Button from "./Button";

const JobSeekers = () => {
  const data = [
    {
      id: 1,
      title: "Higher Response Rate",
      description: "Users report significantly more interview invitations",
      amount: "85%",
    },
    {
      id: 2,
      title: "Minute Resume Creation",
      description: "Go from blank page to professional resume in minutes",
      amount: "5",
    },
    {
      id: 3,
      title: "Industry-Specific Optimization",
      description: "Templates and content tailored to your field",
      amount: "50+",
    },
    {
      id: 4,
      title: "Continuous Learning",
      description: "AI improves based on successful job placements",
      amount: "AI",
    },
  ];
  return (
    <div className="my-10 ">
      <h2 className="md:text-4xl text-xl text-center font-semibold">
        Why Job Seekers Choose Our
        <span className="text-[#23A2FC]"> AI Resume</span> Builder
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-16 gap-6">
        {data.map((item, index) => (
         <div
            key={item.id}
            className={`p-4 rounded-2xl shadow-md text-black transition bg-cover bg-center`}
            style={{
              backgroundImage:
                index === 0
                  ? `url(${bgShadow.src})` // first card
                  : index === data.length - 1
                  ? `url(${bgShadow.src})` // last card
                  : "none",
              backgroundColor: index !== 0 && index !== data.length - 1 ? "#fff" : "transparent",
            }}
          >
            <div>
              <h2 className="text-center font-bold text-3xl mb-2">{item.amount}</h2>
              <h2 className=" mb-2 font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mx-auto flex justify-center mt-10">
  <Button>Build Your Resume Now</Button>
</div>
    </div>
  );
};

export default JobSeekers;
