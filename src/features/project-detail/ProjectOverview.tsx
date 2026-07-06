import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

type Props = {
  overview: string;
};

export default function ProjectOverview({
  overview,
}: Props) {
  return (
    <section className="pb-20">
      <Container>

        <SectionTitle
          title="Overview"
          align="left"
        />

        <p className="max-w-4xl text-lg leading-9 text-[var(--color-muted)]">
          {overview}
        </p>

      </Container>
    </section>
  );
}