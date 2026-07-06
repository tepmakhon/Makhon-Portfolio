import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

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
  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/90
        p-6
      "
    >
      <button
        onClick={onClose}
        className="absolute right-8 top-8 text-white"
      >
        <FiX size={34} />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-8 text-white"
      >
        <FiChevronLeft size={40} />
      </button>

      <img
        src={images[current]}
        alt=""
        className="
          max-h-[85vh]
          max-w-[90vw]
          rounded-2xl
        "
      />

      <button
        onClick={onNext}
        className="absolute right-8 text-white"
      >
        <FiChevronRight size={40} />
      </button>
    </div>
  );
}