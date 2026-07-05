import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import { motion } from "framer-motion";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

import MotionCard from "../../components/common/MotionCard";

import {
  slideLeft,
  slideRight,
  staggerContainer,
  fadeUp,
} from "../../animations";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <MotionCard>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          shadow-lg
        "
      >
        <div className="grid lg:grid-cols-2">

          {/* Image */}

          <motion.div
            variants={slideLeft}
            className="overflow-hidden"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                h-full
                min-h-[350px]
                w-full
                object-cover
              "
            />
          </motion.div>

          {/* Content */}

          <motion.div
            variants={slideRight}
            className="flex flex-col justify-center p-10"
          >
            <motion.p
              variants={fadeUp}
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-[var(--color-primary)]
              "
            >
              {project.category}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold"
            >
              {project.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-6
                leading-8
                text-[var(--color-muted)]
              "
            >
              {project.overview}
            </motion.p>

            {/* Technologies */}

            <motion.div
              variants={staggerContainer}
              className="mt-8 flex flex-wrap gap-2"
            >
              {project.technologies.map((tech) => (
                <motion.div
                  key={tech}
                  variants={fadeUp}
                >
                  <Badge>{tech}</Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                className="flex items-center gap-2"
                onClick={() => window.open(project.github)}
              >
                <FiGithub />
                GitHub
              </Button>

              {project.demo && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(project.demo)
                  }
                >
                  <FiExternalLink />
                  Live Demo
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </MotionCard>
  );
}