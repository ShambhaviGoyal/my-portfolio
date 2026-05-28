/**
 * Single flat list (no section headers). Order: internship → teaching assistantships →
 * tutoring → other campus roles. Within each band, reverse chronological where it helps.
 */
const experience = [
  {
    title: "Software Developer Intern",
    company: "Meta Layer Initiative",
    duration: "Aug 2025 – May 2026",
    location: "Berkeley, CA, United States",
    description:
      "Developed a decentralized social platform with a Chrome browser extension powered by AI, building a full-stack application using Node.js/Express, PostgreSQL, and React. Leveraged Chrome Extension APIs to enable human–agent interaction, community-aware policies, and presence tracking. Integrated DeepSeek AI for contextual web analysis, implementing real-time messaging with WebSockets, securing authentication with multiple OAuth providers, and delivering a responsive glassmorphism UI optimized for scalability and security.",
  },
  {
    title: "Undergraduate Teaching Assistant - Algorithms & Complexity",
    company: "Computer Science and Engineering - University at Buffalo",
    duration: "Aug 2025 – Dec 2026",
    location: "Buffalo, New York, United States",
    description:
      "Supported instruction for 60+ students on core algorithm design paradigms, including greedy, divide-and-conquer, and dynamic programming, as well as advanced topics such as randomized algorithms, distributed systems, and machine learning foundations. Reinforced learning through weekly recitations, 15+ office hours, and detailed feedback on programming assignments and proofs, helping students strengthen both theoretical understanding and practical algorithm implementation.",
  },
  {
    title: "Undergraduate Teaching Assistant - Discrete Structures",
    company: "Computer Science and Engineering - University at Buffalo",
    duration: "Jan 2025 – May 2025",
    location: "Buffalo, New York, United States",
    description:
      "Assisted in delivering foundational discrete mathematics material to 50+ students, covering logic, proofs, sets, functions, relations, recursion, recurrence relations, induction, graphs, trees, and counting theory. Held 20+ office hours to clarify complex concepts, provide academic support, and guide problem-solving. Graded assignments and exams, offering detailed feedback that improved student understanding and performance.",
  },
  {
    title: "Undergraduate Teaching Assistant - Computer Science Seminar",
    company: "Computer Science and Engineering - University at Buffalo",
    duration: "Aug 2024 – Dec 2024",
    location: "Buffalo, New York, United States",
    description:
      "Conducted weekly recitations covering modules on misinformation, digital data representation, data mining, computing ethics, internet infrastructure, and privacy. Assisted in grading assignments for 50+ students, providing constructive feedback to uphold academic standards and support student learning.",
  },
  {
    title: "Mathematics Tutor",
    company: "Thomas J. Edwards Undergraduate Learning Center",
    duration: "Sep 2024 – May 2025",
    location: "Buffalo, New York, United States",
    description:
      "Tutored over 100 students in Advanced Calculus, Linear Algebra, and Business Math, resulting in an average grade improvement of 10–15% based on follow-up assessments and student reports. By adapting my instruction to suit diverse learning styles and guiding students through targeted problem-solving strategies, I consistently received positive feedback, with 90% of students reporting increased confidence and clarity in understanding mathematical concepts.",
  },
  {
    title: "Resident Advisor",
    company: "University at Buffalo Campus Living",
    duration: "Aug 2024 – May 2026",
    location: "Buffalo, New York, United States",
    description:
      "Guided and supported 60+ Honors College students with tailored academic, personal, and career advice, contributing to their overall success. Partnered with fellow RAs and campus living staff to create and implement community-building events, activities, and educational programs.",
  },
  {
    title: "Student Assistant – Collection Maintenance Projects",
    company: "University Libraries, University at Buffalo",
    duration: "Apr 2025 – July 2025",
    location: "Buffalo, New York, United States",
    description:
      "Maintained and organized large volumes of library materials using the Library of Congress classification system and handheld scanners. Ensured accuracy in inventory data through systematic shelving and digital tracking. Demonstrated strong attention to detail, independence, and reliability in a fast-paced, physically active environment.",
  },
  {
    title: "Orientation Operations Assistant",
    company: "University at Buffalo",
    duration: "Apr 2024 – Sep 2024",
    location: "Buffalo, New York, United States",
    description:
      "Utilized orientation databases and systems to update attendance records, coordinate UBLinked events, and support behind-the-scenes logistics. Managed logistics for orientation programs, while also coordinating inventory, deliveries, and organized storage of program supplies.",
  },
];

function ExperienceRow({ role, isFirst }) {
  return (
    <div
      className={`reveal-up pb-8 last:pb-0 sm:pb-10 sm:last:pb-0 ${
        isFirst
          ? ""
          : "border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:pt-10"
      }`}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="type-card-subline pr-2 leading-snug">{role.title}</h3>
        <p className="type-support shrink-0 whitespace-nowrap text-zinc-500 dark:text-zinc-400 sm:text-right">
          {role.duration}
        </p>
      </div>

      <p className="type-reading-muted mt-1 font-semibold text-zinc-700 dark:text-zinc-300">{role.company}</p>

      {role.location ? (
        <p className="type-support mt-1 flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
          <span className="material-symbols-rounded text-[16px] opacity-80" aria-hidden>
            location_on
          </span>
          {role.location}
        </p>
      ) : null}

      {role.description ? (
        <p className="type-reading-muted mt-3 leading-relaxed">{role.description}</p>
      ) : null}
    </div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section border-t border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container-wide">
        <div className="mb-10 max-w-2xl">
          <p className="section-eyebrow mb-3 reveal-up">Experience</p>
          <h2 className="section-heading reveal-up">Roles and impact</h2>
          <p className="section-lead-tight mt-4 reveal-up">
            Internships, teaching assistantships, tutoring, and campus roles.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl border border-zinc-200/90 bg-white px-4 py-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 sm:px-8 sm:py-8">
          {experience.map((role, index) => (
            <ExperienceRow
              key={`${role.company}-${role.title}-${index}`}
              role={role}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
