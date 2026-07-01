import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import EducationCard from "./EducationCard";

import { educations } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <Container>
        <SectionTitle
          title="Education"
          subtitle="My academic journey and continuous learning."
        />

        <div className="space-y-8">
          {educations.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}