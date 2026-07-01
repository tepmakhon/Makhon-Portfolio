import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ExperienceCard from "./ExperienceCard";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My learning journey and projects."
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}