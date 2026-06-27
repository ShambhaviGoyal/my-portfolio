import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profilePic from "../images/new_profile_pic.png";
import { scrollToSection } from "../utils/smoothNav";

const Hero = () => {
  const rootRef = useRef(null);

  const onSectionClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef);
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          q(".hero-line"),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }
        )
        .fromTo(
          q(".hero-visual"),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        );
    },
    { scope: rootRef }
  );

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-svh items-center overflow-hidden pb-10 pt-20 lg:pb-12 lg:pt-24"
    >
      <div className="container-wide grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: content */}
        <div className="order-2 lg:order-1">
          <p className="hero-line eyebrow mb-2">Software Engineer</p>

          <h1 className="hero-line font-display text-[clamp(2.75rem,7vw,4.75rem)] font-semibold leading-[1.04] tracking-tight text-theme-text dark:text-themeDark-text">
            Shambhavi
            <br />
            Goyal
          </h1>

          <p className="hero-line mt-4 max-w-lg text-lg leading-relaxed text-theme-muted dark:text-themeDark-muted">
            Full-stack engineer building scalable backends and real-time,
            polished web apps.
          </p>

          <div className="hero-line mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => onSectionClick(e, "#projects")}
            >
              View my work
              <span className="material-symbols-rounded text-[18px]">arrow_downward</span>
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => onSectionClick(e, "#contact")}
            >
              Get in touch
            </a>
          </div>

          <dl className="hero-line mt-6 grid max-w-md grid-cols-3 gap-4 border-t border-theme-border pt-5 dark:border-themeDark-border">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-theme-muted dark:text-themeDark-muted">
                Based in
              </dt>
              <dd className="mt-1 text-sm font-medium text-theme-text dark:text-themeDark-text">
                Buffalo, NY
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-theme-muted dark:text-themeDark-muted">
                Studying
              </dt>
              <dd className="mt-1 text-sm font-medium text-theme-text dark:text-themeDark-text">
                CS · UB
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-theme-muted dark:text-themeDark-muted">
                Grad
              </dt>
              <dd className="mt-1 text-sm font-medium text-theme-text dark:text-themeDark-text">
                Dec 2026
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: portrait */}
        <div className="hero-visual order-1 mx-auto w-full max-w-[260px] lg:order-2 lg:max-w-[320px]">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-theme-border bg-gradient-to-b from-theme-accent/[0.07] via-theme-surface to-theme-surface dark:border-themeDark-border dark:from-themeDark-accent/[0.1] dark:via-themeDark-surface dark:to-themeDark-surface">
              <img
                src={profilePic}
                alt="Shambhavi Goyal"
                className="absolute inset-0 h-full w-full object-cover object-[center_top]"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
