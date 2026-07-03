import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { profile } from "../../data/profile";
import DeveloperCard from "../../components/common/DeveloperCard";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-64px)] flex items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-primary font-semibold">
              Hello, I'm
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#146C43]">
                Full Stack Developer
            </p>
            <h1
            className="
                mt-2
                text-5xl
                font-extrabold
                leading-tight
                tracking-tight
                md:text-6xl
                xl:text-7xl
            "
            >
              {profile.fullName}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-600">
              {profile.title}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-500">
              {profile.bio}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                View Projects
              </Button>

              <Button variant="outline">
                Download CV
              </Button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="flex justify-center">
                <DeveloperCard />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}