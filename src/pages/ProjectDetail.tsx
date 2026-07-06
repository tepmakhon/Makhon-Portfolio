import { useParams } from "react-router-dom";

import { projects } from "../data/projects";
import ProjectHero from "../features/project-detail/ProjectHero";
import ProjectOverview from "../features/project-detail/ProjectOverview";
import ProjectFeatures from "../features/project-detail/ProjectFeatures";
import ProjectTechStack from "../features/project-detail/ProjectTechStack";
import ProjectGallery from "../features/project-detail/ProjectGallery";
import RelatedProjects from "../features/project-detail/RelatedProjects";
import ProjectNavigation from "../features/project-detail/ProjectNavigation";
import SEO from "../components/common/SEO";
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
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const currentIndex = projects.findIndex(
    (p) => p.id === project.id
  );

  const previousProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : undefined;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;
  return (
  <>
    <SEO
      title={`${project.title} | Tep Makhon`}
      description={project.shortDescription}
      image={project.image}
      url={`https://tepmakhon.dev/projects/${project.slug}`}
    />

    <ProjectHero project={project} />

    <ProjectOverview
      overview={project.overview}
    />

    <ProjectFeatures
      features={project.features}
    />

    <ProjectTechStack
      technologies={project.technologies}
    />

    <ProjectGallery
      images={project.images}
    />

    <RelatedProjects
      projects={relatedProjects}
    />

    <ProjectNavigation
      previous={previousProject}
      next={nextProject}
    />
  </>
  );
}