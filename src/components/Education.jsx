import ublogo from "../images/ublogo.png";

const program = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University at Buffalo",
  graduating: "December 2026",
  GPA: "3.87 / 4.0",
  logo: ublogo,
};

const courses = [
  "Operating Systems",
  "Distributed Systems",
  "Systems Programming",
  "Computer Systems Administration",
  "Computer Organization",
  "Data Structures",
  "Algorithms and Complexity",
  "Algorithms for Modern Computing Systems",
  "Object Oriented Programming",
  "Linear Algebra",
  "Probability",
  "Programming Languages",
  "Computer Vision & Image Processing",
  "Machine Learning",
  "Reinforcement Learning",
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-zinc-200/80 bg-gradient-to-br from-sky-50/40 via-zinc-50 to-zinc-100 py-16 dark:border-zinc-800 dark:from-sky-950/20 dark:via-zinc-950 dark:to-zinc-950 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-[100px] dark:bg-sky-500/10" />
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="section-eyebrow reveal-up">Academics</p>
            <h2 className="section-heading reveal-up mt-4">Education</h2>
            <p className="section-lead mt-5 reveal-up max-w-sm">
              Systems, theory, and software engineering depth from UB, paired
              with shipping experience outside the classroom.
            </p>
          </div>

          <div className="space-y-8 lg:col-span-8">
            <div className="reveal-up overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-1 shadow-md dark:border-zinc-700 dark:bg-zinc-900">
              <div className="rounded-[22px] bg-zinc-50/80 p-6 dark:bg-zinc-900/50 sm:p-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="flex shrink-0 justify-center md:justify-start">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 sm:h-28 sm:w-28">
                      <img
                        src={program.logo}
                        alt={`${program.institution} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="type-institution">{program.institution}</p>
                    <h3 className="type-card-heading mt-2">{program.degree}</h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-zinc-200/90 bg-white px-4 py-3.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
                        <p className="type-overline">Expected graduation</p>
                        <p className="type-stat-value">{program.graduating}</p>
                      </div>
                      <div className="rounded-2xl border border-zinc-200/90 bg-white px-4 py-3.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
                        <p className="type-overline">GPA</p>
                        <p className="type-stat-value">{program.GPA}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-up">
              <h3 className="type-rail-heading mb-4">Relevant coursework</h3>
              <div className="flex flex-wrap gap-2.5">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-zinc-200/90 bg-white px-4 py-2.5 type-pill-reading shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
