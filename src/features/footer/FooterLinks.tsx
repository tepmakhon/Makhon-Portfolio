import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        Quick Links
      </h3>

      <ul className="mt-6 space-y-3">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              to={`/${item.href}`}
              className="
                text-[var(--color-muted)]
                transition
                hover:text-[var(--color-primary)]
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
