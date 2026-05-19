import { useEffect, useLayoutEffect, useRef, useState } from "react";

import c from "../images/C.svg";
import cpp from "../images/cpp.svg";
import java from "../images/java.svg";
import python from "../images/python.svg";
import javascript from "../images/javascript.svg";
import typescript from "../images/typescript.svg";
import golang from "../images/golang.svg";
import html from "../images/html.svg";
import kotlin from "../images/Kotlin.svg";

import react from "../images/react.svg";
import nodejs from "../images/nodejs.svg";
import expressjs from "../images/expressjs.svg";
import bootstrap from "../images/bootstrap.svg";
import flask from "../images/Flask.svg";
import django from "../images/Django.svg";
import tensorflow from "../images/tensorflow.svg";
import pytorch from "../images/pytorch.svg";
import socketIo from "../images/socket-io.svg";

import mongodb from "../images/mongodb.svg";
import mysql from "../images/mysql.svg";
import postgres from "../images/postgresql.svg";

import gitLogo from "../images/gitLogo.svg";
import docker from "../images/docker.svg";
import kubernetes from "../images/kubernetes.svg";
import aws from "../images/aws.svg";
import restApi from "../images/restapi.svg";
import websockets from "../images/websockets.svg";
import githubActions from "../images/github-actions.svg";

import windows from "../images/windows.svg";
import linux from "../images/linux.svg";
import macos from "../images/macos.svg";

const skillGroups = [
  {
    category: "Programming Languages",
    items: [
      { imgSrc: c, label: "C" },
      { imgSrc: cpp, label: "C++" },
      { imgSrc: java, label: "Java" },
      { imgSrc: python, label: "Python" },
      { imgSrc: javascript, label: "JavaScript" },
      { imgSrc: typescript, label: "TypeScript" },
      { imgSrc: golang, label: "Go" },
      { imgSrc: html, label: "HTML/CSS" },
      { imgSrc: kotlin, label: "Kotlin" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { imgSrc: react, label: "React" },
      { imgSrc: nodejs, label: "Node.js" },
      { imgSrc: expressjs, label: "Express" },
      { imgSrc: bootstrap, label: "Bootstrap" },
      { imgSrc: flask, label: "Flask" },
      { imgSrc: django, label: "Django" },
      { imgSrc: tensorflow, label: "TensorFlow" },
      { imgSrc: pytorch, label: "PyTorch" },
      { imgSrc: socketIo, label: "Socket.IO" },
    ],
  },
  {
    category: "Databases",
    items: [
      { imgSrc: postgres, label: "PostgreSQL" },
      { imgSrc: mysql, label: "MySQL" },
      { imgSrc: mongodb, label: "MongoDB" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { imgSrc: gitLogo, label: "Git" },
      { imgSrc: docker, label: "Docker" },
      { imgSrc: kubernetes, label: "Kubernetes" },
      { imgSrc: aws, label: "AWS" },
      { imgSrc: restApi, label: "REST APIs" },
      { imgSrc: websockets, label: "WebSockets" },
      { imgSrc: githubActions, label: "CI/CD (GitHub Actions)" },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      { imgSrc: windows, label: "Windows" },
      { imgSrc: linux, label: "Linux" },
      { imgSrc: macos, label: "macOS" },
    ],
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = () => setReduced(mq.matches);
    listener();
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

const SkillPill = ({ imgSrc, label, classes }) => (
  <div
    className={
      "flex w-[128px] shrink-0 flex-col gap-2 rounded-2xl border border-zinc-200/90 bg-white p-3.5 shadow-sm transition hover:border-sky-300/60 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-sky-500/50 " +
      (classes ?? "")
    }
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
      <img src={imgSrc} width={28} height={28} alt="" className="opacity-95" />
    </div>
    <p className="type-pill-reading line-clamp-2">
      {label}
    </p>
  </div>
);

/** ~128px pill + gap-2 (8px); keeps short lanes wide enough to scroll on desktop. */
const APPROX_PILL_PX = 136;

/** Same horizontal drift (px/s) for every overflowing marquee lane */
const MARQUEE_PX_PER_SECOND = 32;

const SkillMarqueeLane = ({ items, groupIndex }) => {
  const viewportRef = useRef(null);
  const measureRef = useRef(null);
  const pausedRef = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [needsMarquee, setNeedsMarquee] = useState(false);
  const [measured, setMeasured] = useState(false);
  const [segmentRepeats, setSegmentRepeats] = useState(2);

  const marqueeActive = measured && needsMarquee && !prefersReducedMotion;

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      setNeedsMarquee(false);
      setMeasured(true);
      return undefined;
    }
    const vp = viewportRef.current;
    const ruler = measureRef.current;
    if (!vp || !ruler || items.length === 0) {
      setMeasured(true);
      return undefined;
    }

    const compute = () => {
      const overflow = ruler.scrollWidth > vp.clientWidth + 0.5;
      /** Wider rows (e.g. Tools & Technologies with 7 pills) often still fit on ~lg desktops while 9-pill rows overflow — keep motion consistent. */
      const preferMarqueeStrip = items.length > 4;
      const active = overflow || preferMarqueeStrip;
      setNeedsMarquee((prev) => (prev !== active ? active : prev));
      setMeasured(true);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(vp);
    ro.observe(ruler);
    return () => ro.disconnect();
  }, [items, prefersReducedMotion]);

  useLayoutEffect(() => {
    if (!marqueeActive) return undefined;
    const el = viewportRef.current;
    if (!el || items.length === 0) return undefined;

    const updateRepeats = () => {
      const cw = el.clientWidth;
      if (cw <= 0) return;
      const oneSegmentWidth = items.length * APPROX_PILL_PX;
      const targetScrollable = Math.max(cw * 1.3, 520);
      const raw = Math.ceil(targetScrollable / oneSegmentWidth);
      const next = Math.max(2, Math.min(28, raw));
      setSegmentRepeats((prev) => (prev === next ? prev : next));
    };

    updateRepeats();
    const ro = new ResizeObserver(updateRepeats);
    ro.observe(el);
    return () => ro.disconnect();
  }, [marqueeActive, items]);

  const segment = marqueeActive
    ? Array.from({ length: segmentRepeats }, () => items).flat()
    : items;
  const loopItems = marqueeActive ? [...segment, ...segment] : items;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !marqueeActive) return undefined;

    const normalizeScroll = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      while (el.scrollLeft >= half) el.scrollLeft -= half;
      while (el.scrollLeft < 0) el.scrollLeft += half;
    };

    const resizeObserver = new ResizeObserver(normalizeScroll);
    resizeObserver.observe(el);

    let raf = 0;
    let prev = performance.now();

    const step = (now) => {
      const half = el.scrollWidth / 2;

      if (half > 0 && !pausedRef.current) {
        const dt = Math.min(now - prev, 64);
        el.scrollLeft += (MARQUEE_PX_PER_SECOND * dt) / 1000;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft < 0) el.scrollLeft += half;
      }

      prev = now;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [marqueeActive]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !marqueeActive) return undefined;
    const onScroll = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 0) el.scrollLeft += half;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [marqueeActive, items]);

  const marqueePointerHandlers = marqueeActive
    ? {
        onPointerEnter: () => {
          pausedRef.current = true;
        },
        onPointerLeave: () => {
          pausedRef.current = false;
        },
      }
    : {};

  const viewportBase =
    "relative min-w-0 rounded-xl border border-zinc-100/80 bg-zinc-50/40 py-2 dark:border-zinc-800 dark:bg-zinc-900/40 ";

  const viewportClass =
    viewportBase +
    (marqueeActive
      ? "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-300/70 hover:scrollbar-thumb-zinc-400/85 dark:scrollbar-thumb-zinc-600 dark:hover:scrollbar-thumb-zinc-500 overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:auto] touch-pan-x "
      : "overflow-hidden ") +
    (!measured ? "opacity-0 " : "");

  const trackReduced = prefersReducedMotion ? "flex-wrap gap-2 pb-2 !w-full !min-w-0 " : "";

  const trackFlex = marqueeActive
    ? "flex w-max min-w-max flex-nowrap gap-2 px-1 "
    : prefersReducedMotion
      ? "flex gap-2 px-1 "
      : "flex flex-nowrap gap-2 px-1 ";

  return (
    <div ref={viewportRef} className={viewportClass.trim()} {...marqueePointerHandlers}>
      {!prefersReducedMotion && (
        <div
          ref={measureRef}
          aria-hidden
          className="pointer-events-none invisible absolute left-0 top-0 flex w-max min-w-max flex-nowrap gap-2 px-1 opacity-0"
        >
          {items.map(({ imgSrc, label }, idx) => (
            <SkillPill
              key={`${groupIndex}-ruler-${idx}`}
              imgSrc={imgSrc}
              label={label}
              classes=""
            />
          ))}
        </div>
      )}
      <div className={`${trackFlex}${trackReduced}`.trim()}>
        {prefersReducedMotion
          ? items.map(({ imgSrc, label }, idx) => (
              <SkillPill
                key={`${groupIndex}-static-${idx}`}
                imgSrc={imgSrc}
                label={label}
                classes=""
              />
            ))
          : loopItems.map(({ imgSrc, label }, idx) => (
              <SkillPill
                key={`${groupIndex}-row-${marqueeActive ? "m" : "s"}-${idx}`}
                imgSrc={imgSrc}
                label={label}
                classes=""
              />
            ))}
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <section id="skills" className="section border-t border-zinc-200/80 bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="section-eyebrow mb-3 reveal-up">Capabilities</p>
            <h2 className="section-heading leading-tight reveal-up">
              Tools I use to go from idea to production.
            </h2>
            <p className="section-lead mt-4 reveal-up max-w-sm">
              Wider tool rows scroll automatically; hover a lane to pause and use
              trackpad or finger to scrub sideways. Short rows stay static unless the
              window is narrow enough that they overflow.
            </p>
          </div>

          <div className="min-w-0 space-y-10">
            {skillGroups.map(({ category, items }, groupIndex) => (
              <div key={groupIndex} className="reveal-up">
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-zinc-200/90 pb-3 dark:border-zinc-800">
                  <h3 className="type-rail-heading">
                    {String(groupIndex + 1).padStart(2, "0")} · {category}
                  </h3>
                  <span className="type-support">
                    {items.length} items
                  </span>
                </div>
                <SkillMarqueeLane items={items} groupIndex={groupIndex} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
