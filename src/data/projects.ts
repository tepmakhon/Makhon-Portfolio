import type { Project } from "../types/project";

import portfolioImage from "../assets/images/projects/portfolio.png";
import ruppImage from "../assets/images/projects/rupp.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Personal Project",

    description:
      "A modern responsive portfolio built with React, TypeScript and Tailwind CSS.",

    image: portfolioImage,

    github: "https://github.com/tepmakhon/Makhon-Portfolio",

    demo: "",

    featured: true,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
    ],
  },

  {
    id: 2,

    title: "RUPP Student Conference Platform",

    category: "University Project",

    description:
      "A scalable conference and opportunity platform for university students.",

    image: ruppImage,

    github: "https://github.com/tepmakhon/rupp-student-conference-platform",

    demo: "",

    featured: true,

    technologies: [
      "React",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
  },
];