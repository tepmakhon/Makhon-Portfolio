import { Link } from "react-router-dom";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import Container from "../../components/layout/Container";
import Badge from "../../components/ui/Badge";
import type { Project } from "../../types/project";
export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section>
      <Container>
        <Link className="link-text mb-8" to="/#projects">
          <FiArrowLeft aria-hidden="true" /> Back to Projects
        </Link>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {project.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
              >
                <FiGithub aria-hidden="true" /> View source
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link action-outline"
                >
                  Live demo <FiExternalLink aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          <img
            src={project.image}
            alt={`${project.title} application screenshot`}
            width="1600"
            height="1039"
            fetchPriority="high"
            className="aspect-[16/10] w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] object-contain p-3"
          />
        </div>
      </Container>
    </section>
  );
}
