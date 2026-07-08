import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "../projects/ProjectCard";

import type { Project } from "../../types/project";

type Props = {
  projects: Project[];
};

export default function RelatedProjects({ projects }: Props) {
  return (
    <section className="pb-24">
      <Container>
        <SectionTitle title="Related Projects" align="left" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
