import profilePic from "../images/new_profile_pic.png";

function CodeCard({ className, children }) {
  return (
    <div
      className={
        "absolute rounded-xl border border-navy/10 bg-white/95 px-4 py-3 font-mono text-xs leading-relaxed shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/95 sm:px-5 sm:py-3.5 sm:text-sm " +
        className
      }
    >
      {children}
    </div>
  );
}

function Tag({ className, children }) {
  return (
    <span
      className={
        "absolute rounded-full border border-navy/10 bg-white/90 px-3 py-1.5 font-mono text-xs font-medium text-navy/70 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-400 sm:text-sm " +
        className
      }
    >
      {children}
    </span>
  );
}

const HeroVisual = () => {
  return (
    <div className="relative mx-auto w-full min-h-[28rem] max-w-[32rem] sm:min-h-[32rem] sm:max-w-[36rem] lg:min-h-[36rem] lg:max-w-[42rem] lg:flex-[1.15]">
      {/* Dot grid */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#14213D" fillOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Soft glow behind photo */}
      <div
        className="absolute left-1/2 top-[44%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/25 via-accent/8 to-transparent blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        aria-hidden="true"
      />

      {/* Floating code cards */}
      <CodeCard className="hero-float-slow -left-4 top-4 z-20 sm:-left-8 sm:top-2 lg:-left-10">
        <span className="text-accent">async function</span>{" "}
        <span className="text-navy dark:text-zinc-200">build</span>
        <span className="text-navy/40">()</span> {"{"}
        <br />
        <span className="pl-4 text-muted">await deploy();</span>
      </CodeCard>

      <CodeCard className="hero-float-delay -right-4 top-[36%] z-20 sm:-right-8 lg:-right-10">
        <span className="text-[#0A66C2]">return</span>{" "}
        <span className="text-accent">&lt;App /&gt;</span>;
      </CodeCard>

      <CodeCard className="hero-float-slow bottom-6 left-0 z-20 sm:-left-6 sm:bottom-8 lg:-left-8">
        <span className="text-navy/40">{"}"}</span>
        <span className="ml-2 text-emerald-600 dark:text-emerald-400">// shipped ✓</span>
      </CodeCard>

      {/* Tech tags */}
      <Tag className="hero-float-delay right-0 top-12 z-20 sm:-right-4 sm:top-14">React</Tag>
      <Tag className="hero-float-slow bottom-24 right-0 z-20 sm:-right-6 sm:bottom-28">Node.js</Tag>
      <Tag className="hero-float-delay left-0 bottom-2 z-20 sm:-left-4 sm:bottom-4">TypeScript</Tag>

      {/* Decorative brackets */}
      <span
        className="pointer-events-none absolute -left-2 top-[28%] select-none font-mono text-6xl font-bold text-navy/10 sm:-left-6 sm:text-7xl lg:text-8xl dark:text-zinc-600/30"
        aria-hidden="true"
      >
        {"{"}
      </span>
      <span
        className="pointer-events-none absolute -right-2 bottom-[26%] select-none font-mono text-6xl font-bold text-accent/20 sm:-right-6 sm:text-7xl lg:text-8xl"
        aria-hidden="true"
      >
        {"}"}
      </span>

      {/* Connection arcs */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M 40 80 Q 120 150 200 170"
          stroke="#14213D"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          fill="none"
          opacity="0.14"
        />
        <path
          d="M 360 100 Q 280 190 220 210"
          stroke="#E07B39"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          fill="none"
          opacity="0.22"
        />
        <path
          d="M 60 330 Q 160 290 200 250"
          stroke="#14213D"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          fill="none"
          opacity="0.12"
        />
      </svg>

      {/* Profile photo */}
      <div className="relative z-10 mx-auto aspect-square w-[88%] pt-10 pb-12 sm:w-[85%] sm:pt-12 sm:pb-14 lg:w-[82%] lg:pt-14 lg:pb-16">
        <img
          src={profilePic}
          alt="Shambhavi Goyal"
          className="hero-photo h-full w-full object-contain object-bottom drop-shadow-xl"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default HeroVisual;
