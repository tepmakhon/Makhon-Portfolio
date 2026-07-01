import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import SkillCategoryCard from "./SkillCategoryCard";

import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Skills"
          subtitle="The technologies and tools I use to build modern web applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategoryCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}