import ublogo from "../images/ublogo.png";

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
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-zinc-50">
          Education
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="bg-accent/15 px-6 py-4 dark:bg-accent/10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                Bachelor of Science in Computer Science
              </span>
              <span className="text-sm font-medium text-navy/60 dark:text-zinc-400">
                Aug 2023 &ndash; Dec 2026
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-surface p-2 dark:bg-zinc-800">
                <img src={ublogo} alt="University at Buffalo" className="h-full w-full object-contain" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy dark:text-zinc-50">
                  University at Buffalo
                </h3>
                <p className="mt-1 text-[15px] text-muted dark:text-zinc-400">
                  State University of New York
                </p>

                <div className="mt-4 flex flex-wrap gap-x-10 gap-y-2">
                  <div>
                    <span className="text-sm text-muted dark:text-zinc-500">GPA</span>
                    <span className="ml-2 text-lg font-bold text-navy dark:text-zinc-100">3.87 / 4.0</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted dark:text-zinc-500">Graduating</span>
                    <span className="ml-2 text-lg font-bold text-navy dark:text-zinc-100">December 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted/70 dark:text-zinc-500">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {courses.map((course) => (
              <span
                key={course}
                className="rounded-md border border-navy/10 bg-white px-3 py-1.5 text-[15px] text-navy/80 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
