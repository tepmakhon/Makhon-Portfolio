export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST API" },
      { name: "Prisma" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQLite" }],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
    ],
  },
  {
    title: "Additional Technologies",
    skills: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Flutter" },
      { name: "Raspberry Pi" },
    ],
  },
];
