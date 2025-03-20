"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { portfolioProjects } from "@/constants/projects";
import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  IoArrowBackCircleOutline,
  IoGridOutline,
  IoListOutline,
} from "react-icons/io5";
import CardProject from "@/modules/projects/component/CardProject";
import { allProjects, searchProjectsByTitle } from "@/constants/all-projects";
// Pastikan ini sesuai path

const ProjectModule = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(searchProjectsByTitle(searchTerm));
    }
  }, [searchTerm]);

  return (
    <div className="py-8">
      <div className="container">
        <Link
          href="/"
          className="flex gap-2 hover:pl-3 transition-all duration-300 items-center mb-4 cursor-pointer w-[100px]"
        >
          <IoArrowBackCircleOutline size={18} />
          <p className="text-lg">Back</p>
        </Link>

        <div className="border-b border-dashed border-white/60">
          <h1 className="text-3xl mb-2 font-serif">Projects</h1>
          <p className="mb-6 text-white/60">
            Showcasing my passion for technology, design, and problem-solving
            through code.
          </p>
        </div>

        <div className="w-full flex justify-between items-center mt-6">
          <div className="md:w-1/3">
            <Input
              placeholder="Search..."
              className="placeholder:text-white/60 border-white/60 border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              size={"icon"}
              className={`${
                showGrid
                  ? "bg-white hover:bg-slate-100 text-[#111] shadow-md"
                  : "bg-gray-900 text-white shadow-md hover:bg-gray-700"
              } border border-slate-400`}
              // onClick={() => setShowGrid(true)}
            >
              <IoGridOutline size={24} />
            </Button>
            {/* <Button
              size={"icon"}
              className={`${
                !showGrid
                  ? "bg-white hover:bg-slate-100 text-[#111] shadow-md"
                  : "bg-gray-900 text-white shadow-md hover:bg-gray-700"
              } border border-slate-400`}
              onClick={() => setShowGrid(false)}
            >
              <IoListOutline size={24} />
            </Button> */}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          showGrid ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {filteredProjects.map((project, projectIndex) => (
                <CardProject
                  image={project.thumbnail}
                  key={projectIndex}
                  company={"TREC Digital"}
                  year={"2024"}
                  title={project.title}
                  link={`/projects/${project.slug}`}
                  description={project.description}
                  techStack={project.techstack}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-6">
              {/* {filteredProjects.map((project, projectIndex) => (
                <Card
                  key={project.title}
                  className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company} </span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                          <li
                            key={result.title}
                            className="flex gap-2 text-sm text-white/50 md:text-base"
                          >
                            <CheckCircleIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 inline-flex items-center justify-center gap-2 mt-8 h-12 w-full rounded-xl font-semibold md:w-auto px-6">
                          <span>Visit Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </Link>
                    </div>
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                </Card>
              ))} */}
            </div>
          )
        ) : (
          <p className="text-white/50 mt-12 text-center">
            Project Tidak Ditemukan
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectModule;
