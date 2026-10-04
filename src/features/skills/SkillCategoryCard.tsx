import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import type { Skill } from "../../data/skills";
export default function SkillCategoryCard({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <Card className="h-full">
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill.name}>
            <Badge>{skill.name}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
