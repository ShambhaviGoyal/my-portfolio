import { useEffect, useState } from "react";

/**
 * Which section is “current” while scrolling (same idea as the old navbar spy).
 */
export function useActiveSection(sectionIds, thresholdPx = 140) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const { top } = el.getBoundingClientRect();
        if (top <= thresholdPx) current = id;
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, thresholdPx]);

  return activeId;
}
