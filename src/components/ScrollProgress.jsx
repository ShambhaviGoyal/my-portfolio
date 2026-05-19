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
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-sky-400 via-violet-400 to-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.45)] motion-reduce:hidden"
      />
    </div>
  );
};

export default ScrollProgress;
