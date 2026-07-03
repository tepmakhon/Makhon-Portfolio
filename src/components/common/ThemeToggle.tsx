import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
        rounded-xl
        border
        p-3
        transition
        hover:bg-slate-100
      "
    >
      {theme === "dark" ? (
        <FiSun />
      ) : (
        <FiMoon />
      )}
    </button>
  );
}