import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
export type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<{
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
} | null>(null);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark" || saved === "system")
        setTheme(saved);
    } catch {
      /* Storage may be disabled. */
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const current =
        theme === "system" ? (query.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = current;
      setResolvedTheme(current);
    };
    apply();
    query.addEventListener("change", apply);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* The current session can still switch themes. */
    }
    return () => query.removeEventListener("change", apply);
  }, [theme, ready]);
  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
// This hook intentionally shares the provider module.
// eslint-disable-next-line react/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
