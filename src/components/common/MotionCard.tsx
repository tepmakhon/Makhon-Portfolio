import { motion } from "framer-motion";
import type { ReactNode } from "react";
export default function MotionCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div initial={false} className={className}>
      {children}
    </motion.div>
  );
}
