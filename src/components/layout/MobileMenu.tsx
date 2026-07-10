import { FiDownload, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { profile } from "../../data/profile";
import { navigation } from "../../constants/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    const id = href.replace("#", "");

    onClose();

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    navigate(`/${href}`);
  };

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
      {/* Header */}

      <div className="flex items-center justify-between border-b border-[var(--color-border)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)]">Menu</h2>

        <button
          onClick={onClose}
          className="text-[var(--color-text)]"
          aria-label="Close menu"
        >
          <FiX size={28} />
        </button>
      </div>

      {/* Navigation */}

      <nav className="flex flex-col gap-2 p-6">
        {navigation.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavigation(item.href)}
            className="
              rounded-lg
              border-b
              border-[var(--color-border)]
              px-3
              py-4
              text-left
              text-lg
              text-[var(--color-text)]
              transition-all
              duration-200
              hover:bg-[var(--color-primary)]/10
              hover:text-[var(--color-primary)]
            "
          >
            {item.label}
          </button>
        ))}

          <a
            href={profile.resume}
            download
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[var(--color-primary)]
              px-5
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
              active:scale-95
            "
          >
            <FiDownload size={20} />
            Download CV
          </a>
      </nav>
    </div>
  );
}
