import type { Project } from "../types/project";

import portfolioImage from "../assets/images/projects/portfolio.webp";
import ruppImage from "../assets/images/projects/rupp.webp";
import smartClassroomImage from "../assets/images/projects/smartclassroom.webp";

export const projects: Project[] = [
  {
    id: 1,

    slug: "developer-portfolio",

    title: "Developer Portfolio",

    category: "Personal Project",

    shortDescription:
      "A modern responsive developer portfolio built with React and TypeScript.",

    overview:
      "A personal portfolio website showcasing my skills, projects, experience, education, and certifications. Built with reusable components, dark mode, animations, and responsive design.",

    features: [
      "Responsive Design",
      "Dark Mode",
      "Smooth Animations",
      "Project Showcase",
      "Certificates",
      "Contact Form",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
    ],

    image: portfolioImage,

    images: [portfolioImage],

    github: "https://github.com/tepmakhon/Makhon-Portfolio",

    demo: "https://tepmakhon-portfolio.vercel.app",

    highlight: false,
  },

  {
    id: 2,

    slug: "rupp-student-conference-platform",

    title: "RUPP Student Conference & Opportunity Platform",

    category: "University Project",

    shortDescription:
      "A scalable conference and opportunity platform for university students.",

    overview:
      "A full-stack web application designed to help RUPP students discover conferences, internships, scholarships, competitions, and career opportunities in one platform.",

    features: [
      "JWT Authentication",
      "Student Dashboard",
      "Opportunity Management",
      "Conference Registration",
      "Admin Dashboard",
      "Role Based Access Control",
    ],

    technologies: ["React", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],

    image: ruppImage,

    images: [ruppImage],

    github: "https://github.com/tepmakhon/rupp-student-conference-platform",

    demo: "",

    highlight: true,
  },

  {
    id: 3,

    slug: "smart-classroom-ai-iot",

    title: "Smart Classroom AI IoT",

    category: "University Group Project",

    shortDescription: "AI and IoT based classroom management platform.",

    overview:
      "A smart classroom system that supports attendance using QR Code and Face Recognition, AI monitoring, classroom management, and IoT integration using Raspberry Pi.",

    features: [
      "QR Attendance",
      "Face Recognition",
      "AI Monitoring",
      "Teacher Dashboard",
      "Flutter Mobile App",
      "IoT Integration",
    ],

    technologies: [
      "Python",
      "Flutter",
      "JavaScript",
      "HTML/CSS",
      "Raspberry Pi 5",
    ],

    image: smartClassroomImage,

    images: [smartClassroomImage],

    github: "https://github.com/TunSopheak/Smart-Classroom-AI-IoT",

    demo: "",

    highlight: false,
  },
];
