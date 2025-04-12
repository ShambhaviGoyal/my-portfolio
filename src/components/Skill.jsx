import SkillCard from "./SkillCard";

const skillGroups = [
  {
    category: "Programming Languages",
    items: [
      {
        imgSrc: "images/C_Programming_Language.svg",
        label: "C",
        desc: "Programming Language",
      },
      {
        imgSrc: "images/java-4-logo-svgrepo-com.svg",
        label: "Java",
        desc: "Programming Language",
      },
      {
        imgSrc: "images/python-svgrepo-com.svg",
        label: "Python",
        desc: "Programming Language",
      },
      {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interaction",
      },
      {
        imgSrc: "/images/html5-01-svgrepo-com.svg",
        label: "HTML",
        desc: "Markup Language",
      },
      {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
      },
      {
        imgSrc: "images/mips.svg", 
        label: "MIPS",
        desc: "Assembly Language",
      },
      {
        imgSrc: "images/vhdl-svgrepo-com.svg",
        label: "VHDL",
        desc: "Hardware Description Language",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "JavaScript Library",
      },
      {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "Web Server",
      },
      {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Node Framework",
      },
      {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "UI Framework",
      },
      {
        imgSrc: "images/bootstrap-svgrepo-com.svg",
        label: "Bootstrap",
        desc: "CSS Framework",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "NoSQL Database",
      },
      {
        imgSrc: "images/mysql-logo-svgrepo-com.svg",
        label: "MySQL",
        desc: "Relational Database",
      },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      {
        imgSrc: "images/linux-svgrepo-com.svg",
        label: "Linux",
        desc: "Operating System",
      },
      {
        imgSrc: "images/windows-applications-svgrepo-com.svg",
        label: "Windows",
        desc: "Operating System",
      },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        {skillGroups.map(({ category, items }, groupIndex) => (
          <div key={groupIndex} className="mb-10">
            <h3 className="text-lg font-semibold text-zinc-300 mb-4">{category}</h3>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {items.map(({ imgSrc, label, desc }, itemIndex) => (
                <SkillCard
                  key={`${groupIndex}-${itemIndex}`}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
