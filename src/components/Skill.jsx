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
import flask from "../images/Flask.svg";
import django from "../images/Django.svg";
import tensorflow from "../images/tensorflow.svg";
import pytorch from "../images/pytorch.svg";
import socketIo from "../images/socket-io.svg";
import mongodb from "../images/mongodb.svg";
import mysql from "../images/mysql.svg";
import postgres from "../images/postgresql.svg";
import gitLogo from "../images/gitLogo.svg";
import docker from "../images/docker.svg";
import kubernetes from "../images/kubernetes.svg";
import aws from "../images/aws.svg";

const capabilities = [
  {
    title: "Backend & Systems",
    description:
      "Building reliable, performant server-side applications with real-time capabilities.",
    points: [
      "REST APIs and WebSocket services with Node.js, Express, Flask, and Django",
      "Database design and optimization with PostgreSQL, MySQL, and MongoDB",
      "OS-level programming in C — threading, scheduling, and system calls",
    ],
  },
  {
    title: "Frontend & Mobile",
    description:
      "Creating responsive interfaces and cross-platform mobile apps.",
    points: [
      "Web apps with React, Next.js, and Tailwind CSS",
      "Cross-platform mobile development with React Native and Expo",
      "Component-driven design with attention to performance and accessibility",
    ],
  },
  {
    title: "ML & Infrastructure",
    description:
      "Deploying models and managing cloud infrastructure.",
    points: [
      "Computer vision pipelines with TensorFlow, PyTorch, and OpenCV",
      "Containerization and orchestration with Docker and Kubernetes",
      "CI/CD with GitHub Actions, deployment to AWS",
    ],
  },
];

const techIcons = [
  { src: python, label: "Python" },
  { src: javascript, label: "JavaScript" },
  { src: typescript, label: "TypeScript" },
  { src: java, label: "Java" },
  { src: c, label: "C" },
  { src: cpp, label: "C++" },
  { src: golang, label: "Go" },
  { src: kotlin, label: "Kotlin" },
  { src: html, label: "HTML/CSS" },
  { src: react, label: "React" },
  { src: nodejs, label: "Node.js" },
  { src: expressjs, label: "Express" },
  { src: flask, label: "Flask" },
  { src: django, label: "Django" },
  { src: tensorflow, label: "TensorFlow" },
  { src: pytorch, label: "PyTorch" },
  { src: socketIo, label: "Socket.IO" },
  { src: postgres, label: "PostgreSQL" },
  { src: mysql, label: "MySQL" },
  { src: mongodb, label: "MongoDB" },
  { src: gitLogo, label: "Git" },
  { src: docker, label: "Docker" },
  { src: kubernetes, label: "K8s" },
  { src: aws, label: "AWS" },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-zinc-50">
          What I Work With
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted dark:text-zinc-400">
          Areas I focus on and the tools I use day to day.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {capabilities.map(({ title, description, points }) => (
            <div
              key={title}
              className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-navy dark:text-zinc-50">
                {title}
              </h3>
              <p className="mt-2 text-[15px] text-muted dark:text-zinc-400">
                {description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="text-[15px] leading-relaxed text-navy/80 dark:text-zinc-400"
                  >
                    <span className="mr-2 text-accent">&#8226;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-muted/70 dark:text-zinc-500">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {techIcons.map(({ src, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-[15px] text-navy/70 dark:text-zinc-400"
                title={label}
              >
                <img src={src} width={20} height={20} alt="" className="opacity-80" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
