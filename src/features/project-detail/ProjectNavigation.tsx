import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";

import type { Project } from "../../types/project";

type Props = {
  previous?: Project;
  next?: Project;
};

export default function ProjectNavigation({ previous, next }: Props) {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Previous */}

          {previous ? (
            <Link to={`/projects/${previous.slug}`}>
              <Card
                className="
                  h-full
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[var(--shadow-hover)]
                "
              >
                <div className="flex items-center gap-4">
                  <FiArrowLeft
                    className="text-[var(--color-primary)]"
                    size={24}
                  />

                  <div>
                    <p className="text-sm text-[var(--color-muted)]">
                      Previous Project
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      {previous.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}

          {next ? (
            <Link to={`/projects/${next.slug}`}>
              <Card
                className="
                  h-full
                  text-right
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[var(--shadow-hover)]
                "
              >
                <div className="flex items-center justify-end gap-4">
                  <div>
                    <p className="text-sm text-[var(--color-muted)]">
                      Next Project
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">{next.title}</h3>
                  </div>

                  <FiArrowRight
                    className="text-[var(--color-primary)]"
                    size={24}
                  />
                </div>
              </Card>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </section>
  );
}
