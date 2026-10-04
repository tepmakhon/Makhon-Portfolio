import Container from "../../components/layout/Container";
import { caseStudies } from "../../data/caseStudies";
export default function ProjectCaseStudy({ slug }: { slug: string }) {
  return (
    <section>
      <Container>
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">
          Behind the project
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies[slug]?.map((section) => (
            <div
              key={section.title}
              className="border-t border-[var(--color-border)] pt-5"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p className="mt-3 leading-8 text-[var(--color-muted)]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
