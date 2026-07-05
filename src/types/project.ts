export type Project = {
  id: number;

  slug: string;

  title: string;

  category: string;

  shortDescription: string;

  overview: string;

  features: string[];

  technologies: string[];

  image: string;

  images: string[];

  github: string;

  demo?: string;

  highlight: boolean;
};