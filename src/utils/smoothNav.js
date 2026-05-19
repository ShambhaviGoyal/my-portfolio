import { getRootLenis } from "./rootLenis";

function scrollPaddingTopPx() {
  const raw = getComputedStyle(document.documentElement).scrollPaddingTop;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 0;
}

export function scrollToSection(href, { onAfterScroll } = {}) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getRootLenis();
  const offset = -scrollPaddingTopPx();

  if (lenis) {
    lenis.scrollTo(el, { offset, programmatic: true });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (onAfterScroll) {
    window.setTimeout(onAfterScroll, 550);
  }
}
