import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import Badge from "../../components/ui/Badge";
import type { Project } from "../../types/project";
export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] ${featured ? "grid lg:grid-cols-2" : "flex h-full flex-col"}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block overflow-hidden bg-[var(--color-primary-soft)]"
        aria-label={`Read about ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} application screenshot`}
          width="1600"
          height="1039"
          loading="lazy"
          decoding="async"
          className={`w-full object-contain ${featured ? "h-full min-h-56 p-4 sm:p-8" : "aspect-[16/10]"}`}
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="eyebrow">
          {featured ? "Featured project / " : ""}
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="mt-4 leading-7 text-[var(--color-muted)]">
          {project.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-border)] pt-4">
          <Link className="link-text" to={`/projects/${project.slug}`}>
            Project details <FiArrowUpRight aria-hidden="true" />
          </Link>
          <a
            className="link-text text-sm"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" /> GitHub
            <span className="sr-only"> for {project.title}</span>
          </a>
          {project.demo && (
            <a
              className="link-text text-sm"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
