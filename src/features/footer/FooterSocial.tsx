import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { profile } from "../../data/profile";

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-lg font-semibold">
        Connect
      </h3>

      <div className="mt-6 flex gap-4">

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-3 transition hover:bg-primary hover:text-white"
        >
          <FiGithub size={20} />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-3 transition hover:bg-primary hover:text-white"
        >
          <FiLinkedin size={20} />
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border p-3 transition hover:bg-primary hover:text-white"
        >
          <FiMail size={20} />
        </a>

      </div>
    </div>
  );
}