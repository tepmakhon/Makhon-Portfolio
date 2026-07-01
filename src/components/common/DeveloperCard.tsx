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
        border-slate-200
        bg-white/90
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
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Tep Makhon"
          className="
            h-36
            w-36
            rounded-full
            border-4
            border-white
            object-cover
            shadow-lg
          "
        />

        {/* Name */}
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {profile.fullName}
        </h3>

        {/* Title */}
        <p className="mt-2 text-center text-slate-500">
          {profile.title}
        </p>

        {/* Location */}
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <FiMapPin size={16} />
          <span>{profile.location}</span>
        </div>

        {/* Status */}
        <div className="mt-6">
          <Badge>{profile.availableText}</Badge>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-slate-200" />

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>{profile.technologies[0]}</Badge>
          <Badge>{profile.technologies[1]}</Badge>
          <Badge>{profile.technologies[2]}</Badge>
          <Badge>{profile.technologies[3]}</Badge>
          <Badge>{profile.technologies[4]}</Badge>
          <Badge>{profile.technologies[5]}</Badge>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-slate-200" />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-[#0B3D2E]"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-[#0B3D2E]"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-slate-500 transition hover:text-[#0B3D2E]"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}