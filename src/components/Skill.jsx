import c from "../images/C.svg";
import cpp from "../images/cpp.svg";
import java from "../images/java.svg";
import python from "../images/python.svg";
import javascript from "../images/javascript.svg";
import typescript from "../images/typescript.svg";
import golang from "../images/golang.svg";
import html from "../images/html.svg";
import kotlin from "../images/Kotlin.svg";

import react from "../images/react.svg";
import nodejs from "../images/nodejs.svg";
import expressjs from "../images/expressjs.svg";
import bootstrap from "../images/bootstrap.svg";
import flask from "../images/Flask.svg";
import django from "../images/Django.svg";
import tensorflow from "../images/tensorflow.svg";
import pytorch from "../images/pytorch.svg";

import mongodb from "../images/mongodb.svg";
import mysql from "../images/mysql.svg";
import postgres from "../images/postgresql.svg";

import gitLogo from "../images/gitLogo.svg";
import docker from "../images/docker.svg";
import restApi from "../images/restapi.svg";
import websockets from "../images/websockets.svg";

import windows from "../images/windows.svg";
import linux from "../images/linux.svg";
import macos from "../images/macos.svg";

const skillGroups = [
  {
    category: "Programming Languages",
    items: [
      { imgSrc: c, label: "C" },
      { imgSrc: cpp, label: "C++" },
      { imgSrc: java, label: "Java" },
      { imgSrc: python, label: "Python" },
      { imgSrc: javascript, label: "JavaScript" },
      { imgSrc: typescript, label: "TypeScript" },
      { imgSrc: golang, label: "Go" },
      { imgSrc: html, label: "HTML/CSS" },
      { imgSrc: kotlin, label: "Kotlin" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { imgSrc: react, label: "React" },
      { imgSrc: nodejs, label: "Node.js" },
      { imgSrc: expressjs, label: "Express" },
      { imgSrc: bootstrap, label: "Bootstrap" },
      { imgSrc: flask, label: "Flask" },
      { imgSrc: django, label: "Django" },
      { imgSrc: tensorflow, label: "TensorFlow" },
      { imgSrc: pytorch, label: "PyTorch" },
    ],
  },
  {
    category: "Databases",
    items: [
      { imgSrc: postgres, label: "PostgreSQL" },
      { imgSrc: mysql, label: "MySQL" },
      { imgSrc: mongodb, label: "MongoDB" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { imgSrc: gitLogo, label: "Git" },
      { imgSrc: docker, label: "Docker" },
      { imgSrc: restApi, label: "REST APIs" },
      { imgSrc: websockets, label: "WebSockets" },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      { imgSrc: windows, label: "Windows" },
      { imgSrc: linux, label: "Linux" },
      { imgSrc: macos, label: "macOS" },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <header className="section-header">
          <p className="eyebrow reveal-up mb-2">Toolkit</p>
          <h2 className="heading reveal-up">Tools &amp; technologies.</h2>
        </header>

        <div className="card reveal-up divide-y divide-theme-border dark:divide-themeDark-border">
          {skillGroups.map(({ category, items }) => (
            <div
              key={category}
              className="flex flex-col gap-2.5 px-5 py-3 sm:flex-row sm:items-start sm:gap-5 sm:px-6 sm:py-3.5"
            >
              <h3 className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-theme-muted dark:text-themeDark-muted sm:w-44 lg:w-52">
                {category}
              </h3>

              <div className="flex min-w-0 flex-1 flex-wrap gap-2">
                {items.map(({ imgSrc, label }) => (
                  <div
                    key={label}
                    className="group inline-flex items-center gap-1.5 rounded-md border border-theme-border bg-theme-bg px-2 py-1 text-[13px] font-medium text-theme-text transition-colors hover:border-theme-text/20 dark:border-themeDark-border dark:bg-themeDark-bg dark:text-themeDark-text dark:hover:border-themeDark-text/30"
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      className="h-3.5 w-3.5 shrink-0 object-contain"
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

