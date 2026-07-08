import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations";

type Props = {
  children: ReactNode;
};

export default function AnimatedSection({ children }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
