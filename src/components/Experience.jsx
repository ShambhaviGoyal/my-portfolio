import ExperienceCard from "./ExperienceCard";

const experienceGroups = [
  {
  title: "Student Assistant – Collection Maintenance Projects",
  company: "University Libraries, University at Buffalo",
  duration: "Apr 2025 – Present",
  location: "Buffalo, New York, United States",
  description: "Maintained and organized large volumes of library materials using the Library of Congress classification system and handheld scanners. Ensured accuracy in inventory data through systematic shelving and digital tracking. Demonstrated strong attention to detail, independence, and reliability in a fast-paced, physically active environment."
  },
  {
    title: "CSE 191 Teaching Assistant",
    company: "University at Buffalo",
    duration: "Jan 2025 – Present",
    location: "Buffalo, New York, United States",
    description: "Assisted with course material delivery and provided academic support through 20+ office hours, helping students understand complex topics in discrete mathematics. Graded assignments and exams, providing detailed feedback to enhance student comprehension and performance."
  },
  {
    title: "Math Place Tutor",
    company: "Thomas J. Edwards Undergraduate Learning Center",
    duration: "Sep 2024 – Present",
    location: "Buffalo, New York, United States",
    description: "Tutored over 100 students in Advanced Calculus, Linear Algebra, and Business Math, resulting in an average grade improvement of 10–15% based on follow-up assessments and student reports. By adapting my instruction to suit diverse learning styles and guiding students through targeted problem-solving strategies, I consistently received positive feedback, with 90% of students reporting increased confidence and clarity in understanding mathematical concepts."
  },
  {
    title: "Resident Advisor",
    company: "University at Buffalo Campus Living",
    duration: "Aug 2024 – Present",
    location: "Buffalo, New York, United States",
    description: "Guided and supported 30 Honors College students with tailored academic, personal, and career advice, contributing to their overall success. Partnered with fellow RAs and campus living staff to create and implement community-building events, activities, and educational programs."
  },
  {
    title: "CSE 199 Teaching Assistant",
    company: "University at Buffalo",
    duration: "Aug 2024 – Dec 2024",
    location: "Buffalo, New York, United States",
    description: "Conducted weekly recitations covering modules of misinformation, digital data representation, data mining, computing ethics, internet infrastructure, and privacy. Assisted in grading assignments to uphold academic standards and provide constructive feedback. "
  },
  {
    title: "Orientation Operations Assistant",
    company: "University at Buffalo",
    duration: "Apr 2024 – Sep 2024",
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
