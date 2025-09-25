import React from "react";

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
      <h2 className="text-4xl text-center font-semibold">
        Why Job Seekers Choose Our
        <span className="text-[#23A2FC]">AI Resume</span> Builder
      </h2>

      <section>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.amount}</h2>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobSeekers;
