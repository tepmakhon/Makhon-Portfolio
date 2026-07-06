import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Container from "../../components/layout/Container";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section className="py-20">
      <Container>

        <img
          src={project.image}
          alt={project.title}
          className="h-[500px] w-full rounded-3xl object-cover"
        />

        <div className="mt-10">

          <Badge>{project.category}</Badge>

          <h1 className="mt-6 text-5xl font-bold">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            {project.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              onClick={() =>
                window.open(project.github, "_blank")
              }
            >
              <FiGithub />
              GitHub
            </Button>

            {project.demo && (
              <Button
                variant="outline"
                onClick={() =>
                  window.open(project.demo, "_blank")
                }
              >
                <FiExternalLink />
                Live Demo
              </Button>
            )}

          </div>

        </div>

      </Container>
    </section>
  );
}