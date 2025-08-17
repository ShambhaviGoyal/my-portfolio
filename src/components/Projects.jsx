import ProjectCard from "./ProjectCard";
import quizlogo from '../images/project-quiz.jpg'; 
import gameOfLifeLogo from '../images/project-gameOfLife.jpg'; 
import recipeWebsite from '../images/project-recipe.jpg'; 
import taskManager from '../images/task-manager.jpg'; 
import ChatApplication from "../images/chat-app.jpg"
import stockdashboard from "../images/stockdashboard.jpg"
import cineverse from "../images/cineverse.jpg"
import breastcancermodel from "../images/breastcancermodel.jpg"
import syllabusCalendarLogo from "../images/syllabusCalendarLogo.jpg"


const projects = [

      {
      imgSrc: syllabusCalendarLogo,
      title: 'Syllabus -> Calendar',
      desc: 'A full-stack web app that converts school syllabi into interactive calendars using AI. Features intelligent PDF parsing, automated assignment extraction, and Google Calendar integration with OAuth 2.0. Users can upload PDFs, view color-coded events, export to ICS, and sync to Google Calendar. Demonstrates full-stack development, AI integration, and modern web technologies.',
      tags: ['Next.js 14', 'TypeScript', 'OpenAI API', 'Google Calendar API', 'OAuth 2.0', 'Tailwind CSS'],
      githubLink: 'https://github.com/ShambhaviGoyal/syllabus-calendar',
      projectLink: 'https://syllabustocalendar-alpha.vercel.app/'
    }, 
    {
      imgSrc: ChatApplication,
      title: 'Live Chat Room',
      desc: 'A real-time chat app featuring multiple themed rooms, secure user authentication, private messaging, emoji reactions, and typing indicators. It supports light and dark themes and stores chat history with SQLite. This project showcases my skills in full-stack development, real-time communication, and building secure, user-friendly web applications.', 
      tags: ['Python', 'Flask', 'Socket.IO', 'SQLite'],
      githubLink: 'https://github.com/ShambhaviGoyal/Chat-Application',
      projectLink: 'https://github.com/user-attachments/assets/863874b4-d5bd-4bfe-b2fe-c4f34c643ed7'
    },
    {
      imgSrc: cineverse,
      title: 'Cineverse',
      desc: 'An Android app built with Kotlin that lets users browse and explore movies, TV shows, and actors using the TMDb API. It features a modern Material Design UI, responsive RecyclerView for movie browsing, dynamic search, detailed movie dialogs, and seamless light/dark theme support.', 
      tags: ['Kotlin', 'Android', 'TMDb API', 'RecyclerView', 'Material Design'],
      githubLink: 'https://github.com/ShambhaviGoyal/cineverse',
      projectLink: 'https://github.com/ShambhaviGoyal/cineverse/blob/main/cineverse_demo.gif' 
    }, 
    {
      imgSrc: gameOfLifeLogo,
      title: "Alice's Game Of Life",
      desc: 'Automaton Simulator based on Conway\'s Game of Life. It is built using C++ to operate an Arduino UNO R4 Microcontroller and a logical circuit built using NPN transistors and diodes.', 
      tags: ['C++', 'Arduino UNO R4'],
      githubLink: 'https://github.com/WhiteWolf1603/alices-game-of-life/blob/main/README.md'
    },
    {
      imgSrc: taskManager,
      title: 'Task Manager App',
      desc: 'A full-stack Task Manager app that lets users create, update, delete, and mark tasks as completed. It offers data persistence with MongoDB. Users can manage tasks easily with features like adding descriptions and marking completion.', 
      tags: ['JS', 'HTML', 'CSS', 'MongoDB', 'REST API'],
      githubLink: 'https://github.com/ShambhaviGoyal/task-manager',
      projectLink: 'https://github.com/user-attachments/assets/541e43ac-3502-4bd2-a23b-d2e307a7fbb3'
    },
    {
      imgSrc: stockdashboard,
      title: 'Stock Dashboard',
      desc: 'A sleek, responsive dashboard that delivers real-time stock market insights using the Finnhub API. Users can explore live prices through clean table layouts or interactive charts, with features like search, sorting, performance comparison, and a mobile-friendly design.', 
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      githubLink: 'https://github.com/ShambhaviGoyal/stock-dashboard',
      projectLink: 'https://stock-dashboard-rouge.vercel.app/'
    },
    {
      imgSrc: breastcancermodel,
      title: 'Breast Cancer Diagnosis',
      desc: 'A machine learning project that predicts whether a tumor is malignant or benign using the UCI Breast Cancer dataset. Built and evaluated models including Logistic Regression, KNN, SVM, and Random Forest, achieving over 90% accuracy. Random Forest outperformed baseline models, highlighting the importance of feature selection and normalization in medical diagnostics.', 
      tags: ['Python', 'Scikit-learn', 'Machine Learning', 'EDA'],
      githubLink: 'https://github.com/ShambhaviGoyal/Breast-Cancer-ML-Detection-model',
      projectLink: 'https://github.com/user-attachments/assets/03792c2a-300e-4d7f-a03c-0628e11fdbf4'
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
      imgSrc: quizlogo,
      title: 'Quiz Website',
      desc: 'A responsive web quiz app where users select a category and number of questions, answer timed questions, and get their score. It features responsive design for smooth use on both desktop and mobile.', 
      tags: ['JS', 'HTML', 'CSS'],
      githubLink: 'https://github.com/ShambhaviGoyal/quiz-app',
      projectLink: 'https://shambhavigoyal-quizapp.netlify.app/'
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