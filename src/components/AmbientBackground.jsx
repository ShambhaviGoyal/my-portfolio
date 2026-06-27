/**
 * Subtle fixed backdrop — faint dot grid + a single soft accent glow at the top.
 * Intentionally understated; no orbs, blur stacks, or grain.
 */
const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
    <div
      className="absolute inset-0 text-stone-900/[0.05] dark:text-stone-100/[0.06]"
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage:
          "radial-gradient(ellipse 80% 55% at 50% 0%, black 5%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 55% at 50% 0%, black 5%, transparent 70%)",
      }}
    />
    <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-theme-accent/[0.06] blur-[120px] dark:bg-themeDark-accent/[0.07]" />
  </div>
);

export default AmbientBackground;
