import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

type Props = {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function ImageLightbox({
  images,
  current,
  onClose,
  onNext,
  onPrevious,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") onClose();

      if (e.key === "ArrowLeft")
        onPrevious();

      if (e.key === "ArrowRight")
        onNext();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-black/90
          p-6
          backdrop-blur-md
        "
        onClick={onClose}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            top-8
            right-8
            rounded-full
            bg-white/10
            p-3
            text-white
            transition
            hover:bg-white/20
          "
        >
          <FiX size={28} />
        </button>

        {/* Previous */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="
            absolute
            left-8
            rounded-full
            bg-white/10
            p-4
            text-white
            transition
            hover:bg-white/20
          "
        >
          <FiChevronLeft size={30} />
        </button>

        {/* Image */}

        <motion.img
          key={current}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          src={images[current]}
          alt={`Screenshot ${
            current + 1
          }`}
          onClick={(e) =>
            e.stopPropagation()
          }
          className="
            max-h-[85vh]
            max-w-[90vw]
            rounded-3xl
            shadow-2xl
          "
        />

        {/* Next */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="
            absolute
            right-8
            rounded-full
            bg-white/10
            p-4
            text-white
            transition
            hover:bg-white/20
          "
        >
          <FiChevronRight size={30} />
        </button>

        {/* Counter */}

        <div
          className="
            absolute
            bottom-8
            rounded-full
            bg-white/10
            px-5
            py-2
            text-sm
            text-white
            backdrop-blur
          "
        >
          {current + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}