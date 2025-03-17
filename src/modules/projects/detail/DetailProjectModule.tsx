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
          className="flex gap-2 hover:pl-3 transition-all duration-300 items-center mb-4 cursor-pointer w-[100px] "
        >
          <IoArrowBackCircleOutline size={18} />
          <p className="text-lg">Back</p>
        </Link>
        <div className="border-b border-dashed">
          <h1 className="text-3xl font-semibold mb-2">Projects</h1>
        </div>

        <div className="md:flex justify-between mt-2">
          <div className="flex items-center gap-1 mb-2">
            <p className="font">Tech Stack : </p>
            <div className="flex gap-2 items-center">
              {/* {project.techstack.map((stack, index) => ( */}
              {/* <Tooltip content={stack.name} key={index}> */}
              <Button
                size={"icon"}
                className="min-w-0 w-unit-5 h-unit-5 text-white bg-transparent rounded-none"
              >
                <BiLogoTypescript className="text-blue-400" size={28} />
              </Button>
              {/* </Tooltip> */}
              {/* ))} */}
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

        <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/images/project/website-kg.png"
                  alt="image"
                  width={500}
                  height={500}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-gray-900" />
            <CarouselNext className="text-gray-900" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DetailProjectModule;
