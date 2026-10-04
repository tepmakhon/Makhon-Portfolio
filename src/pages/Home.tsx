import { HOME_TITLE, HOME_DESCRIPTION } from "../data/site";
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
      <SEO title={HOME_TITLE} description={HOME_DESCRIPTION} person />

      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}
