"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/Jobmantic.png";
import { usePathname } from "next/navigation";
import { FaSortDown, FaSortUp } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const [careerOpen, setCareerOpen] = useState(false);

  const careerDropdown = [
    { name: "Jobs", path: "/career/jobs" },
    { name: "Internships", path: "/career/internships" },
    { name: "Guides", path: "/career/guides" },
  ];
  const navOptions = (
    <>
      <Link
        href="/ai-resume"
        className={`px-2 py-1 ${
          pathname === "/ai-resume"
            ? "text-[#23A2FC]"
            : "text-[#080808] hover:text-[#23A2FC]"
        }`}
      >
        AI Resume
      </Link>
      <Link
        href="/ai-coverletter"
        className={`px-2 py-1 ${
          pathname === "/ai-coverletter"
            ? "text-[#23A2FC]"
            : "text-[#080808] hover:text-[#23A2FC]"
        }`}
      >
        AI Coverletter
      </Link>
      <Link
        href="/pricing"
        className={`px-2 py-1 ${
          pathname === "/pricing"
            ? "text-[#23A2FC]"
            : "text-[#080808] hover:text-[#23A2FC]"
        }`}
      >
        Pricing
      </Link>

      {/* Career dropdown */}
      <div className="relative inline-block">
        <button
          onClick={() => setCareerOpen(!careerOpen)}
          className={`px-2 py-1 flex items-center gap-1 ${
            pathname.startsWith("/career")
              ? "text-[#23A2FC] font-semibold"
              : "text-[#080808] hover:text-[#23A2FC]"
          }`}
        >
          Career
          <span>{careerOpen ? <FaSortUp /> : <FaSortDown />}</span>
        </button>

        {careerOpen && (
          <ul className="absolute top-full left-0 mt-1 w-40 bg-white shadow rounded-md">
            {careerDropdown.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2 ${
                    pathname === item.path
                      ? "text-[#23A2FC] font-semibold"
                      : "text-[#080808] hover:text-[#23A2FC]"
                  }`}
                  onClick={() => setCareerOpen(false)} // close dropdown on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href="/organization"
        className={`px-2 py-1 ${
          pathname === "/organization"
            ? "text-[#23A2FC]"
            : "text-[#080808] hover:text-[#23A2FC]"
        }`}
      >
        Organization
      </Link>
      <Link
        href="/blog"
        className={`px-2 py-1 ${
          pathname === "/blog"
            ? "text-[#23A2FC]"
            : "text-[#080808] hover:text-[#23A2FC]"
        }`}
      >
        Blog
      </Link>
    </>
  );

  return (
    <div className="navbar my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link href="/">
          <Image src={logo} alt="Jobmantic Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal gap-3 px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end flex gap-2 items-center">
        <Link href="/login">
          <button className="font-semibold text-xs sm:text-base py-1 px-2 sm:py-2 sm:px-4 rounded-md  cursor-pointer">
            Log In
          </button>
        </Link>
        <Link href="/signUp">
          <button
            className="bg-black text-white font-semibold text-xs sm:text-base py-1 px-3 sm:py-2 sm:px-4 
             rounded-full cursor-pointer 
             transition-all duration-300 ease-in-out 
             hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
