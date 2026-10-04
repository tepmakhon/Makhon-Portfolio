import { useState } from "react";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../common/ThemeToggle";
import { navigation } from "../../constants/navigation";
import useActiveSection from "../../hooks/useActiveSection";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-20 items-center justify-between gap-4"
        >
          <Link to="/#hero" className="flex items-center gap-3 font-semibold">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-sm text-[var(--color-background)]"
              aria-hidden="true"
            >
              tm.
            </span>
            <span>Tep Makhon</span>
          </Link>
          <ul className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={`/${item.href}`}
                  aria-current={
                    pathname === "/" && active === item.href.slice(1)
                      ? "location"
                      : undefined
                  }
                  className={`block py-3 text-sm ${pathname === "/" && active === item.href.slice(1) ? "font-semibold text-[var(--color-primary)]" : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="mailto:tepmakhon199@gmail.com"
              className="action-link hidden xl:inline-flex"
            >
              Let’s talk <FiArrowUpRight aria-hidden="true" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="rounded-lg p-3 lg:hidden"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </nav>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
