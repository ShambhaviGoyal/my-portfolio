import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function readStoredTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return "light";
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem(STORAGE_KEY, theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", isDark ? "#0c0a09" : "#faf9f7");
    }
  }, [theme]);

  const setTheme = useCallback((next) => {
    setThemeState(next === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- hook paired with ThemeProvider
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (ctx == null) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
