import ProjectCard from "./ProjectCard";

// Images kept on each project for a possible future image/detail view.
import pintosLogo from "../images/pintos.png";
import circuitLogo from "../images/Circuit.jpg";
import taskManager from "../images/task-manager.jpg";
import syllabusCalendarLogo from "../images/syllabusCalendarLogo.jpg";
import crowdSenseLogo from "../images/crowdsense-mockup.png";
import drowsinessDetector from "../images/driver-assistance.png";
import settleUp from "../images/settle-up.jpg";

const projects = [
  {
    imgSrc: drowsinessDetector,
    title: "Driver Assistance System",
    desc: "It monitors real-time driver behavior to prevent accidents. Using a custom-trained Convolutional Neural Network (CNN) alongside MediaPipe's 3D facial geometry mapping, it processes live webcam feeds to detect drowsiness, distraction, and yawning. It features dynamic 'Driver Focus Score' analytics and an integrated audio alarm system.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "MediaPipe"],
    githubLink: "https://github.com/ShambhaviGoyal/Driver-Assistance-System.git",
  },
  {
    imgSrc: settleUp,
    title: "Settle Up",
    desc: "A full-stack expense-splitting app for roommates, trips, and groups. It supports equal/custom/itemized splits, real-time balance tracking, and simplified settlement suggestions. Receipt photos are parsed with OpenAI Vision for automated expense entry; users can track budgets, recurring bills, and group invitations.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI",
      "JWT",
    ],
    githubLink: "https://github.com/ShambhaviGoyal/settle-up",
  },
  {
    imgSrc: crowdSenseLogo,
    title: "CrowdSense",
    desc: "A real-time mobile app that helps students instantly check how crowded different campus locations are. Using the Ultralytics YOLO model, it processes live CCTV feeds to detect occupancy across various spots on-campus. A FastAPI backend streams lightweight occupancy data over WebSockets, and the React Native app displays live crowd levels with interactive maps and dynamic cards.",
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
    title: "Syllabus → Calendar",
    desc: "A full-stack web app that populates school syllabi into students' personal calendars using AI. Features intelligent PDF parsing, automated assignment extraction, and Google Calendar integration with OAuth 2.0. Users can upload PDFs, view events, export to ICS, and sync to Google Calendar.",
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
    desc: "An automaton simulator based on Conway's Game of Life with a unique algorithmic twist. Built using C++ to operate an Arduino UNO R4 microcontroller, it stores and computes cell generations based on custom game logic. A physical circuit, built entirely from NPN transistors, interacts seamlessly with the software to process states and display real-time results on an LED grid.",
    tags: ["C++", "Arduino UNO R4"],
    githubLink:
      "https://github.com/WhiteWolf1603/alices-game-of-life/blob/main/README.md",
  },
  {
    imgSrc: taskManager,
    title: "Task Manager App",
    desc: "A full-stack Task Manager app that allows users to easily manage their daily tasks. It features full CRUD capabilities, letting users create, update, delete, and mark tasks as completed, with a responsive interface designed for daily productivity.",
    tags: ["JS", "HTML", "CSS", "MongoDB", "REST API"],
    githubLink: "https://github.com/ShambhaviGoyal/task-manager",
    projectLink:
      "https://github.com/user-attachments/assets/541e43ac-3502-4bd2-a23b-d2e307a7fbb3",
  },
  {
    imgSrc: pintosLogo,
    title: "Pintos Operating System",
    desc: "Implemented the threading component of the OS kernel, including synchronization primitives, thread scheduling, and the Multilevel Feedback Queue Scheduler. Built the system-call interface with argument validation, safe user-memory access, and kernel/user mode transitions.",
    tags: ["C", "Pintos", "Kernel", "Scheduling", "System calls", "Synchronization"],
    githubLink: "https://github.com/ShambhaviGoyal/Pintos",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <header className="section-header">
          <p className="eyebrow reveal-up mb-2">Projects</p>
          <h2 className="heading reveal-up">Things I&apos;ve built.</h2>
        </header>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-4">
          {projects.map(({ imgSrc, title, desc, tags, githubLink, projectLink }) => (
            <div key={title} className="reveal-up">
              <ProjectCard
                imgSrc={imgSrc}
                title={title}
                desc={desc}
                tags={tags}
                githubLink={githubLink}
                projectLink={projectLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
