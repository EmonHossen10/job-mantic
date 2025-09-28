"use client";
import Image from "next/image";
import { useState } from "react";

import customer from "@/public/customer.png";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const toggleBilling = (type) => {
    setBilling(type);
  };

  return (
    <div className="  py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <div className="inline-flex items-center bg-gray-200 rounded-full p-1 text-sm">
          <button
            onClick={() => toggleBilling("monthly")}
            className={`px-4 py-1 rounded-full transition-colors ${
              billing === "monthly"
                ? "bg-[#23A2FC] text-white"
                : "text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => toggleBilling("yearly")}
            className={`px-4 py-1 rounded-full transition-colors relative ${
              billing === "yearly" ? "bg-[#23A2FC] text-white" : "text-gray-700"
            }`}
          >
            Yearly
            {billing !== "yearly" && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-1 rounded-full">
                60% off
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="bg-white p-8  rounded-2xl shadow-md text-center">
          <p className="text-[#23A2FC] font-semibold mb-2">FREE</p>
          <p className="text-3xl font-bold mb-4">
            ৳0<span className="text-base font-normal">/month</span>
          </p>
          <button className="w-full bg-[#f0efef] hover:bg-[#e9e9e9] text-gray-700 py-2 rounded-full mb-4  transition">
            Get Started
          </button>
          <p className="text-gray-500 mb-4">Try it out, see what it can do.</p>
          <ul className="text-left text-gray-600 space-y-2">
            <li>
              <span className="text-[#23A2FC]">✔</span> 3 AI resume generations
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> 2 cover letter templates
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Basic job tracking
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Email support
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center border-2 border-[#23A2FC] relative">
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#23A2FC] text-white text-xs px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
          <p className="text-[#23A2FC] font-semibold mb-2">PRO</p>
          <p className="text-3xl font-bold mb-4">
            ৳3000<span className="text-base font-normal">/month</span>
          </p>
          <button className="w-full bg-[#23A2FC] text-white py-2 rounded-full mb-4 hover:bg-blue-600 transition">
            Let's Get You Hired
          </button>
          <p className="text-gray-500 mb-4">
            Save hours of time and stress for less than the cost of lunch.
          </p>
          <ul className="text-left text-gray-600 space-y-2">
            <li>
              <span className="text-[#23A2FC]">✔</span> Unlimited AI resume
              generations
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Create job applications
              in seconds
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Unlimited resume + cover
              letter
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Host your resume online
              + translate it
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Advanced job tracking &
              analytics
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> AI interview preparation
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Interview Buddy
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Priority support
            </li>
          </ul>
        </div>

        {/* Organization Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
          <p className="text-[#23A2FC] font-semibold mb-2">ORGANIZATION</p>
          <p className="text-3xl font-bold mb-4">Custom</p>
          <button className="w-full bg-[#f0efef] hover:bg-[#e9e9e9] text-gray-700 py-2 rounded-full mb-4   transition">
            Talk To Our Team
          </button>
          <p className="text-gray-500 mb-4">Everything in Pro, plus:</p>
          <ul className="text-left text-gray-600 space-y-2">
            <li>
              <span className="text-[#23A2FC]">✔</span> Everything in Pro
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Team management
              dashboard
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Advanced analytics &
              reporting
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Custom integrations
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> Dedicated account
              manager
            </li>
            <li>
              <span className="text-[#23A2FC]">✔</span> 24/7 phone support
            </li>
          </ul>
        </div>
      </div>

      {/* customers talk */}

      <div className="mt-10">
        <h2 className="text-center">
          AIApply transformed my job search! ... I started <br />
          getting 3x more interview invites within weeks.
        </h2>

        <div className="flex justify-center items-center gap-3 pt-5">
          <Image src={customer} alt="customer"></Image>
          <h2>Sophie C, Pro Customer</h2>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
