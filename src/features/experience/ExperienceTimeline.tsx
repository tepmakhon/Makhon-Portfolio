import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import TimelineItem from "./TimelineItem";

import { experiences } from "../../data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My journey in software development."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-2
              top-0
              h-full
              w-1
              rounded-full
              bg-slate-200
            "
          />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}