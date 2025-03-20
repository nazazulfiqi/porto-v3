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
import { iconMap } from "@/lib/iconMap";
import { ProjectType } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReactquery,
  SiRecoil,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Pemetaan string ke ikon React

const CardProject: FC<ProjectType> = ({
  techStack,
  description,
  title,
  image,
  link,
}) => {
  return (
    <Link href={link} className="block">
      <Card className="overflow-hidden text-white border border-transparent transition-all duration-300 ease-in-out hover:after:outline-emerald-300 hover:scale-[1.03] after:transition-all after:duration-500">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={Array.isArray(image) ? image[0] : image}
              alt={title}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="rounded-t-lg"
              quality={100}
              priority
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
                  <div>{iconMap[tech.icon] || null}</div>
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
