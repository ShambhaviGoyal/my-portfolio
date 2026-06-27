import ublogo from "../images/ublogo.png";

const program = {
  degree: "Bachelor of Science in Computer Science",
  honors: "Honors College",
  institution: "University at Buffalo, The State University of New York",
  dates: "Aug 2023 – Dec 2026",
  GPA: "3.87 / 4.0",
  logo: ublogo,
};

const awards = [
  "Dean's List",
  "Women Empowerment Scholarship",
  "University at Buffalo Flagship Scholarship",
];

const leadership = [
  "Leadership House",
  "Women in Science and Engineering",
];

const courseCategories = {
  "Systems & Architecture": [
    "Operating Systems",
    "Distributed Systems",
    "Systems Programming",
    "Computer Organization",
  ],
  "Algorithms & Theory": [
    "Data Structures",
    "Discrete Structures",
    "Algorithms and Complexity",
    "Algorithms for Modern Computing Systems",
  ],
  "AI & Machine Learning": [
    "Computer Vision & Image Processing",
    "Machine Learning",
    "Reinforcement Learning",
  ],
  "Software Engineering": [
    "Object Oriented Programming",
    "Programming Languages",
  ],
  Mathematics: ["Linear Algebra", "Probability"],
};

const pillTone =
  "border-stone-200/90 bg-stone-50 text-stone-700 dark:border-stone-600/45 dark:bg-stone-800/45 dark:text-stone-300";

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`inline-flex rounded-md border px-2.5 py-1 text-[13px] ${pillTone}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container-wide">
        <header className="section-header">
          <p className="eyebrow reveal-up mb-2">Academics</p>
          <h2 className="heading reveal-up">Education.</h2>
        </header>

        <div className="space-y-3 reveal-up">
          {/* Degree, honors, awards & leadership */}
          <div className="card overflow-hidden">
            <div className="flex flex-col gap-3 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-4">
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-theme-border bg-theme-bg p-2 dark:border-themeDark-border dark:bg-themeDark-bg">
                  <img
                    src={program.logo}
                    alt={`${program.institution} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-theme-text dark:text-themeDark-text sm:text-xl">
                    {program.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-theme-text dark:text-themeDark-text">
                    {program.honors}
                  </p>
                  <p className="mt-1 text-sm text-theme-accent dark:text-themeDark-accent">
                    {program.institution}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 gap-6 sm:gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-theme-muted dark:text-themeDark-muted">
                    GPA
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-theme-text dark:text-themeDark-text">
                    {program.GPA}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-theme-muted dark:text-themeDark-muted">
                    Dates
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-theme-text dark:text-themeDark-text">
                    {program.dates}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 border-t border-theme-border bg-theme-bg/60 px-5 py-3.5 dark:border-themeDark-border dark:bg-themeDark-bg/40 sm:grid-cols-2 sm:px-6 sm:py-4">
              <div>
                <h4 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-theme-muted dark:text-themeDark-muted">
                  Awards
                </h4>
                <TagList items={awards} />
              </div>
              <div>
                <h4 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-theme-muted dark:text-themeDark-muted">
                  Leadership
                </h4>
                <TagList items={leadership} />
              </div>
            </div>
          </div>

          {/* Relevant coursework — separate block */}
          <div className="card overflow-hidden">
            <div className="border-b border-theme-border bg-theme-bg/60 px-5 py-3 dark:border-themeDark-border dark:bg-themeDark-bg/40 sm:px-6">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-theme-muted dark:text-themeDark-muted">
                Relevant Coursework
              </h3>
            </div>

            <div className="divide-y divide-theme-border dark:divide-themeDark-border">
              {Object.entries(courseCategories).map(([category, courses]) => (
                <div
                  key={category}
                  className="flex flex-col gap-2.5 px-5 py-3 sm:flex-row sm:items-start sm:gap-5 sm:px-6 sm:py-3.5"
                >
                  <h4 className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-theme-muted dark:text-themeDark-muted sm:w-44 lg:w-52">
                    {category}
                  </h4>
                  <TagList items={courses} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
