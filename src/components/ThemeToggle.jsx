import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-theme-border bg-theme-surface text-theme-text transition-colors hover:border-theme-text/30 dark:border-themeDark-border dark:bg-themeDark-surface dark:text-themeDark-text dark:hover:border-themeDark-text/30 " +
        className
      }
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="material-symbols-rounded text-[20px]" aria-hidden>
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
