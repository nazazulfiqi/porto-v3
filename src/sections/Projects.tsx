import kampusGratis from "@/assets/images/kampus-gratis.png";
import jakstikCareer from "@/assets/images/jakstik-career.png";
import datahub from "@/assets/images/datahub.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "STMIK Jakarta STI&K",
    year: "2024",
    title: "Jakstik Career",
    results: [
      { title: "Improved job matching by 40%" },
      { title: "Streamlined internship search process" },
      { title: "Boosted platform engagement" },
    ],
    link: "https://jakstik-career.nazazulfiqi.me",
    image: jakstikCareer,
  },
  {
    company: "TREC Digital",
    year: "2024",
    title: "Datahub",
    results: [
      { title: "Simplified data visualization" },
      { title: "Enhanced dashboard usability" },
      { title: "Boosted analytics accuracy" },
    ],
    link: "https://www.trecdigital.id",
    image: datahub,
  },
  {
    company: "M-Knows Consulting",
    year: "2023",
    title: "Kampus Gratis",
    results: [
      { title: "Empowered 20% more students" },
      { title: "Integrated LMS seamlessly" },
      { title: "Expanded education access" },
    ],
    link: "https://kampusgratis.id",
    image: kampusGratis,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company} </span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 " />
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
          ))}
        </div>
        <div className="flex justify-center w-full">
          <Link
            href="/projects"
            className="bg-white text-gray-950 inline-flex items-center justify-center gap-2 mt-8 h-12 w-full md:w-1/2  rounded-2xl font-semibold  px-6"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
