import EducationCard from "./EducationCard";
import ublogo from "../images/ublogo.png"; 

const educationGroups = [
  {
    category: "Program Details",
    items: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University at Buffalo",
        graduating: "May 2027",
        GPA: "3.8/4.0",
        logo: ublogo
      },
    ],
  },
  {
    category: "Relevant Coursework",
    items: [
      { course: "Systems Programming" },
      { course: "Computer Architecture" },
      { course: "Data Structures" },
      { course: "Algorithms and Complexity" },
      { course: "Object Oriented Programming" },      
      { course: "Python Programming" }, 
      { course: "Operating Systems" },
      { course: "Programming Languages" },
      { course: "Linear Algebra" },
      { course: "Discrete Mathematics" } 
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Education</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Below are my academic details along with relevant coursework I’ve completed. I’m always eager to learn and continuously expand my knowledge in the field of computer science.
        </p>

        {educationGroups.map(({ category, items }, groupIndex) => (
          <div key={groupIndex} className="mb-10">
            <h3 className="text-lg font-semibold text-zinc-300 mb-4">{category}</h3>
            {/* FIXED 3 COLUMN GRID */}
            <div className="grid gap-3 grid-cols-3">
              {items.map((item, itemIndex) => (
                <EducationCard 
                  key={`${groupIndex}-${itemIndex}`} 
                  {...item} 
                  classes="reveal-up" 
                  // Span all 3 columns for first group Program Details to make it wider
                  colSpan={groupIndex === 0 ? 3 : 1} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
