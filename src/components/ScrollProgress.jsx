import { useRef } from "react";
import { useLenis } from "lenis/react";

const ScrollProgress = () => {
  const barRef = useRef(null);

  useLenis((lenis) => {
    const el = barRef.current;
    if (!el) return;
    el.style.transform = `scaleX(${lenis.progress})`;
  });

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-theme-accent motion-reduce:hidden dark:bg-themeDark-accent"
      />
    </div>
  );
};

export default ScrollProgress;
