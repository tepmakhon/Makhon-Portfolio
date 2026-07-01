import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Projects that demonstrate my experience in building modern web applications."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
        </div>
      </Container>
    </section>
  );
}