import { useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
type Props = {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  alt?: string;
};
export default function ImageLightbox({
  images,
  current,
  onClose,
  onNext,
  onPrevious,
  alt = "Project screenshot",
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previous;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      aria-label="Image viewer"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") onPrevious();
        if (e.key === "ArrowRight") onNext();
      }}
      className="fixed inset-0 m-auto max-h-[95dvh] max-w-[96vw] overflow-auto rounded-xl border border-white/20 bg-[#111a16] p-4 text-white backdrop:bg-black/90"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm" aria-live="polite">
          {current + 1} / {images.length}
        </p>
        <button
          aria-label="Close image viewer"
          onClick={onClose}
          className="rounded-lg p-3"
        >
          <FiX size={24} />
        </button>
      </div>
      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="max-h-[72dvh] w-auto max-w-full object-contain"
      />
      {images.length > 1 && (
        <div className="mt-3 flex justify-between">
          <button
            aria-label="Previous image"
            onClick={onPrevious}
            className="rounded-lg p-3"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            aria-label="Next image"
            onClick={onNext}
            className="rounded-lg p-3"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      )}
    </dialog>
  );
}
