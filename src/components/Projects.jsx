import ProjectCard from "./ProjectCard";
import pintosLogo from "../images/pintos.png";
import circuitLogo from "../images/Circuit.jpg";
import taskManager from "../images/task-manager.jpg";
import syllabusCalendarLogo from "../images/syllabusCalendarLogo.jpg";
import crowdSenseLogo from "../images/CrowdSenseLogo.jpg";
import drowsinessDetector from "../images/drowsiness-detector.png";
import settleUp from "../images/settle-up.jpg";

const projects = [
  {
    imgSrc: drowsinessDetector,
    title: "Driver Assistance System",
    desc: "Real-time drowsiness and distraction detection using a custom CNN and MediaPipe's 3D facial geometry. Features a dynamic focus score and audio alarm.",
    tags: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
    githubLink: "https://github.com/ShambhaviGoyal/Driver-Assistance-System.git",
  },
  {
    imgSrc: settleUp,
    title: "Settle Up",
    desc: "Expense-splitting app with React Native, Node.js/Express, and PostgreSQL. JWT auth, real-time balances, and receipt parsing via OpenAI Vision.",
    tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/ShambhaviGoyal/settle-up",
  },
  {
    imgSrc: crowdSenseLogo,
    title: "CrowdSense",
    desc: "Campus crowd tracking using YOLO for live CCTV occupancy detection, FastAPI streaming over WebSockets, and a React Native mobile app.",
    tags: ["YOLO", "FastAPI", "WebSockets", "React Native"],
    githubLink: "https://github.com/HP-002/crowdsense.git",
    projectLink: "https://devpost.com/software/crowdsense-q9ariu",
  },
  {
    imgSrc: syllabusCalendarLogo,
    title: "Syllabus \u2192 Calendar",
    desc: "AI-powered web app that converts syllabi into interactive calendars with Google Calendar sync and OAuth 2.0.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Google Calendar"],
    githubLink: "https://github.com/ShambhaviGoyal/syllabus-calendar",
    projectLink: "https://syllabustocalendar-alpha.vercel.app/",
  },
  {
    imgSrc: circuitLogo,
    title: "Alice\u2019s Game Of Life",
    desc: "Conway\u2019s Game of Life on hardware. C++ drives an Arduino UNO R4 with a physical NPN transistor circuit and LED grid output.",
    tags: ["C++", "Arduino", "Circuit Design"],
    githubLink: "https://github.com/WhiteWolf1603/alices-game-of-life/blob/main/README.md",
  },
  {
    imgSrc: taskManager,
    title: "Task Manager",
    desc: "Full-stack CRUD app with completion tracking and MongoDB persistence through a REST API.",
    tags: ["JavaScript", "MongoDB", "REST API"],
    githubLink: "https://github.com/ShambhaviGoyal/task-manager",
    projectLink: "https://github.com/user-attachments/assets/541e43ac-3502-4bd2-a23b-d2e307a7fbb3",
  },
  {
    imgSrc: pintosLogo,
    title: "Pintos OS",
    desc: "OS kernel threading, synchronization primitives, MLFQS scheduler, and system-call interface with safe user-memory access.",
    tags: ["C", "Pintos", "Kernel"],
    githubLink: "https://github.com/ShambhaviGoyal/Pintos",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-zinc-50">
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-lg text-muted dark:text-zinc-400">
          Things I&apos;ve built from coursework, hackathons, and on my own time.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ imgSrc, title, desc, tags, githubLink, projectLink }) => (
            <ProjectCard
              key={title}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              tags={tags}
              githubLink={githubLink}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
