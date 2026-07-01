export interface Project {
  id: number;
  title: string;
  category: string;

  description: string;

  image: string;

  github: string;

  demo?: string;

  featured: boolean;

  technologies: string[];
}