import ProjectCard from "./ProjectCard";
import type { Project } from "../../types/project";
export default function FeaturedProject({ project }: { project: Project }) {
  return <ProjectCard project={project} featured />;
}
