import { useParams } from "react-router-dom";

import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-[var(--color-muted)]">
          {project.shortDescription}
        </p>
      </div>
    </section>
  );
}