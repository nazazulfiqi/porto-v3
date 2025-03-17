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
import Image from "next/image";

const DetailProjectModule = () => {
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
          <h1 className="text-3xl font-semibold mb-2">Project Name</h1>
        </div>

        <div className="md:flex justify-between mt-2">
          <div className="flex items-center gap-1 mb-2">
            <p className="font">Tech Stack :</p>
            <div className="flex gap-2 items-center">
              <Button
                size={"icon"}
                className="min-w-0 w-unit-5 h-unit-5 text-white bg-transparent rounded-none"
              >
                <BiLogoTypescript className="text-blue-400" size={28} />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link className="flex gap-2 items-center group" href={``}>
              <FaGithub
                size={20}
                className="group-hover:animate-bounce group-hover:transition-all group-hover:duration-1000 ease-in-out"
              />
              <p className="text-teal-500 hover:text-teal-400">Source Code</p>
            </Link>
            |
            <Link className="flex gap-2 items-center group" href={"/"}>
              <FaExternalLinkAlt
                size={18}
                className="group-hover:animate-bounce group-hover:transition-all group-hover:duration-1000 ease-in-out"
              />
              <p className="text-teal-500 hover:text-teal-400">Live Demo</p>
            </Link>
          </div>
        </div>

        <div className="my-8">
          <Carousel className="w-full">
            <CarouselContent className="flex">
              <CarouselItem className="relative w-full h-[400px]">
                <Image
                  src="/images/project/project-kg-cover.jpg"
                  alt="Project-Image"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top rounded-lg"
                  priority
                />
              </CarouselItem>
              <CarouselItem className="relative w-full h-[400px]">
                <Image
                  src="/images/project/project-kg-cover.jpg"
                  alt="Project-Image"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top rounded-lg"
                  priority
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-gray-900" />
            <CarouselNext className="text-gray-900" />
          </Carousel>
        </div>

        <div className="text-justify">
          <p>
            Developed the website using NextJS 13, React TypeScript, Nx
            Monorepo, Tailwind CSS, Recoil, React Query, Zod Validation, React
            Hook Form, and Headless UI on the front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProjectModule;
