import { NavLink } from "react-router-dom";

const links = [
  "Home",
  "About",
  "Projects",
  "Certificates",
  "Contact",
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold">
        Quick Links
      </h3>

      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <NavLink
              to="/"
              className="text-slate-500 transition hover:text-primary"
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}