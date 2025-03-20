// type ProjectResult = {
//     title: string;
//   };
  
  export type ProjectType = {
    company: string;
    year: string;
    title: string;
    techStack: Array[];
    // results: ProjectResult[];
    link: string;
    image: any;
    description: string;
  };

  export type TechStack = {
    name: string;
    icon: string;
  };
  
  export type TProjectItem = {
    title: string;
    slug: string;
    link?: string | null;
    description: string;
    company?: string;
    year?: string;
    featured: boolean;
    thumbnail: string;
    github?: string | null;
    image: string[];
    techstack: TechStack[];
  };