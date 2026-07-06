import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Badge from "../../components/ui/Badge";

type Props = {
  technologies: string[];
};

export default function ProjectTechStack({
  technologies,
}: Props) {
  return (
    <section className="pb-20">
      <Container>
        <SectionTitle
          title="Technology Stack"
          align="left"
        />

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}