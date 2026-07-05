import type { Project } from "../types/project";

import portfolioImage from "../assets/images/projects/portfolio.png";
import ruppImage from "../assets/images/projects/rupp.png";
import smartClassroomImage from "../assets/images/projects/smartclassroom.png";

export const projects: Project[] = [
  {
    id: 1,

    slug: "developer-portfolio",

    title: "Developer Portfolio",

    category: "Personal Project",

    shortDescription:
      "A modern responsive developer portfolio built with React and TypeScript.",

    overview:
      "A premium portfolio website showcasing my skills, projects, experience, education, and certifications. Built with reusable components, dark mode, animations, and responsive design.",

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
      "Cloudinary",
    ],

    image: portfolioImage,

    images: [
      portfolioImage,
      portfolioImage,
      portfolioImage,
    ],

    github:
      "https://github.com/tepmakhon/Makhon-Portfolio",

    demo: "",

    highlight: true,
  },

  {
    id: 2,

    slug: "rupp-student-conference-platform",

    title: "RUPP Student Conference Platform",

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

    technologies: [
      "React",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    image: ruppImage,

    images: [
      ruppImage,
      ruppImage,
      ruppImage,
    ],

    github:
      "https://github.com/tepmakhon/rupp-student-conference-platform",

    demo: "",

    highlight: false,
  },

  {
    id: 3,

    slug: "smart-classroom-ai-iot",

    title: "Smart Classroom AI IoT",

    category: "University Group Project",

    shortDescription:
      "AI and IoT based classroom management platform.",

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

    images: [
      smartClassroomImage,
      smartClassroomImage,
      smartClassroomImage,
    ],

    github:
      "https://github.com/TunSopheak/Smart-Classroom-AI-IoT",

    demo: "",

    highlight: false,
  },
];