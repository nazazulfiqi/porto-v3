"use client";

import Link from "next/link";
import React from "react";
import {
  IoArrowBackCircleOutline,
  IoGridOutline,
  IoListOutline,
} from "react-icons/io5";

const ProjectModule = () => {
  const [showGrid, setShowGrid] = React.useState(true);
  const [showList, setShowList] = React.useState(false);

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <Link
          href="/"
          className="flex gap-2 hover:pl-3 transition-all duration-300 items-center mb-4 cursor-pointer w-[100px] "
        >
          <IoArrowBackCircleOutline size={18} />
          <p className="text-lg">Back</p>
        </Link>
        <div className="border-b border-dashed">
          <h1 className="text-3xl font-semibold mb-2">Projects</h1>

          <p className="mb-6">
            Showcasing my passion for technology, design, and problem-solving
            through code.
          </p>
        </div>

        <div className="w-full flex justify-between items-center mt-6">
          <div className="md:w-1/3">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              className={`${
                showGrid
                  ? "bg-white hover:bg-slate-100  text-[#111] shadow-md"
                  : "bg-[#111] text-white shadow-md"
              } border border-slate-400`}
              onClick={() => {
                setShowGrid(!showGrid); // Fix: Use the new state value directly
                setShowList(!showList);
              }}
            >
              <IoGridOutline size={24} />
            </button>
            <button
              className={`${
                showList
                  ? "bg-white hover:bg-slate-100  text-[#111] shadow-md"
                  : "bg-[#111] text-white shadow-md"
              }  border border-slate-400 `}
              onClick={() => {
                setShowGrid(!showGrid);
                setShowList(!showList); // Fix: Use the new state value directly
              }}
            >
              <IoListOutline size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModule;
