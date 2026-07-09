import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

import { motion } from "framer-motion";

import { profile } from "../../data/profile";
import Badge from "../ui/Badge";
import profileImage from "../../assets/images/profile.webp";

import { fadeUp, staggerContainer } from "../../animations";

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
        shadow-[var(--shadow-card)]
        hover:shadow-[var(--shadow-hover)]
        backdrop-blur-xl
        transition-shadow
        duration-300    
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
          loading="eager"
          fetchPriority="high"
          decoding="async"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            h-40
            w-40
            lg:h-44
            lg:w-44
            rounded-full
            border-4
            border-[var(--color-surface)]
            object-cover
            shadow-[var(--shadow-card)]
            ring-1
            ring-[var(--color-primary)]/10
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

        <motion.div variants={fadeUp} className="mt-6">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          <Badge>
              {profile.availableText}
          </Badge>
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
          {profile.technologies.slice(0, 6).map((tech) => (
            <motion.div key={tech} variants={fadeUp}>
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

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href={profile.github}
            aria-label="GitHub Profile"
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
            aria-label="LinkedIn Profile"
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
            aria-label="Send Email"
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
