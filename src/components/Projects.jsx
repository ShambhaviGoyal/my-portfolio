import ProjectCard from "./ProjectCard";
import pintosLogo from "../images/pintos.png";
// import quizlogo from "../images/project-quiz.jpg";
import circuitLogo from "../images/Circuit.jpg";
// import recipeWebsite from "../images/project-recipe.jpg";
import taskManager from "../images/task-manager.jpg";
import syllabusCalendarLogo from "../images/syllabusCalendarLogo.jpg";
import crowdSenseLogo from "../images/CrowdSenseLogo.jpg";

const projects = [
  {
    imgSrc: crowdSenseLogo,
    title: "CrowdSense",
    desc: "A real-time mobile app that helps students instantly check how crowded different campus locations are. Using the Ultralytics YOLO model, it processes live CCTV feeds to detect occupancy across various spots on-campus. A FastAPI backend streams lightweight occupancy data over WebSockets, and the React Native app displays live crowd levels with interactive maps and dynamic cards. This project showcases real-time ML pipelines, server-client communication, and a smooth, student-friendly mobile experience.",
    tags: [
      "YOLO",
      "Ultralytics",
      "FastAPI",
      "WebSockets",
      "React Native",
      "Expo",
      "Machine Learning",
    ],
    githubLink: "https://github.com/HP-002/crowdsense.git",
    projectLink: "https://devpost.com/software/crowdsense-q9ariu",
  },
  {
    imgSrc: syllabusCalendarLogo,
    title: "Syllabus -> Calendar",
    desc: "A full-stack web app that converts school syllabi into interactive calendars using AI. Features intelligent PDF parsing, automated assignment extraction, and Google Calendar integration with OAuth 2.0. Users can upload PDFs, view color-coded events, export to ICS, and sync to Google Calendar. Demonstrates full-stack development, AI integration, and modern web technologies.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "OpenAI API",
      "Google Calendar API",
      "OAuth 2.0",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/ShambhaviGoyal/syllabus-calendar",
    projectLink: "https://syllabustocalendar-alpha.vercel.app/",
  },
  {
    imgSrc: circuitLogo,
    title: "Alice's Game Of Life",
    desc: "An automaton simulator based on Conway's Game of Life with a unique algorithmic twist. Built using C++ to operate an Arduino UNO R4 microcontroller, it stores and computes cell generations based on custom game logic. A physical circuit, built entirely from NPN transistors, interacts seamlessly with the software to process life-or-death states and display real-time results on an LED grid. This project showcases hardware-software integration, physical circuit design, and low-level system communication.",
    tags: ["C++", "Arduino UNO R4"],
    githubLink:
      "https://github.com/WhiteWolf1603/alices-game-of-life/blob/main/README.md",
  },
  {
    imgSrc: taskManager,
    title: "Task Manager App",
    desc: "A full-stack Task Manager app that lets users create, update, delete, and mark tasks as completed. It offers data persistence with MongoDB. Users can manage tasks easily with features like adding descriptions and marking completion.",
    tags: ["JS", "HTML", "CSS", "MongoDB", "REST API"],
    githubLink: "https://github.com/ShambhaviGoyal/task-manager",
    projectLink:
      "https://github.com/user-attachments/assets/541e43ac-3502-4bd2-a23b-d2e307a7fbb3",
  },
  {
    imgSrc: pintosLogo,
    title: "Pintos Operating System (Stanford)",
    desc: "Implemented the threading component of the OS kernel, including synchronization primitives and thread scheduling—notably the Multilevel Feedback Queue Scheduler (MLFQS). Built the system-call interface with argument validation, safe user-memory access, and kernel/user mode transitions; implemented system calls and process control logic.",
    tags: ["C", "Pintos", "Kernel", "Scheduling", "System calls", "Synchronization"],
    githubLink: "https://github.com/ShambhaviGoyal/Pintos",
  },
  // {
  //   imgSrc: recipeWebsite,
  //   title: "Recipe Website",
  //   desc: "A simple, responsive recipe app that helps users browse and search for dishes easily. It provides clear instructions and ingredient details for every recipe. Designed for seamless use on both desktop and mobile devices.",
  //   tags: ["JS", "HTML", "CSS"],
  //   githubLink: "https://github.com/ShambhaviGoyal/recipeWebsite",
  //   projectLink: "https://sg-recipewebsite.netlify.app/",
  // },
  // {
  //   imgSrc: quizlogo,
  //   title: "Quiz Website",
  //   desc: "A responsive web quiz app where users select a category and number of questions, answer timed questions, and get their score. It features responsive design for smooth use on both desktop and mobile.",
  //   tags: ["JS", "HTML", "CSS"],
  //   githubLink: "https://github.com/ShambhaviGoyal/quiz-app",
  //   projectLink: "https://shambhavigoyal-quizapp.netlify.app/",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <header className="mb-10 flex max-w-2xl flex-col gap-4 border-b border-zinc-200/90 pb-10 dark:border-zinc-800 lg:max-w-none lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-xl">
            <p className="section-eyebrow mb-3 reveal-up">Work</p>
            <h2 className="section-heading reveal-up">Projects built end-to-end.</h2>
          </div>
          <p className="section-lead-tight reveal-up lg:max-w-md lg:text-right">
            Selected builds from coursework, and side projects.
          </p>
        </header>

        <ol className="flex list-none flex-col gap-5 lg:gap-6">
          {projects.map(({ imgSrc, title, desc, tags, githubLink, projectLink }, index) => (
            <li key={title} className="reveal-up">
              <div className="flex gap-4 sm:gap-6">
                <span
                  className="type-nav-index hidden w-8 shrink-0 pt-1 text-right font-mono sm:block"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <ProjectCard
                    imgSrc={imgSrc}
                    title={title}
                    desc={desc}
                    tags={tags}
                    githubLink={githubLink}
                    projectLink={projectLink}
                    variant="list"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
