import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        "grid h-9 w-9 place-items-center rounded-md text-muted transition-colors hover:text-navy dark:text-zinc-400 dark:hover:text-zinc-100 " +
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
