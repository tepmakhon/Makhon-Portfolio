import { FiCheckCircle } from "react-icons/fi";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

type Props = {
  features: string[];
};

export default function ProjectFeatures({
  features,
}: Props) {
  return (
    <section className="pb-20">
      <Container>

        <SectionTitle
          title="Features"
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <FiCheckCircle className="text-[var(--color-primary)]" />

              <span>{feature}</span>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}