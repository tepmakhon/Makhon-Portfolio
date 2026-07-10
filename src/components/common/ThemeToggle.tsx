import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

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
        hover:bg-slate-100
        dark:hover:bg-slate-800
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