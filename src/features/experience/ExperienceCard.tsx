import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import type { Experience } from "../../data/experience";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-semibold text-[#146C43]">
          {experience.year}
        </span>

        <div>
          <h3 className="text-xl font-bold">
            {experience.title}
          </h3>

          <p className="text-slate-500">
            {experience.company}
          </p>
        </div>

        <p className="leading-7 text-slate-600">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}