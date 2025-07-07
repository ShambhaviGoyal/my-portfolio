import ProjectCard from "./ProjectCard";
import quizlogo from '../images/project-quiz.jpg'; 
import gameOfLifeLogo from '../images/project-gameOfLife.jpg'; 
import recipeWebsite from '../images/project-recipe.jpg'; 
import taskManager from '../images/task-manager.jpg'; 
import ChatApplication from "../images/chat-app.jpg"

const projects = [
    {
      imgSrc: quizlogo,
      title: 'Quiz Website',
      desc: 'A responsive web quiz app where users select a category and number of questions, answer timed questions, and get their score. It features responsive design for smooth use on both desktop and mobile.', 
      tags: ['JS', 'HTML', 'CSS'],
      githubLink: 'https://github.com/ShambhaviGoyal/quiz-app',
      projectLink: 'https://shambhavigoyal-quizapp.netlify.app/'
    },
    {
      imgSrc: gameOfLifeLogo,
      title: "Alice's Game Of Life",
      desc: 'Automaton Simulator based on Conway\'s Game of Life. It is built using C++ to operate an Arduino UNO R4 Microcontroller and a logical circuit built using NPN transistors and diodes.', 
      tags: ['C++', 'Arduino UNO R4'],
      githubLink: 'https://github.com/WhiteWolf1603/alices-game-of-life/blob/main/README.md'
    },
    {
      imgSrc: recipeWebsite,
      title: 'Recipe Website',
      desc: 'A simple, responsive recipe app that helps users browse and search for dishes easily. It provides clear instructions and ingredient details for every recipe. Designed for seamless use on both desktop and mobile devices.', 
      tags: ['JS', 'HTML', 'CSS'],
      githubLink: 'https://github.com/ShambhaviGoyal/recipeWebsite', 
      projectLink: 'https://sg-recipewebsite.netlify.app/'
    }, 
    {
      imgSrc: taskManager,
      title: 'Task Manager App',
      desc: 'A full-stack Task Manager app that lets users create, update, delete, and mark tasks as completed. It offers data persistence with MongoDB. Users can manage tasks easily with features like adding descriptions and marking completion.', 
      tags: ['JS', 'HTML', 'CSS', 'MongoDB', 'REST API'],
      githubLink: 'https://github.com/ShambhaviGoyal/task-manager',
      projectLink: 'https://i.imgur.com/QGAPprG.mp4'
    },
    {
      imgSrc: ChatApplication,
      title: 'Live Chat Room',
      desc: 'A real-time chat app featuring multiple themed rooms, secure user authentication, private messaging, emoji reactions, and typing indicators. It supports light and dark themes and stores chat history with SQLite. This project showcases my skills in full-stack development, real-time communication, and building secure, user-friendly web applications.', 
      tags: ['Python', 'Flask', 'Socket.IO', 'SQLite'],
      githubLink: 'https://github.com/ShambhaviGoyal/Chat-Application',
      projectLink: 'https://i.imgur.com/YUUgBOi.mp4'
    },
];


const Projects= () => {
    return(
        <section
        id="projects"
        className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio higlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{projects.map(({imgSrc, title, desc, tags, githubLink, projectLink}, key)=>(
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                desc={desc} 
                tags={tags}
                githubLink={githubLink}
                projectLink={projectLink}
                classes="reveal-up"
                />
            ))}
            </div>
        </div>
        </section>
    )
}
export default Projects;