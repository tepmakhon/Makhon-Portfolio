import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import MotionCard from "../../components/common/MotionCard";

import { fadeUp } from "../../animations";

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
          badge="Highlights"
          title="Key Features"
          subtitle="The main capabilities implemented in this project."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MotionCard key={feature}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="flex items-center gap-4 p-6">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-primary-soft)]
                    "
                  >
                    <FiCheckCircle
                      className="text-[var(--color-primary)]"
                      size={22}
                    />
                  </div>

                  <span
                    className="
                      font-medium
                      text-[var(--color-text)]
                    "
                  >
                    {feature}
                  </span>
                </Card>
              </motion.div>
            </MotionCard>
          ))}
        </div>
      </Container>
    </section>
  );
}