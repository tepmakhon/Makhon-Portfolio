import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";
import DeveloperCard from "../../components/common/DeveloperCard";
import AnimatedCounter from "../../components/common/AnimatedCounter";

import { profile } from "../../data/profile";

import {
  slideLeft,
  slideRight,
  fadeUp,
  staggerContainer,
} from "../../animations";

import HeroBackground from "./HeroBackground";
import FloatingTechIcons from "./FloatingTechIcons";
import { FiDownload } from "react-icons/fi";
export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        isolate
        flex
        min-h-[calc(100vh-64px)]
        items-center
        overflow-hidden
        py-20
      "
    >
      <HeroBackground />
      <FloatingTechIcons />
      <Container>
        <motion.div
          className="grid items-center gap-24 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Left */}

          <motion.div variants={slideLeft}>
            <p
              className="
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[var(--color-primary)]
              "
            >
              👋 Hello, I'm
            </p>

            <h1
              className="
                mt-4
                text-5xl
                font-extrabold
                leading-tight
                tracking-tight
                text-[var(--color-text)]
                sm:text-6xl
                xl:text-7xl
                2xl:text-8xl
              "
            >
              {profile.fullName}
            </h1>

            <h2
              className="
                mt-6
                text-2xl
                font-semibold
                text-[var(--color-primary)]
              "
            >
              {profile.title}
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-[var(--color-muted)]
              "
            >
              {profile.headline}
            </p>

            {/* Statistics */}

            <motion.div
              variants={staggerContainer}
              className="mt-12 flex flex-wrap gap-10"
            >
              {profile.stats.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <h3
                    className="
                      text-4xl
                      font-extrabold
                      text-[var(--color-primary)]
                      lg:text-5xl
                    "
                  >
                    <AnimatedCounter end={item.value} suffix="+" />
                  </h3>

                  <p
                    className="
                      mt-2
                      text-base
                      font-medium
                      text-[var(--color-muted)]
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button
                className="
                  shadow-[var(--shadow-card)]
                  hover:shadow-[var(--shadow-hover)]
                "
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                View Projects
              </Button>

              <a
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[var(--color-text)]
                  shadow-[var(--shadow-card)]
                  transition-shadow
                  hover:shadow-[var(--shadow-hover)]
                "
                href={profile.resume}
                download
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right */}

          <motion.div variants={slideRight} className="flex justify-center">
            <DeveloperCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
