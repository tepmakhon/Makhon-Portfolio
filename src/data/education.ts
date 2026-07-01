export interface Education {
  id: number;
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  courses: string[];
}

export const educations: Education[] = [
  {
    id: 1,
    school: "Royal University of Phnom Penh",
    degree: "Bachelor of Computer Science",
    period: "2023 - Present",
    location: "Phnom Penh, Cambodia",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with a focus on software engineering and full-stack web development.",
    courses: [
      "Software Engineering",
      "Database Systems",
      "Data Structures & Algorithms",
      "Networking",
      "Web Development",
      "Object-Oriented Programming",
    ],
  },
  {
    id: 2,
    school: "Sok An Tunlap High School",
    degree: "General Education",
    period: "2021 - 2023",
    location: "Takeo Province, Cambodia",
    description:
      "Completed high school education and developed a strong interest in programming and technology.",
    courses: [
      "Mathematics",
      "Physics",
      "English",
      "Computer Basics",
    ],
  },
];