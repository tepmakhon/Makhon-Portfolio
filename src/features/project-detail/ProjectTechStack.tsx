import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import SectionTitle from "../../components/ui/SectionTitle";

import MotionCard from "../../components/common/MotionCard";

import { fadeUp, staggerContainer } from "../../animations";

type Props = {
  technologies: string[];
};

export default function ProjectTechStack({ technologies }: Props) {
  return (
    <section className="pb-20">
      <Container>
        <SectionTitle
          badge="Technology"
          title="Technology Stack"
          subtitle="Technologies, frameworks, and tools used to build this project."
          align="left"
        />

        <MotionCard>
          <Card className="p-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {technologies.map((tech) => (
                <motion.div key={tech} variants={fadeUp}>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface)]
                      px-4
                      py-2
                      shadow-sm
                    "
                  >
                    <FiCode className="text-[var(--color-primary)]" />

                    <Badge>{tech}</Badge>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </MotionCard>
      </Container>
    </section>
  );
}
