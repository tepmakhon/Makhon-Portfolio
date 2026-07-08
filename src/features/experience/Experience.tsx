import Section from "../../components/layout/Section";
import ExperienceCard from "./ExperienceCard";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My learning journey and projects."
    >
      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
