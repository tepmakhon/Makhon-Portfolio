import { motion } from "framer-motion";

import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiExpress,
} from "react-icons/si";

const icons = [
  {
    Icon: SiReact,
    top: "8%",
    left: "10%",
    delay: 0,
  },
  {
    Icon: SiTypescript,
    top: "18%",
    right: "15%",
    delay: 1,
  },
  {
    Icon: SiNodedotjs,
    bottom: "20%",
    left: "8%",
    delay: 2,
  },
  {
    Icon: SiPostgresql,
    bottom: "10%",
    right: "10%",
    delay: 3,
  },
  {
    Icon: SiTailwindcss,
    top: "55%",
    left: "3%",
    delay: 4,
  },
  {
    Icon: SiGit,
    top: "70%",
    right: "5%",
    delay: 5,
  },
  {
    Icon: SiExpress,
    top: "40%",
    right: "35%",
    delay: 6,
  },
];

export default function FloatingTechIcons() {
  return (
    <>
      {icons.map(({ Icon, delay, ...position }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-12, 12, -12],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
          className="
              absolute
              hidden
              lg:flex
              items-center
              justify-center
              text-[var(--color-primary)]
              opacity-20
              pointer-events-none
            "
          style={position}
        >
          <Icon size={42} />
        </motion.div>
      ))}
    </>
  );
}
