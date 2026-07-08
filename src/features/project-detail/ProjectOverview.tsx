import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";

import MotionCard from "../../components/common/MotionCard";

import { fadeUp } from "../../animations";

type Props = {
  overview: string;
};

export default function ProjectOverview({ overview }: Props) {
  return (
    <section className="pb-20">
      <Container>
        <SectionTitle
          badge="Project"
          title="Overview"
          subtitle="A closer look at the purpose, goals, and implementation of this project."
          align="left"
        />

        <MotionCard>
          <Card className="p-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                max-w-4xl
                text-lg
                leading-9
                text-[var(--color-muted)]
              "
            >
              {overview}
            </motion.p>
          </Card>
        </MotionCard>
      </Container>
    </section>
  );
}
