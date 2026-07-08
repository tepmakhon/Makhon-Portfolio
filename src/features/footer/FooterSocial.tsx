import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { profile } from "../../data/profile";

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        Connect
      </h3>

      <div className="mt-6 flex gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            rounded-full
            border
            border-[var(--color-border)]
            p-3
            text-[var(--color-muted)]
            transition-all
            duration-300
            hover:bg-[var(--color-primary)]
            hover:text-white
          "
        >
          <FiGithub size={20} />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            rounded-full
            border
            border-[var(--color-border)]
            p-3
            text-[var(--color-muted)]
            transition-all
            duration-300
            hover:bg-[var(--color-primary)]
            hover:text-white
          "
        >
          <FiLinkedin size={20} />
        </a>

        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="
            rounded-full
            border
            border-[var(--color-border)]
            p-3
            text-[var(--color-muted)]
            transition-all
            duration-300
            hover:bg-[var(--color-primary)]
            hover:text-white
          "
        >
          <FiMail size={20} />
        </a>
      </div>
    </div>
  );
}
