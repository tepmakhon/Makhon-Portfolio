import { FiX } from "react-icons/fi";

import Button from "../ui/Button";
import { navigation } from "../../constants/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        bg-[var(--color-surface)]
        transition-all
        duration-300
        ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)]">
          Menu
        </h2>

        <button
          onClick={onClose}
          className="text-[var(--color-text)]"
        >
          <FiX size={28} />
        </button>
      </div>

      <nav className="flex flex-col p-6">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="
              border-b
              border-[var(--color-border)]
              py-4
              text-lg
              text-[var(--color-text)]
            "
          >
            {item.label}
          </a>
        ))}

        <Button
          className="mt-8"
          onClick={onClose}
        >
          Download CV
        </Button>
      </nav>
    </div>
  );
}