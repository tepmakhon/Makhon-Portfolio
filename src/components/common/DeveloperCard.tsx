import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { motion } from "framer-motion";

import { profile } from "../../data/profile";
import Badge from "../ui/Badge";
import profileImage from "../../assets/images/profile.png";

import {
  fadeUp,
  staggerContainer,
} from "../../animations";

export default function DeveloperCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -10,
        rotate: -1,
      }}
      whileTap={{
        scale: 0.98,
      }}
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
      "
    >
      <motion.div
        className="flex flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}

        <motion.img
          src={profileImage}
          alt={profile.fullName}
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.3,
          }}
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

        {/* Name */}

        <motion.h3
          variants={fadeUp}
          className="
            mt-6
            text-2xl
            font-bold
            text-[var(--color-text)]
          "
        >
          {profile.fullName}
        </motion.h3>

        {/* Title */}

        <motion.p
          variants={fadeUp}
          className="
            mt-2
            text-center
            text-[var(--color-muted)]
          "
        >
          {profile.title}
        </motion.p>

        {/* Location */}

        <motion.div
          variants={fadeUp}
          className="
            mt-3
            flex
            items-center
            gap-2
            text-sm
            text-[var(--color-muted)]
          "
        >
          <FiMapPin size={16} />
          <span>{profile.location}</span>
        </motion.div>

        {/* Status */}

        <motion.div
          variants={fadeUp}
          className="mt-6"
        >
          <Badge>{profile.availableText}</Badge>
        </motion.div>

        {/* Divider */}

        <motion.div
          variants={fadeUp}
          className="
            my-8
            h-px
            w-full
            bg-[var(--color-border)]
          "
        />

        {/* Technologies */}

        <motion.div
          variants={staggerContainer}
          className="
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >
          {profile.technologies
            .slice(0, 6)
            .map((tech) => (
              <motion.div
                key={tech}
                variants={fadeUp}
              >
                <Badge>{tech}</Badge>
              </motion.div>
            ))}
        </motion.div>

        {/* Divider */}

        <motion.div
          variants={fadeUp}
          className="
            my-8
            h-px
            w-full
            bg-[var(--color-border)]
          "
        />

        {/* Social */}

        <div className="flex items-center justify-center gap-6">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-[var(--color-muted)]
              transition
              hover:text-[var(--color-primary)]
            "
          >
            <FiGithub size={22} />
          </motion.a>

          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-[var(--color-muted)]
              transition
              hover:text-[var(--color-primary)]
            "
          >
            <FiLinkedin size={22} />
          </motion.a>

          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-[var(--color-muted)]
              transition
              hover:text-[var(--color-primary)]
            "
          >
            <FiMail size={22} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}