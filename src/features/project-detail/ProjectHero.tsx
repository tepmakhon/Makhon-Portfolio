import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Container from "../../components/layout/Container";

import { fadeUp, slideLeft, slideRight } from "../../animations";

import type { Project } from "../../types/project";

type Props = {
  project: Project;
};

export default function ProjectHero({ project }: Props) {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <Container>
        {/* Back Button */}

        <motion.button
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          onClick={() => navigate("/#projects")}
          className="
            mb-10
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[var(--color-primary)]
            transition-colors
            hover:underline
          "
        >
          <FiArrowLeft />
          Back to Projects
        </motion.button>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}

          <motion.div variants={slideLeft}>
            <img
              src={project.image}
              alt={project.title}
              className="
                h-[520px]
                w-full
                rounded-3xl
                border
                border-[var(--color-border)]
                object-cover
                shadow-[var(--shadow-card)]
              "
            />
          </motion.div>

          {/* Content */}

          <motion.div variants={slideRight} initial="hidden" animate="visible">
            <Badge>{project.category}</Badge>

            <h1
              className="
                mt-6
                text-5xl
                font-extrabold
                leading-tight
                text-[var(--color-text)]
                lg:text-6xl
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-[var(--color-muted)]
              "
            >
              {project.shortDescription}
            </p>

            {/* Tech Preview */}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                className="flex items-center gap-2"
                onClick={() => window.open(project.github, "_blank")}
              >
                <FiGithub />
                GitHub
              </Button>

              {project.demo && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <FiExternalLink />
                  Live Demo
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
