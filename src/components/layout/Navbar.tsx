import { NavLink } from "react-router-dom";

import { navigation } from "../../constants/navigation";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <NavLink
            to="/"
            className="text-lg font-bold"
          >
            Makhon
          </NavLink>

          <ul className="hidden items-center gap-8 md:flex">

            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-[#0B3D2E]"
                      : "text-slate-500 transition hover:text-[#0B3D2E]"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

          </ul>

        </nav>
      </Container>
    </header>
  );
}