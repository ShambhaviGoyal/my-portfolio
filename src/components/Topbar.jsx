import { useState, useEffect } from "react";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import { NAV_SECTIONS } from "../constants/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/smoothNav";

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const ids = NAV_SECTIONS.map((s) => s.id);
  const scrollActiveId = useActiveSection(ids, 120);
  const activeId = clickedId || scrollActiveId;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavClick = (e, item) => {
    e.preventDefault();
    setClickedId(item.id);
    scrollToSection(item.href, {
      onAfterScroll: () => {
        setMobileMenuOpen(false);
        setClickedId(null);
      },
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-theme-border/80 bg-theme-bg/80 backdrop-blur-md dark:border-themeDark-border/80 dark:bg-themeDark-bg/80"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-wide flex h-[4.5rem] items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            onClick={(e) => onNavClick(e, { id: "home", href: "#home" })}
          >
            <BrandMark size="sm" />
            <span className="font-display text-[15px] font-semibold tracking-tight text-theme-text dark:text-themeDark-text">
              Shambhavi Goyal
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => onNavClick(e, item)}
                className={`nav-link ${activeId === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="menu-btn lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-rounded text-xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 animate-fade-in bg-theme-bg/98 px-6 pb-10 pt-24 backdrop-blur-xl dark:bg-themeDark-bg/98 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => onNavClick(e, item)}
                className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-semibold tracking-tight transition-colors ${
                  activeId === item.id
                    ? "text-theme-accent dark:text-themeDark-accent"
                    : "text-theme-text hover:text-theme-accent dark:text-themeDark-text dark:hover:text-themeDark-accent"
                }`}
              >
                {item.label}
                <span className="font-mono text-xs text-theme-muted dark:text-themeDark-muted">
                  0{NAV_SECTIONS.indexOf(item) + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Topbar;
