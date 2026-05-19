/**
 * Fixed decorative layer — soft color + subtle grid (light / dark).
 */
const AmbientBackground = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden
  >
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(56,189,248,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(56,189,248,0.18),transparent_50%)]" />
    <div className="ambient-orb ambient-orb-a absolute -left-[18%] top-[8%] h-[min(480px,50vh)] w-[min(480px,50vw)] rounded-full bg-sky-400/[0.14] blur-[100px] dark:bg-sky-500/[0.12]" />
    <div className="ambient-orb ambient-orb-b absolute -right-[12%] top-[32%] h-[min(420px,48vh)] w-[min(420px,48vw)] rounded-full bg-violet-400/[0.1] blur-[110px] dark:bg-violet-500/[0.14]" />
    <div className="ambient-orb ambient-orb-c absolute bottom-[-8%] left-[22%] h-[min(380px,42vh)] w-[min(520px,58vw)] rounded-full bg-emerald-400/[0.08] blur-[100px] dark:bg-emerald-500/[0.1]" />
    <div
      className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
        maskImage:
          "radial-gradient(ellipse 85% 65% at 50% 25%, black 15%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-0 hidden opacity-[0.12] dark:block"
      style={{
        backgroundImage: `
          linear-gradient(rgba(244,244,245,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(244,244,245,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
        maskImage:
          "radial-gradient(ellipse 85% 65% at 50% 25%, black 15%, transparent 100%)",
      }}
    />
    <div className="pointer-events-none absolute left-1/2 top-[15%] h-[min(85vh,820px)] w-[min(85vh,820px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-400/[0.06] via-transparent to-transparent opacity-90 blur-3xl motion-reduce:animate-none ambient-pulse dark:from-sky-400/[0.08]" />
    <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply grain dark:opacity-[0.08] dark:mix-blend-soft-light" />
  </div>
);

export default AmbientBackground;
