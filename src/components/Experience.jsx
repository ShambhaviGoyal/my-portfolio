import ubLogo from "../images/ublogo.png";
import metalayerLogo from "../images/metalayer.png";

const experience = [
  {
    title: "Software Developer Intern",
    company: "Meta Layer Initiative",
    imgSrc: metalayerLogo,
    duration: "Aug 2025 – May 2026",
    location: "Berkeley, CA, United States",
    description:
      "Developed a decentralized social platform with a Chrome browser extension powered by AI, building a full-stack application using Node.js/Express, PostgreSQL, and React. Leveraged Chrome Extension APIs to enable human–agent interaction, community-aware policies, and presence tracking. Integrated DeepSeek AI for contextual web analysis, implementing real-time messaging with WebSockets, securing authentication with multiple OAuth providers, and delivering a responsive glassmorphism UI optimized for scalability and security.",
  },
  {
    title: "Undergraduate Teaching Assistant - Algorithms & Complexity",
    company: "Computer Science and Engineering - University at Buffalo",
    imgSrc: ubLogo,
    duration: "Aug 2025 – Dec 2026",
    location: "Buffalo, New York, United States",
    description:
      "Supported instruction for 60+ students on core algorithm design paradigms, including greedy, divide-and-conquer, and dynamic programming, as well as advanced topics such as randomized algorithms, distributed systems, and machine learning foundations. Reinforced learning through weekly recitations, 15+ office hours, and detailed feedback on programming assignments and proofs, helping students strengthen both theoretical understanding and practical algorithm implementation.",
  },
  {
    title: "Undergraduate Teaching Assistant - Discrete Structures",
    company: "Computer Science and Engineering - University at Buffalo",
    imgSrc: ubLogo,
    duration: "Jan 2025 – May 2025",
    location: "Buffalo, New York, United States",
    description:
      "Assisted in delivering foundational discrete mathematics material to 50+ students, covering logic, proofs, sets, functions, relations, recursion, recurrence relations, induction, graphs, trees, and counting theory. Held 20+ office hours to clarify complex concepts, provide academic support, and guide problem-solving. Graded assignments and exams, offering detailed feedback that improved student understanding and performance.",
  },
  {
    title: "Undergraduate Teaching Assistant - Computer Science Seminar",
    company: "Computer Science and Engineering - University at Buffalo",
    imgSrc: ubLogo,
    duration: "Aug 2024 – Dec 2024",
    location: "Buffalo, New York, United States",
    description:
      "Conducted weekly recitations covering modules on misinformation, digital data representation, data mining, computing ethics, internet infrastructure, and privacy. Assisted in grading assignments for 50+ students, providing constructive feedback to uphold academic standards and support student learning.",
  },
  {
    title: "Mathematics Tutor",
    company: "Thomas J. Edwards Undergraduate Learning Center",
    imgSrc: ubLogo,
    duration: "Sep 2024 – May 2025",
    location: "Buffalo, New York, United States",
    description:
      "Tutored over 100 students in Advanced Calculus, Linear Algebra, and Business Math, resulting in an average grade improvement of 10–15% based on follow-up assessments and student reports. By adapting my instruction to suit diverse learning styles and guiding students through targeted problem-solving strategies, I consistently received positive feedback, with 90% of students reporting increased confidence and clarity in understanding mathematical concepts.",
  },
  {
    title: "Resident Advisor",
    company: "University at Buffalo Campus Living",
    imgSrc: ubLogo,
    duration: "Aug 2024 – May 2026",
    location: "Buffalo, New York, United States",
    description:
      "Guided and supported 60+ Honors College students with tailored academic, personal, and career advice, contributing to their overall success. Partnered with fellow RAs and campus living staff to create and implement community-building events, activities, and educational programs.",
  },
  {
    title: "Student Assistant – Collection Maintenance Projects",
    company: "University Libraries, University at Buffalo",
    imgSrc: ubLogo,
    duration: "Apr 2025 – July 2025",
    location: "Buffalo, New York, United States",
    description:
      "Maintained and organized large volumes of library materials using the Library of Congress classification system and handheld scanners. Ensured accuracy in inventory data through systematic shelving and digital tracking. Demonstrated strong attention to detail, independence, and reliability in a fast-paced, physically active environment.",
  },
  {
    title: "Orientation Operations Assistant",
    company: "University at Buffalo",
    imgSrc: ubLogo,
    duration: "Apr 2024 – Sep 2024",
    location: "Buffalo, New York, United States",
    description:
      "Utilized orientation databases and systems to update attendance records, coordinate UBLinked events, and support behind-the-scenes logistics. Managed logistics for orientation programs, while also coordinating inventory, deliveries, and organized storage of program supplies.",
  },
];

function ExperienceNode({ role }) {
  return (
    <div className="group relative pb-4 pl-14 reveal-up last:pb-0 sm:pl-[4.25rem]">
      {/* Timeline node */}
      <div className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-theme-border bg-theme-surface transition-colors duration-300 group-hover:border-theme-text/20 dark:border-themeDark-border dark:bg-themeDark-surface dark:group-hover:border-themeDark-text/30 sm:h-12 sm:w-12">
        {role.imgSrc ? (
          <img
            src={role.imgSrc}
            alt=""
            className="h-6 w-6 rounded object-contain sm:h-7 sm:w-7"
          />
        ) : (
          <span className="font-display text-sm font-semibold text-theme-muted dark:text-themeDark-muted">
            {role.company.charAt(0)}
          </span>
        )}
      </div>

      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-display text-lg font-semibold tracking-tight text-theme-text dark:text-themeDark-text">
            {role.title}
          </h3>
          <span className="shrink-0 whitespace-nowrap font-mono text-xs text-theme-muted dark:text-themeDark-muted">
            {role.duration}
          </span>
        </div>

        <p className="mt-1.5 text-sm font-medium text-theme-accent dark:text-themeDark-accent">
          {role.company}
        </p>

        {role.location && (
          <p className="mt-1 text-xs text-theme-muted dark:text-themeDark-muted">
            {role.location}
          </p>
        )}

        {role.description && (
          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-theme-muted dark:text-themeDark-muted">
            {role.description}
          </p>
        )}
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <header className="section-header">
          <p className="eyebrow reveal-up mb-2">Experience</p>
          <h2 className="heading reveal-up">Where I&apos;ve worked.</h2>
        </header>

        <div className="relative">
          <div className="absolute bottom-2 left-[1.375rem] top-2 w-px bg-theme-border dark:bg-themeDark-border sm:left-6" />

          <div>
            {experience.map((role, index) => (
              <ExperienceNode
                key={`${role.company}-${role.title}-${index}`}
                role={role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
