"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { TProjectItem } from "@/types/projects";
import { iconMap } from "@/lib/iconMap";

const DetailProjectModule = ({ project }: { project: TProjectItem }) => {
  console.log(project);

  return (
    <div className="py-8">
      <div className="container">
        <Link
          href="/projects"
          className="flex gap-2 hover:pl-3 transition-all duration-300 items-center mb-4 cursor-pointer w-[100px]"
        >
          <IoArrowBackCircleOutline size={18} />
          <p className="text-lg">Back</p>
        </Link>
        <div className="border-b border-dashed">
          <h1 className="text-3xl font-serif  mb-4">{project.title}</h1>
        </div>

        <div className="md:flex-row flex flex-col justify-between mt-5 gap-6">
          <div className="flex items-center gap-1">
            <div className="flex gap-2 items-center">
              {project.techstack.map((tech, index) => (
                <TooltipProvider delayDuration={100} key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div>{iconMap[tech.icon] || null}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {project.github && (
              <Link
                className="flex gap-2 items-center group"
                href={project.github}
                target="_blank"
              >
                <FaGithub
                  size={20}
                  className="group-hover:animate-bounce group-hover:transition-all group-hover:duration-1000 ease-in-out"
                />
                <p className="text-teal-500 hover:text-teal-400 text-sm md:text-base">
                  Source Code
                </p>
              </Link>
            )}
            {project.github && project.link && (
              <span className="text-white/50">|</span>
            )}

            {project.link && (
              <Link
                className="flex gap-2 items-center group"
                href={project.link}
                target="_blank"
              >
                <FaExternalLinkAlt
                  size={18}
                  className="group-hover:animate-bounce group-hover:transition-all group-hover:duration-1000 ease-in-out"
                />
                <p className="text-teal-500 hover:text-teal-400 text-sm md:text-base">
                  Live Demo
                </p>
              </Link>
            )}
          </div>
        </div>

        <div className="my-8">
          <Carousel className="w-[80%] md:w-full mx-auto">
            <CarouselContent className="flex">
              {project.image.map((image, index) => (
                <CarouselItem className="relative w-full h-[400px]" key={index}>
                  <Image
                    src={image}
                    alt="Project-Image"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-top rounded-lg"
                    quality={100}
                    priority
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-900" />
            <CarouselNext className="text-gray-900" />
          </Carousel>
        </div>

        <div className="text-justify  text-white/50">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProjectModule;
