import ExperienceCard from "./ExperienceCard";

const experienceGroups = [
  {
    title: "CSE 191 Teaching Assistant",
    company: "University at Buffalo",
    duration: "Jan 2025 – Present · 4 mos",
    location: "Buffalo, New York, United States",
    description: "Assisted with course material delivery and provided academic support through 20+ office hours, helping students understand complex topics in discrete mathematics. Graded assignments and exams, providing detailed feedback to enhance student comprehension and performance."
  },
  {
    title: "Math Place Tutor",
    company: "Thomas J. Edwards Undergraduate Learning Center",
    duration: "Sep 2024 – Present · 8 mos",
    location: "Buffalo, New York, United States",
    description: "Provided support and tutoring to 100+ students in Advanced Calculus, Linear Algebra, and Business Math courses. Helped students understand math concepts, fostering strong fundamentals and promoting independent learning."
  },
  {
    title: "Resident Advisor",
    company: "University at Buffalo Campus Living",
    duration: "Aug 2024 – Present · 9 mos",
    location: "Buffalo, New York, United States",
    description: "Guided and supported 30 Honors College students with tailored academic, personal, and career advice, contributing to their overall success. Partnered with fellow RAs and campus living staff to create and implement community-building events, activities, and educational programs."
  },
  {
    title: "CSE 199 Teaching Assistant",
    company: "University at Buffalo",
    duration: "Aug 2024 – Dec 2024 · 5 mos",
    location: "Buffalo, New York, United States",
    description: "Conducted weekly recitations covering modules of misinformation, digital data representation, data mining, computing ethics, internet infrastructure, and privacy. Assisted in grading assignments to uphold academic standards and provide constructive feedback. "
  },
  {
    title: "Orientation Operations Assistant",
    company: "University at Buffalo",
    duration: "Apr 2024 – Sep 2024 · 6 mos",
    location: "Buffalo, New York, United States",
    description: "Utilized orientation databases and systems to update attendance records, coordinate UBLinked events, and support behind-the-scenes logistics. Managed logistics for orientation programs, while also coordinating inventory, deliveries, and organized storage of program supplies." 
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Work Experience</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Here's a snapshot of my professional experience.
        </p>
        <div>
          {experienceGroups.map((job, idx) => (
            <ExperienceCard key={idx} {...job} index={idx} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
