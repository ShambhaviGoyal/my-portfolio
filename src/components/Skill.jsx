import SkillCard from "./SkillCard";
import c from "../images/C.svg"; 
import csharp from "../images/csharp.png";
import java from "../images/java.svg"; 
import python from "../images/python.svg";
import javascript from "../images/javascript.svg"; 
import html from "../images/html.svg";
import kotlin from "../images/Kotlin.svg";
import androidStudio from "../images/AndroidStudio.svg";
import css from "../images/css.svg"; 
import mips from  "../images/mips.svg";
import vhdl from  "../images/vhdl.svg";
import react from "../images/react.svg";
import nodejs from "../images/nodejs.svg";
import expressjs from "../images/expressjs.svg";
import tailwindcss from "../images/tailwindcss.svg"; 
import bootstrap from  "../images/bootstrap.svg";
import mongodb from "../images/mongodb.svg"; 
import mysql from  "../images/mysql.svg";
import linux from "../images/linux.svg";
import windows from  "../images/windows.svg";
import vite from "../images/vite.svg"; 
import tensorflow from "../images/tensorflow.svg";
import flask from "../images/Flask.svg"; 
import django from "../images/Django.svg";
import postman from "../images/postman.svg"; 
import restapi from "../images/restapi.svg" ; 
import ml from "../images/machine-learning.svg"; 
import gitLogo from "../images/gitLogo.svg";
import npm from "../images/npm.svg"; 
import vscode from "../images/vscode.svg"; 
import intellij from "../images/intellij-idea.svg"; 

const skillGroups = [
  {
    category: "Languages",
    items: [
      {
        imgSrc: c,
        label: "C",
        desc: "Programming Language",
      },
      {
        imgSrc: csharp,
        label: "C#",
        desc: "Programming Language",
      },    
      {
        imgSrc: java,
        label: "Java",
        desc: "Programming Language",
      },
      {
        imgSrc: python,
        label: "Python",
        desc: "Programming Language",
      },
      {
        imgSrc: javascript,
        label: "JavaScript",
        desc: "Programming Language",
      },
      {
        imgSrc: html,
        label: "HTML",
        desc: "Markup Language",
      },
      {
        imgSrc: css,
        label: "CSS",
        desc: "Style Sheet Language"
      },
      {
        imgSrc: mips, 
        label: "MIPS",
        desc: "Assembly Language",
      },
      {
        imgSrc: vhdl, 
        label: "VHDL",
        desc: "Hardware Description Language",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        imgSrc: react,
        label: "React",
        desc: "JavaScript Library",
      },
      {
        imgSrc: expressjs,
        label: "Express.js",
        desc: "Node Framework",
      },
      {
        imgSrc: tailwindcss,
        label: "Tailwind CSS",
        desc: "CSS Framework",
      },
      {
        imgSrc: bootstrap,
        label: "Bootstrap",
        desc: "CSS Framework",
      },
      {
      imgSrc: tensorflow,
      label: "TensorFlow",
      desc: "Deep Learning Framework",
      },
      { 
      imgSrc: flask, 
      label: "Flask", 
      desc: "Python Framework"
      }, 
      { 
      imgSrc: django, 
      label: "Django", 
      desc: "Python Framework"
      }
    ],
  },
  {
    category: "Databases",
    items: [
      {
        imgSrc: mongodb,
        label: "MongoDB",
        desc: "NoSQL Database",
      },
      {
        imgSrc: mysql,
        label: "MySQL",
        desc: "Relational Database",
      },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { 
        imgSrc: gitLogo, 
        label: "Git", 
        desc: "Version Control" 
      },
      { 
        imgSrc: npm, 
        label: "npm", 
        desc: "Package Manager" 
      },
      {
        imgSrc: vite, 
        label: "Vite",
        desc: "Build Tool / Development Server",
      },
      { 
        imgSrc: postman, 
        label: "Postman", 
        desc: "API Testing Tool" 
      },
      { 
        imgSrc: vscode, 
        label: "VS Code", 
        desc: "IDE" 
      },
      { 
        imgSrc: intellij, 
        label: "IntelliJ IDEA", 
        desc: "IDE" 
      },
      
      { 
        imgSrc: restapi, 
        label: "REST API", 
        desc: "Web Service Architecture" 
      }
    ],
  },
  {
    category: "Runtime & OS",
    items: [
      {
        imgSrc: linux,
        label: "Linux",
        desc: "Operating System",
      },
      {
        imgSrc: windows,
        label: "Windows",
        desc: "Operating System",
      },
      {
        imgSrc: nodejs,
        label: "Node.js",
        desc: "JavaScript Runtime"
      },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      {
        imgSrc: kotlin,
        label: "Kotlin",
        desc: "Programming Language",
      },
      {
        imgSrc: androidStudio,
        label: "Android Studio",
        desc: "IDE",
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

        {skillGroups.map(({ category, items }, groupIndex) => {
          // Check if this is the Tools & Technologies group
          const isToolsTech = category === "Tools & Technologies";

          return (
            <div
              key={groupIndex}
              className={`${isToolsTech ? "mb-6" : "mb-10"} last:mb-0`}
            >
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
          );
        })}

      </div>
    </section>
  );
};

export default Skill;
