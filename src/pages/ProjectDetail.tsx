import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

import { projects } from "../data/projects";
import ProjectHero from "../features/project-detail/ProjectHero";
import ProjectCaseStudy from "../features/project-detail/ProjectCaseStudy";
import ProjectOverview from "../features/project-detail/ProjectOverview";
import ProjectFeatures from "../features/project-detail/ProjectFeatures";
import ProjectTechStack from "../features/project-detail/ProjectTechStack";
import ProjectGallery from "../features/project-detail/ProjectGallery";
import RelatedProjects from "../features/project-detail/RelatedProjects";
import ProjectNavigation from "../features/project-detail/ProjectNavigation";
import SEO from "../components/common/SEO";
export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;
  return (
    <>
      <SEO
        title={`${project.title} | Tep Makhon`}
        description={`${project.shortDescription} Explore the technology, features, and project context in Tep Makhon’s portfolio.`}
        project={project}
        image={project.image}
        url={`/projects/${project.slug}`}
      />

      <ProjectHero project={project} />

      <ProjectOverview overview={project.overview} />
      <ProjectCaseStudy slug={project.slug} />

      <ProjectFeatures features={project.features} />

      <ProjectTechStack technologies={project.technologies} />

      <ProjectGallery images={project.images} title={project.title} />

      <RelatedProjects projects={relatedProjects} />

      <ProjectNavigation previous={previousProject} next={nextProject} />
    </>
  );
}
