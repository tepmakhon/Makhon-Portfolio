import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { profile } from "../../data/profile";

import DeveloperCard from "../../components/common/DeveloperCard";

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
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <div>
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

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                  {profile.stats.projects}+
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                  {profile.stats.certificates}+
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                  Certificates
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                  {profile.stats.technologies}+
                </h3>

                <p className="text-sm text-[var(--color-muted)]">
                  Technologies
                </p>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
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
            </div>
          </div>

          {/* Right */}

          <div className="flex justify-center">
            <DeveloperCard />
          </div>
        </div>
      </Container>
    </section>
  );
}