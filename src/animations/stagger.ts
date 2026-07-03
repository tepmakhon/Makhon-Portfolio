import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};