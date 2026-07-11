import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import Container from "./Container";
import MobileMenu from "./MobileMenu";

import { navigation } from "../../constants/navigation";

import useScroll from "../../hooks/useScroll";
import useActiveSection from "../../hooks/useActiveSection";
import ThemeToggle from "../common/ThemeToggle";
import { profile } from "../../data/profile";
import { FiDownload } from "react-icons/fi";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrolled = useScroll();
  const active = useActiveSection();

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    const id = href.replace("#", "");

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    navigate(`/${href}`);
  };

  return (
    <>
      <header
        className={`
          sticky
          top-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 shadow-lg"
              : "bg-[var(--color-surface)]/80"
          }
        `}
      >
        <Container>
          <nav
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-300
              ${scrolled ? "h-14" : "h-16"}
            `}
          >
            {/* Logo */}

            <button
              onClick={() => handleNavigation("#hero")}
              className={`
                flex
                items-center
                gap-1
                font-bold
                transition-all
                duration-300
                ${scrolled ? "text-lg" : "text-xl"}
              `}
            >
              <span className="text-[var(--color-primary)]">Tep</span>

              <span className="text-[var(--color-text)]">Makhon</span>
            </button>

            {/* Desktop Navigation */}

            <ul className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");

                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`
                        relative
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        ${
                          active === sectionId
                            ? "text-[var(--color-primary)]"
                            : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                        }
                      `}
                    >
                      {item.label}

                      {active === sectionId && (
                        <span
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-0.5
                            w-full
                            rounded-full
                            bg-[var(--color-primary)]
                          "
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right Side */}

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href={profile.resume}
                download
                className="
                  hidden lg:flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[var(--color-text)]
                  shadow-[var(--shadow-card)]
                  transition-all
                  duration-300
                  hover:border-[var(--color-primary)]
                  hover:shadow-[var(--shadow-hover)]
                "
              >
                <FiDownload size={18} />
                Download CV
              </a>

              <button
                onClick={() => setOpen(true)}
                className="lg:hidden"
                aria-label="Open menu"
              >
                <FiMenu size={28} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
