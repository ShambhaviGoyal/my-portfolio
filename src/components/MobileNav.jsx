import { useState } from "react";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import { NAV_SECTIONS } from "../constants/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/smoothNav";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const ids = NAV_SECTIONS.map((s) => s.id);
  const activeId = useActiveSection(ids, 100);

  const go = (e, href) => {
    e.preventDefault();
    scrollToSection(href, {
      onAfterScroll: () => setOpen(false),
    });
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center justify-between border-b border-zinc-200/90 bg-white/95 px-4 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95 lg:hidden">
        <a
          href="#home"
          className="flex min-w-0 flex-1 items-center gap-2.5"
          onClick={(e) => go(e, "#home")}
        >
          <BrandMark size="sm" />
          <span className="type-brand-footer-name truncate">Shambhavi Goyal</span>
        </a>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="material-symbols-rounded text-[22px]">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-zinc-50 px-6 pb-10 pt-20 dark:bg-zinc-950 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile">
            {NAV_SECTIONS.map((item, i) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={
                    "flex items-baseline gap-5 border-b border-zinc-200 py-5 dark:border-zinc-800 " +
                    (isActive ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 dark:text-zinc-400")
                  }
                >
                  <span className="type-nav-index text-sky-600 dark:text-sky-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
