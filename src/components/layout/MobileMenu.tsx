import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiX, FiDownload } from "react-icons/fi";
import { navigation } from "../../constants/navigation";
import { profile } from "../../data/profile";
export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (open) {
      dialog?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        dialog?.close();
        document.body.style.overflow = previous;
      };
    }
    dialog?.close();
  }, [open]);
  return (
    <dialog
      id="mobile-menu"
      ref={ref}
      onCancel={onClose}
      aria-labelledby="menu-title"
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-[var(--color-surface)] p-6 text-[var(--color-text)] backdrop:bg-black/50"
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">
        <h2 id="menu-title" className="text-xl font-semibold">
          Navigation
        </h2>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-lg p-3"
        >
          <FiX size={24} />
        </button>
      </div>
      <nav aria-label="Mobile navigation" className="flex flex-col gap-2 py-6">
        {navigation.map((item) => (
          <Link
            key={item.href}
            to={`/${item.href}`}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-lg hover:bg-[var(--color-primary-soft)]"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/#education"
          onClick={onClose}
          className="rounded-lg px-3 py-3 text-lg"
        >
          Education
        </Link>
      </nav>
      <a className="action-link w-full" href={profile.resume} download>
        <FiDownload aria-hidden="true" />
        Download CV
      </a>
    </dialog>
  );
}
