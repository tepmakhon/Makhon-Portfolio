import Section from "../../components/layout/Section";
import EducationCard from "./EducationCard";

import { educations } from "../../data/education";

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic journey and continuous learning."
    >

        <div className="space-y-8">
          {educations.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
            />
          ))}
        </div>
    </Section>
  );
}