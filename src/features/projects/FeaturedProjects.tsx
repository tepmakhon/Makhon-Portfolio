import Section from "../../components/layout/Section";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  const highlightProject = projects.find((p) => p.highlight);

  const otherProjects = projects.filter((p) => !p.highlight);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Projects that demonstrate my technical skills."
    >
      {highlightProject && <FeaturedProject project={highlightProject} />}

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
