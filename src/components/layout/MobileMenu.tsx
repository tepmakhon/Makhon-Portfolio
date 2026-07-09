import { FiX } from "react-icons/fi";
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

      <nav className="flex flex-col p-6">
        {navigation.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavigation(item.href)}
            className="
              border-b
              border-[var(--color-border)]
              py-4
              text-left
              text-lg
              text-[var(--color-text)]
              transition-colors
              hover:text-[var(--color-primary)]
            "
          >
            {item.label}
          </button>
        ))}

          <a
            className="
              flex
              items-center
              gap-2
              ounded-lg
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              px-6
              py-3
              text-sm
              font-medium
              ext-[var(--color-text)]
              shadow-[var(--shadow-card)]
              transition-shadow
              hover:shadow-[var(--shadow-hover)]
            "
            href={profile.resume}
            download
          >
            Download CV
          </a>
      </nav>
    </div>
  );
}
