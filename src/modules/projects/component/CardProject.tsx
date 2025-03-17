import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectType } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiLogoTypescript } from "react-icons/bi";

const CardProject: FC<ProjectType> = ({
  company,
  description,
  year,
  title,
  image,
  link,
}) => {
  return (
    <Link href={"/projects/test"}>
      <Card className="overflow-hidden text-gray-700">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="top" // Pastikan gambar dimulai dari atas
              className="rounded-t-lg "
            />
          </div>
        </CardHeader>

        <CardContent className="pb-3">
          <CardTitle className="py-3 font-medium text-base">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-xs pr-8">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pb-3">
          <BiLogoTypescript className="text-blue-400" size={28} />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardProject;
