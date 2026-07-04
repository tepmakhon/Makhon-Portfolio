import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import DeveloperCard from "../../components/common/DeveloperCard";

import { profile } from "../../data/profile";

import {
  slideLeft,
  slideRight,
  fadeUp,
  staggerContainer,
} from "../../animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        flex
        min-h-[calc(100vh-64px)]
        items-center
        py-20
      "
    >
      <Container>
        <motion.div
          className="grid items-center gap-20 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left */}

          <motion.div variants={slideLeft}>
            <p className="font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Hello, I'm
            </p>

            <h1
              className="
                mt-4
                text-5xl
                font-extrabold
                leading-tight
                tracking-tight
                text-[var(--color-text)]
                md:text-6xl
                xl:text-7xl
              "
            >
              {profile.fullName}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-[var(--color-primary)]">
              {profile.title}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              {profile.headline}
            </p>

            {/* Statistics */}

            <motion.div
              variants={staggerContainer}
              className="mt-10 flex flex-wrap gap-8"
            >
              <motion.div variants={fadeUp}>
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                  {profile.stats.projects}+
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                  Projects
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                  {profile.stats.certificates}+
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                  Certificates
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                  {profile.stats.technologies}+
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                  Technologies
                </p>
              </motion.div>
            </motion.div>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(profile.resume, "_blank")
                }
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={slideRight}
            className="flex justify-center"
          >
            <DeveloperCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}