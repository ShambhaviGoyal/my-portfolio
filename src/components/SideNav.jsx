import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import { NAV_SECTIONS } from "../constants/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/smoothNav";

const SideNav = ({ open, onOpenChange }) => {
  const ids = NAV_SECTIONS.map((s) => s.id);
  const activeId = useActiveSection(ids, 120);

  const onNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <aside
        className={
          "fixed left-0 top-0 z-40 hidden h-screen w-[240px] flex-col border-r border-zinc-200/90 bg-white/95 px-6 py-8 shadow-sm backdrop-blur-2xl transition-transform duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950/95 lg:flex " +
          (open ? "translate-x-0" : "-translate-x-full pointer-events-none")
        }
        aria-hidden={!open}
        inert={!open}
      >
        <div className="pointer-events-none absolute right-0 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-sky-400/35 to-transparent" />

        <button
          type="button"
          className="absolute right-4 top-8 grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-white hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          aria-label="Close sidebar"
          onClick={() => onOpenChange(false)}
        >
          <span className="material-symbols-rounded text-[22px]">chevron_left</span>
        </button>

        <a
          href="#home"
          onClick={(e) => onNavClick(e, "#home")}
          className="group flex items-center gap-3 pr-12"
        >
          <BrandMark size="lg" />
          <div className="min-w-0">
            <p className="type-brand-sidebar">Shambhavi Goyal</p>
            <p className="type-brand-role">CS @ UB</p>
          </div>
        </a>

        <nav className="mt-14 flex flex-1 flex-col gap-1" aria-label="Primary">
          {NAV_SECTIONS.map((item, i) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className={
                  "group flex items-baseline gap-4 rounded-xl py-2.5 pl-2 pr-3 transition-colors " +
                  (isActive
                    ? "bg-sky-50 text-zinc-900 ring-1 ring-sky-200/80 dark:bg-sky-950/50 dark:text-zinc-50 dark:ring-sky-800/80"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-100")
                }
              >
                <span
                  className={
                    "w-6 type-nav-index " +
                    (isActive
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400")
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-nav-link">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4 border-t border-zinc-200/90 pt-8 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
          <a
            href="mailto:sgoyal3@buffalo.edu"
            className="type-reading-muted block truncate font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400"
          >
            sgoyal3@buffalo.edu
          </a>
        </div>
      </aside>

      {!open ? (
        <button
          type="button"
          className="fixed left-0 top-1/2 z-[45] hidden h-20 w-10 -translate-y-1/2 items-center justify-center rounded-r-xl border border-l-0 border-zinc-200/90 bg-white/95 text-zinc-600 shadow-md backdrop-blur-xl transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950/95 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 lg:flex"
          aria-label="Open sidebar"
          onClick={() => onOpenChange(true)}
        >
          <span className="material-symbols-rounded text-[26px]">chevron_right</span>
        </button>
      ) : null}
    </>
  );
};

export default SideNav;
