import { Card } from "@/components/Card";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectType } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiRecoil,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Pemetaan string ke ikon React
const iconMap: Record<string, JSX.Element> = {
  FaReact: <FaReact size={25} className="text-sky-600" />,
  SiBootstrap: <SiBootstrap size={25} className="text-indigo-500 " />,
  SiMui: <SiMui size={25} className="text-blue-300" />,
  SiNextdotjs: <SiNextdotjs size={25} />,
  SiReactquery: <SiReactquery size={25} className="text-rose-500" />,
  SiRecoil: <SiRecoil size={25} className="text-blue-600" />,
  SiRedux: <SiRedux size={25} className="text-purple-600" />,
  SiTailwindcss: <SiTailwindcss size={25} className="text-cyan-300" />,
  SiTypescript: <SiTypescript size={23} className="text-blue-400" />,
};

const CardProject: FC<ProjectType> = ({
  techStack,
  description,
  title,
  image,
  link,
}) => {
  return (
    <Link href={link || "#"}>
      <Card className="overflow-hidden text-white">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={Array.isArray(image) ? image[0] : image}
              alt={title}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="rounded-t-lg "
            />
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          <CardTitle className="py-4 font-serif font-medium text-xl tracking-normal">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-xs text-white/50 md:text-sm pr-8">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pb-5 flex gap-2">
          {techStack.map((tech, index) => (
            <TooltipProvider delayDuration={100} key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <div key={index} className="">
                    {iconMap[tech.icon] || null}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardProject;
