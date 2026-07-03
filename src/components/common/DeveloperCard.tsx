import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { profile } from "../../data/profile";
import Badge from "../ui/Badge";
import profileImage from "../../assets/images/profile.png";

export default function DeveloperCard() {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-sm
        rounded-3xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-8
        shadow-lg
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          alt={profile.fullName}
          className="
            h-36
            w-36
            rounded-full
            border-4
            border-[var(--color-surface)]
            object-cover
            shadow-lg
          "
        />

        <h3 className="mt-6 text-2xl font-bold text-[var(--color-text)]">
          {profile.fullName}
        </h3>

        <p className="mt-2 text-center text-[var(--color-muted)]">
          {profile.title}
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-muted)]">
          <FiMapPin size={16} />
          <span>{profile.location}</span>
        </div>

        <div className="mt-6">
          <Badge>{profile.availableText}</Badge>
        </div>

        <div className="my-8 h-px w-full bg-[var(--color-border)]" />

        <div className="flex flex-wrap justify-center gap-2">
          {profile.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="my-8 h-px w-full bg-[var(--color-border)]" />

        <div className="flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
          >
            <FiGithub size={22} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
          >
            <FiLinkedin size={22} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}