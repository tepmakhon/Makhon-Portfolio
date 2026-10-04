import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import Container from "../../components/layout/Container";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { certificates } from "../../data/certificates";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="hero-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Full-Stack Developer · React & Node.js</p>
            <h1 id="hero-title" className="hero-heading">
              <span className="mb-3 block text-xl font-semibold tracking-normal">
                Tep Makhon.
              </span>
              Building useful
              <br className="hidden sm:block" /> software, one
              <br className="hidden sm:block" /> <span>problem at a time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              {profile.headline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="action-link" href="#projects">
                Explore My Projects <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="action-link action-outline"
                href={profile.resume}
                download="Tep-Makhon-CV.pdf"
              >
                <FiDownload aria-hidden="true" /> Download CV
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-6 text-sm text-[var(--color-muted)]">
              <a
                className="inline-flex items-center gap-2"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub aria-hidden="true" /> GitHub · {profile.username}
              </a>
              <a
                className="inline-flex items-center gap-2"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-2">
                <FiMapPin aria-hidden="true" /> Phnom Penh, Cambodia
              </span>
            </div>
          </div>
          <div className="portrait-panel">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4 text-xs text-[var(--color-muted)]">
              <span>THE PERSON BEHIND THE CODE</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="portrait-image-wrap">
              <img
                src={profile.photo}
                alt="Tep Makhon"
                width="213"
                height="320"
                fetchPriority="high"
                className="portrait-image"
              />
            </div>
            <div className="border-t border-[var(--color-border)] p-6">
              <p className="text-xl font-semibold">Learning by building.</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Fourth-year Computer Science · RUPP
              </p>
              {profile.available && (
                <p className="mt-4 flex items-center gap-2 text-sm text-[var(--color-primary)]">
                  <span
                    className="h-2 w-2 rounded-full bg-[var(--color-primary)]"
                    aria-hidden="true"
                  />
                  {profile.availableText}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="hero-facts">
          <div>
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            <span>Software projects</span>
          </div>
          <div>
            <strong>{certificates.length}</strong>
            <span>Learning certificates</span>
          </div>
          <div>
            <strong>React + Node.js</strong>
            <span>From interface to API</span>
          </div>
          <a href="#about">
            Get to know me <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
