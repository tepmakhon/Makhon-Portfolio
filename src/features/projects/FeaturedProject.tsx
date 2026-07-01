import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
      <div className="grid lg:grid-cols-2">
        {/* Image */}

        <img
          src={project.image}
          alt={project.title}
          className="h-full min-h-[350px] w-full object-cover"
        />

        {/* Content */}

        <div className="flex flex-col justify-center p-10">

          <p className="text-sm font-semibold uppercase tracking-wider text-[#146C43]">
            {project.category}
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {project.title}
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">

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
      </div>
    </section>
  );
}