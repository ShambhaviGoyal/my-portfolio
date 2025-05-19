import ProjectCard from "./ProjectCard";
import quizlogo from '../images/project-1.jpg'; 
import gameOfLifeLogo from '../images/project-2.jpg'; 
import recipeWebsite from '../images/project-3.jpg'; 


const projects = [
    {
      imgSrc: quizlogo,
      title: 'Quiz Website',
      tags: ['JS', 'HTML', 'CSS'],
      githubLink: 'https://github.com/ShambhaviGoyal/quiz-app',
      projectLink: 'https://shambhavigoyal-quizapp.netlify.app/'
    },
    {
      imgSrc: gameOfLifeLogo,
      title: "Alice's Game Of Life",
      tags: ['C++'],
      githubLink: 'https://github.com/WhiteWolf1603/alices-game-of-life/blob/main/README.md'
    },
    {
      imgSrc: recipeWebsite,
      title: 'Recipe Website',
      tags: ['JS', 'HTML', 'CSS'],
      githubLink: 'https://github.com/ShambhaviGoyal/recipeWebsite', 
      projectLink: 'https://sg-recipewebsite.netlify.app/'
    }
    
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

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{projects.map(({imgSrc, title, tags, githubLink, projectLink}, key)=>(
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
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