import { useState } from "react";
import ubLogo from "../images/ublogo.png";
import metalayerLogo from "../images/metalayer.png";

const internships = [
  {
    title: "Software Developer Intern",
    org: "Meta Layer Initiative",
    imgSrc: metalayerLogo,
    period: "Aug 2025 \u2013 May 2026",
    location: "Berkeley, CA",
    bullets: [
      "Built a decentralized social platform with a Chrome extension powered by DeepSeek AI for contextual web analysis",
      "Full-stack with Node.js/Express, PostgreSQL, and React; real-time messaging via WebSockets",
      "Implemented multi-provider OAuth and a responsive glassmorphism UI optimized for scalability",
    ],
  },
];

const teaching = [
  {
    title: "UTA \u2014 Algorithms & Complexity",
    org: "CSE, University at Buffalo",
    imgSrc: ubLogo,
    period: "Aug 2025 \u2013 Dec 2026",
    location: "Buffalo, NY",
    bullets: [
      "Supporting 60+ students in greedy, D&C, DP, and randomized algorithm design",
      "Weekly recitations, 15+ office hours, and feedback on assignments and proofs",
    ],
  },
  {
    title: "UTA \u2014 Discrete Structures",
    org: "CSE, University at Buffalo",
    imgSrc: ubLogo,
    period: "Jan 2025 \u2013 May 2025",
    location: "Buffalo, NY",
    bullets: [
      "Delivered discrete math material to 50+ students \u2014 logic, proofs, induction, graphs, counting",
      "Held 20+ office hours for academic support and problem-solving guidance",
    ],
  },
  {
    title: "UTA \u2014 Computer Science Seminar",
    org: "CSE, University at Buffalo",
    imgSrc: ubLogo,
    period: "Aug 2024 \u2013 Dec 2024",
    location: "Buffalo, NY",
    bullets: [
      "Weekly recitations on misinformation, data mining, computing ethics, and privacy",
      "Graded assignments for 50+ students with constructive feedback",
    ],
  },
  {
    title: "Mathematics Tutor",
    org: "Edwards Undergraduate Learning Center",
    imgSrc: ubLogo,
    period: "Sep 2024 \u2013 May 2025",
    location: "Buffalo, NY",
    bullets: [
      "Tutored 100+ students in Calculus, Linear Algebra, and Business Math",
      "Avg grade improvement of 10\u201315%; 90% reported increased confidence",
    ],
  },
];

const other = [
  {
    title: "Resident Advisor",
    org: "UB Campus Living",
    imgSrc: ubLogo,
    period: "Aug 2024 \u2013 May 2026",
    location: "Buffalo, NY",
    bullets: [
      "Guided 60+ Honors College students; organized community-building events",
    ],
  },
  {
    title: "Student Assistant \u2014 Collection Maintenance",
    org: "University Libraries, UB",
    imgSrc: ubLogo,
    period: "Apr 2025 \u2013 Jul 2025",
    location: "Buffalo, NY",
    bullets: [
      "Organized library materials using Library of Congress classification and digital tracking",
    ],
  },
  {
    title: "Orientation Operations Assistant",
    org: "University at Buffalo",
    imgSrc: ubLogo,
    period: "Apr 2024 \u2013 Sep 2024",
    location: "Buffalo, NY",
    bullets: [
      "Managed logistics for orientation programs \u2014 attendance, events, inventory",
    ],
  },
];

function RoleCard({ role }) {
  return (
    <div className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex gap-4">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface p-1.5 dark:bg-zinc-800">
          <img src={role.imgSrc} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h4 className="text-base font-bold text-navy dark:text-zinc-50">{role.title}</h4>
            <span className="shrink-0 text-sm text-muted dark:text-zinc-500">{role.period}</span>
          </div>
          <p className="mt-1 text-[14px] text-muted dark:text-zinc-400">
            {role.org} &middot; {role.location}
          </p>
          <ul className="mt-3 space-y-1.5">
            {role.bullets.map((b, i) => (
              <li key={i} className="text-[15px] leading-relaxed text-navy/75 dark:text-zinc-400">
                <span className="mr-2 text-accent">&#8226;</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SectionGroup({ title, roles }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-muted/70 dark:text-zinc-500">
        {title}
      </h3>
      <div className="space-y-4">
        {roles.map((role) => (
          <RoleCard key={role.title + role.period} role={role} />
        ))}
      </div>
    </div>
  );
}

const Experience = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-zinc-50">
          Experience
        </h2>
        <p className="mt-3 max-w-xl text-lg text-muted dark:text-zinc-400">
          Internships, teaching assistantships, and campus involvement.
        </p>

        <div className="mt-12 space-y-10">
          <SectionGroup title="Internships" roles={internships} />
          <SectionGroup title="Teaching & Tutoring" roles={teaching} />

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-muted transition-colors hover:text-navy dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <span
                className="material-symbols-rounded text-[18px] transition-transform duration-200"
                style={{ transform: showMore ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
              {showMore ? "Hide other roles" : `Other campus roles (${other.length})`}
            </button>

            {showMore && (
              <div className="mt-6 animate-fade-in">
                <SectionGroup title="Campus" roles={other} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
