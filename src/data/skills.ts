export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "REST API", level: "Intermediate" },
      { name: "Prisma", level: "Intermediate" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "SQLite", level: "Intermediate" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Cloudinary", level: "Intermediate" },
    ],
  },
];