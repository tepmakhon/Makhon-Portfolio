import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className="
        rounded-xl
        border
        p-3
        transition
        hover:bg-[var(--color-primary-soft)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]
        focus-visible:ring-offset-2
      "
    >
      {isDark ? (
        <FiSun aria-hidden="true" size={20} />
      ) : (
        <FiMoon aria-hidden="true" size={20} />
      )}
    </button>
  );
}
