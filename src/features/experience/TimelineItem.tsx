import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import type { Experience } from "../../data/experience";

type Props = {
  experience: Experience;
};

export default function TimelineItem({ experience }: Props) {
  return (
    <div className="relative pl-12">
      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-0
          top-6
          h-5
          w-5
          rounded-full
          border-4
          border-white
          bg-[#0B3D2E]
          shadow
        "
      />

      <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <span className="text-sm font-semibold text-[#146C43]">
          {experience.year}
        </span>

        <h3 className="mt-2 text-2xl font-bold">{experience.title}</h3>

        <p className="mt-1 text-slate-500">{experience.company}</p>

        <p className="mt-6 leading-8 text-slate-600">
          {experience.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}
