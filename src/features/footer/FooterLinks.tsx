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
            <a
              href={item.href}
              className="
                text-[var(--color-muted)]
                transition
                hover:text-[var(--color-primary)]
              "
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}