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

export const allProjects = [
  {
    id: 1,
    title: "Kampus Gratis",
    slug: "kampus-gratis",
    link: "https://kampusgratis.id/",
    description:
      "Developed the website using NextJS 13, React TypeScript, Nx Monorepo, Tailwind CSS, Recoil, React Query, Zod Validation, React Hook Form, and Headless UI on the front-end development.",
    featured: true,

    thumbnail: "/images/project/project-kg-cover.jpg",
    github: "https://github.com/nazazulfiqi/kampusgratis",
    image: [
      {
        id: 1,
        src: "/images/project/website-kg.png",
      },
      {
        id: 2,
        src: "/images/project/website-kg.png",
      },
    ],
    techstack: [
      {
        name: "Next.Js",
        icon: <SiNextdotjs size={25} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={18} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
      {
        name: "Recoil",
        icon: <SiRecoil size={25} />,
      },
      {
        name: "React Query",
        icon: <SiReactquery size={25} />,
      },
    ],
  },
  {
    id: 2,
    title: "Kampus Gratis Admin",
    slug: "kg-admin",
    link: "https://kampusgratis.id/",
    description:
      "Developed the website using NextJS 14, React TypeScript, Tailwind CSS, Recoil, React Query, Zod Validation, React Hook Form, and Shadcn UI on the front-end development.",
    featured: true,

    thumbnail: "/images/project/website-kg-admin.png",
    github: "https://github.com/nazazulfiqi/kampusgratis",
    image: [
      {
        id: 1,
        src: "/images/project/website-kg-admin.png",
      },
    ],
    techstack: [
      {
        name: "Next.Js",
        icon: <SiNextdotjs size={25} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={18} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={25} />,
      },
      {
        name: "Recoil",
        icon: <SiRecoil size={25} />,
      },
      {
        name: "React Query",
        icon: <SiReactquery size={25} />,
      },
    ],
  },
  {
    id: 3,
    title: "Jak Smart",
    slug: "jak-smart",
    link: "https://jak-smart.my.id/",
    description:
      "JakSmart is a CRM-based marketplace application integrated with the Financial Management of the Jakarta College of Informatics and Computer Management (STI&K). This free application is designed to be utilized by Micro, Small, and Medium Enterprises (UMKM).",
    featured: true,
    thumbnail: "/images/project/website-jaksmart.png",
    github: "https://github.com/nazazulfiqi/kampusgratis",
    image: [
      {
        id: 1,
        src: "/images/project/website-jaksmart.png",
      },
    ],
    techstack: [
      {
        name: "React.Js",
        icon: <FaReact size={25} />,
      },
      {
        name: "Material UI",
        icon: <SiMui size={25} />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={25} />,
      },
    ],
  },
  {
    id: 4,
    title: "Suka Baca",
    slug: "suka-baca",
    link: "https://sukabacaa.netlify.app/",
    description:
      "This is the final project of the Skilvul Tech4Impact x Kampus Merdeka Batch 3 collaboration, which was created by implementing the MERN Stack technology.",
    featured: true,
    thumbnail: "/images/project/website-sukabaca.png",
    github: "https://github.com/nazazulfiqi/kampusgratis",
    image: [
      {
        id: 1,
        src: "/images/project/website-sukabaca.png",
      },
    ],
    techstack: [
      {
        name: "React.Js",
        icon: <FaReact size={25} />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={25} />,
      },
      {
        name: "Redux",
        icon: <SiRedux size={25} />,
      },
    ],
  },
  {
    id: 5,
    title: "Lab SI/MI",
    slug: "lab-simi",
    link: "https://lab-simi.vercel.app/",
    description:
      "This is a project for the information systems laboratory to provide information to all STMIK Jakarta STI&K students about the laboratory.",
    featured: true,
    thumbnail: "/images/project/website-labsimi.png",
    github: "https://github.com/nazazulfiqi/kampusgratis",
    image: [
      {
        id: 1,
        src: "/images/project/website-labsimi.png",
      },
    ],
    techstack: [
      {
        name: "React.Js",
        icon: <FaReact size={25} />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={25} />,
      },
    ],
  },
];
