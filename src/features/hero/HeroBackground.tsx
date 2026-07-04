import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      {/* Background Gradient */}

      <div
        className="
          absolute
          inset-0
          -z-30
          bg-[radial-gradient(circle_at_top_right,rgba(20,108,67,.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(11,61,46,.14),transparent_45%),linear-gradient(to_bottom,var(--color-background),var(--color-background))]
        "
      />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.04]
          [background-image:linear-gradient(var(--color-text)_1px,transparent_1px),linear-gradient(90deg,var(--color-text)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Floating Glow - Right */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-20, 20, -20],
                x: [0, -20, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -right-40
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--color-secondary)]
          opacity-20
          blur-[140px]
        "
      />

      {/* Floating Glow - Left */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [20, -20, 20],
                x: [0, 20, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -left-40
          -z-10
          h-[380px]
          w-[380px]
          rounded-full
          bg-[var(--color-primary)]
          opacity-20
          blur-[140px]
        "
      />

      {/* Small Floating Orb */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-15, 15, -15],
                x: [10, -10, 10],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          right-1/4
          -z-10
          h-28
          w-28
          rounded-full
          bg-[var(--color-gold)]
          opacity-10
          blur-3xl
        "
      />

      {/* Noise Overlay */}

      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.02]
          mix-blend-overlay
          [background-image:radial-gradient(circle,white_1px,transparent_1px)]
          [background-size:18px_18px]
        "
      />
    </>
  );
}