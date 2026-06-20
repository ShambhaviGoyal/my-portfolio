import { useState } from "react";
import { NAV_SECTIONS } from "../constants/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/smoothNav";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = NAV_SECTIONS.map((s) => s.id);
  const activeId = useActiveSection(ids, 120);

  const go = (e, href) => {
    e.preventDefault();
    scrollToSection(href, { onAfterScroll: () => setMenuOpen(false) });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 backdrop-blur-lg dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="text-lg font-bold tracking-tight text-navy dark:text-zinc-50"
        >
          Shambhavi Goyal
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_SECTIONS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className={
                "rounded-md px-3 py-1.5 text-[15px] transition-colors " +
                (activeId === item.id
                  ? "font-semibold text-navy dark:text-zinc-50"
                  : "text-muted hover:text-navy dark:text-zinc-400 dark:hover:text-zinc-200")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md text-muted transition-colors hover:text-navy md:hidden dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-rounded text-[22px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-navy/10 bg-surface px-6 pb-4 pt-2 sm:px-10 lg:px-16 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
          aria-label="Mobile"
        >
          {NAV_SECTIONS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className={
                "block py-2.5 text-[15px] transition-colors " +
                (activeId === item.id
                  ? "font-semibold text-navy dark:text-zinc-50"
                  : "text-muted hover:text-navy dark:text-zinc-400 dark:hover:text-zinc-200")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
