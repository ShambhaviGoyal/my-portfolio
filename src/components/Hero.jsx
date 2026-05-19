import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profilePic from "../images/profile_pic_2.JPG";
import resume from "../images/resume.pdf";

const Hero = () => {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(q(".hero-line"), {
          opacity: 0,
          y: 48,
          duration: 0.9,
          stagger: 0.07,
        })
        .from(
          q(".hero-visual"),
          { opacity: 0, x: 40, duration: 1, ease: "power3.out" },
          "-=0.65"
        );
    },
    { scope: rootRef }
  );

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-[100dvh] overflow-x-hidden lg:min-h-screen"
    >
      <div className="container-wide flex min-h-[100dvh] flex-col lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:gap-x-12 xl:gap-x-16">
        <div className="relative z-10 flex w-full max-w-2xl flex-col justify-center pt-24 pb-10 sm:pt-28 sm:pb-12 lg:flex-1 lg:max-w-none lg:pb-24 lg:pt-16 xl:py-24">
          <p className="hero-line section-eyebrow">
            University at Buffalo · Computer Science
          </p>

          <h1 className="hero-line mt-6 font-display text-[clamp(2.125rem,6vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-zinc-900 dark:text-zinc-50">
            <span className="block">Ship</span>
            <span className="block py-2">
              <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-violet-600 bg-clip-text pb-2 pt-0.5 font-extrabold text-transparent [line-height:1.28] [-webkit-background-clip:text] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                thoughtful
              </span>
            </span>
            <span className="block text-zinc-500 dark:text-zinc-400">software.</span>
          </h1>

          <p className="hero-line type-hero-bio mt-8">
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Shambhavi</strong>.
            I love building real-time systems, reliable backends, and interfaces
            that stay fast under load.
          </p>

          <div className="hero-line mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary">
              Browse projects
              <span className="material-symbols-rounded !pr-0 text-[19px]">
                south
              </span>
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Resume
            </a>
          </div>

          <dl className="hero-line mt-14 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/90 bg-white px-4 py-3.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
              <dt className="type-hero-stat-label">Graduating</dt>
              <dd className="type-hero-stat-value">
                Dec 2026
              </dd>
            </div>
            <div className="rounded-2xl border border-zinc-200/90 bg-white px-4 py-3.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
              <dt className="type-hero-stat-label">Now</dt>
              <dd className="type-hero-stat-value-text">
                SWE Intern · Meta Layer Initiative
              </dd>
            </div>
          </dl>
        </div>

        <figure className="hero-visual mx-auto mb-14 flex w-full max-w-[min(100%,320px)] shrink-0 flex-col justify-center sm:max-w-[360px] lg:mx-0 lg:mb-0 lg:max-w-[min(100%,340px)] xl:max-w-[380px]">
          <div className="aspect-square w-full overflow-hidden rounded-[26px] border border-zinc-200/90 bg-zinc-200/40 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04] dark:border-zinc-700 dark:bg-zinc-800/50 dark:shadow-[0_20px_50px_-18px_rgba(0,0,0,0.45)] dark:ring-white/[0.06]">
            <img
              src={profilePic}
              alt="Shambhavi Goyal"
              className="h-full w-full object-cover object-[center_42%]"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figcaption className="type-figure-caption mt-4">
            <span className="text-zinc-600 dark:text-zinc-400">Full-stack</span>
            <span className="mx-2 text-zinc-300 dark:text-zinc-600" aria-hidden>
              ·
            </span>
            <span className="text-sky-600 dark:text-sky-400">Real-time · Web · Systems</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
