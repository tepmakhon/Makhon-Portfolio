import Card from "../../components/ui/Card";

import type { Skill } from "../../data/skills";

type Props = {
  title: string;
  skills: Skill[];
};

const levelColors = {
  Beginner: "bg-red-100 text-red-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-green-100 text-green-700",
};

export default function SkillCategoryCard({
  title,
  skills,
}: Props) {
  return (
    <Card className="h-full">
      <h3 className="mb-6 text-xl font-semibold">
        {title}
      </h3>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between"
          >
            <span className="font-medium">
              {skill.name}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[skill.level]}`}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}