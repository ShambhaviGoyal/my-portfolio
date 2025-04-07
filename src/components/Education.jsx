import EducationCard from "./EducationCard";

const educationGroups = [
  {
    category: "Program Details",
    items: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University at Buffalo",
        graduating: "2023-2027",
        logo: "images/ublogo (1).png",
      },
    ],
  },
  {
    category: "Relevant Coursework",
    items: [
      { course: "Python Programming" },
      { course: "Object Oriented Programming" },
      { course: "Systems Programming" },
      { course: "Data Structures & Algorithms" },
      { course: "Computer Architecture" },
      { course: "Algorithms & Complexity" },
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="headline-2">Education</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        Below are my academic details along with relevant coursework I’ve completed. I’m always eager to learn and continuously expand my knowledge in the field of computer science.
        </p>m

        {educationGroups.map(({ category, items }, groupIndex) => (
          <div key={groupIndex} className="mb-10">
            <h3 className="text-lg font-semibold text-zinc-300 mb-4">{category}</h3>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {items.map((item, itemIndex) => (
                <EducationCard key={`${groupIndex}-${itemIndex}`} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
