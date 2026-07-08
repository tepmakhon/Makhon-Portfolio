import SEO from "../components/common/SEO";

import Hero from "../features/hero/Hero";
import About from "../features/about/About";
import Skills from "../features/skills/Skills";
import ExperienceTimeline from "../features/experience/ExperienceTimeline";
import Education from "../features/education/Education";
import FeaturedProjects from "../features/projects/FeaturedProjects";
import Certificates from "../features/certificates/Certificates";
import Contact from "../features/contact/Contact";

export default function Home() {
  return (
    <>
      <SEO
        title="Tep Makhon | Full Stack Developer"
        description="Portfolio of Tep Makhon, Full Stack Developer specializing in React, TypeScript, Express, PostgreSQL, Prisma, and modern web development."
        url="https://makhon-portfolio.vercel.app"
      />

      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
      <Education />
      <FeaturedProjects />
      <Certificates />
      <Contact />
    </>
  );
}
