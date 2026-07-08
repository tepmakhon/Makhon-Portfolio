export interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    year: "2026 - Present",
    title: "Full Stack Developer",
    company: "Personal Projects",
    description:
      "Designing and developing modern full-stack web applications with React, TypeScript, Express, Prisma, and PostgreSQL. Currently building scalable portfolio projects while focusing on clean architecture, security, and deployment.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Git",
    ],
  },
  {
    id: 2,
    year: "2026 - Present",
    title: "RUPP Student Conference & Opportunity Platform",
    company: "Royal University of Phnom Penh",
    description:
      "Leading the design and development of a scalable university platform connecting students with conferences, scholarships, internships, competitions, and career opportunities. Responsible for system architecture, database design, authentication, and full-stack development.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.ts",
      "Swagger",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    year: "2026",
    title: "Personal Portfolio Website",
    company: "Personal Project",
    description:
      "Built a responsive developer portfolio showcasing projects, technical skills, certifications, and contact information with a modern UI and optimized performance.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
    ],
  },
  {
    id: 4,
    year: "2025",
    title: "Web Development Learning Journey",
    company: "Self-Learning",
    description:
      "Studied modern web development from fundamentals, including HTML, CSS, JavaScript, React, backend development, databases, Git, and software engineering principles through hands-on projects.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    id: 5,
    year: "2024",
    title: "Python & Flask Training",
    company: "Engineering of Technology and Electronic (ETEC)",
    description:
      "Completed Basic and Advanced Python programming and Flask web development training, covering Python fundamentals, object-oriented programming, database integration, and building web applications with Flask.",
    technologies: ["Python", "Flask", "SQL", "HTML", "CSS"],
  },
];
