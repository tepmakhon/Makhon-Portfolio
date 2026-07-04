import type { Project } from "../types/project";

import portfolioImage from "../assets/images/projects/portfolio.png";
import ruppImage from "../assets/images/projects/rupp.png";
import smartClassroomImage from "../assets/images/projects/smartclassroom.png";

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
    highlight: false,
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
    highlight: false,
    technologies: [
      "React",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
  },

  {
    id: 3,

    title: "Smart Classroom AI IoT",

    category: "University Project--Group Project",

    description:
      "A modern Smart Classroom platform for teachers to manage students, class sessions, QR attendance, face recognition attendance, and future AI/IoT monitoring.",

    image: smartClassroomImage,

    github: "https://github.com/TunSopheak/Smart-Classroom-AI-IoT",

    demo: "",

    featured: true,
    highlight: false,
    technologies: [
      "Python",
      "HTML/CSS",
      "JavaScript",
      "Flutter",
      "Raspberry Pi 5",
    ],
  },
];