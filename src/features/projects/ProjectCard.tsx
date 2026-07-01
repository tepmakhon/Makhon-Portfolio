import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <Card className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="text-sm font-semibold text-[#146C43]">
          {project.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Button
            className="flex items-center gap-2"
            onClick={() => window.open(project.github)}
          >
            <FiGithub />
            GitHub
          </Button>

          {project.demo && (
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(project.demo)}
            >
              <FiExternalLink />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}