import { ButtonPrimary } from "./Button.jsx";
import smallPFP from '../images/mySmallLogo.jpg';
import bigPFP from "../images/myProfilePicture.jpeg";
import resume from "../images/resume.pdf";

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">

            {/* Grid container for name + photo */}
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                {/* Left column */}
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src={smallPFP}
                                width={40}
                                height={40}
                                alt="Shambhavi Goyal portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-300 text-large tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Looking for Internships
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-4">
                        Shambhavi Goyal
                    </h2>
                    <h4 className="headline-2 max-w-full mb-3">
                        CSE @ University at Buffalo
                    </h4>
                    <h6 className="lg:text-base text-zinc-400 max-w-full mb-6 font-bold">
                        A full-stack developer looking for summer internships
                    </h6>

                    <div className="flex items-center gap-3 mb-8">
                        <ButtonPrimary label="Download Resume" icon="download" href={resume} target="_blank" />
                    </div>
                </div>

                {/* Right column */}
                <div className="hidden lg:flex flex-col items-start self-start ml-auto">
                    <figure className="w-[300px] h-[300px] relative rounded-full p-1 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-500">
                        <img
                            src={bigPFP}
                            alt="Shambhavi Goyal"
                            className="w-full h-full object-cover object-top rounded-full"
                        />
                    </figure>
                </div>
            </div>

            <div className="w-full mt-10">
  <div className="bg-zinc-800/50 p-6 rounded-2xl max-w-6xl mx-auto">
    <p className="text-zinc-400 mb-4">
      I'm a Computer Science student skilled in Python, Java, C, and JavaScript. I enjoy building full-stack applications using tools like React, Node.js, and Tailwind CSS. My curiosity has also led me to explore machine learning and low-level languages, giving me a deeper understanding of how things work behind the scenes.
    </p>
    <p className="text-zinc-400 mb-4">
      I've worked as a TA, Math Tutor, and Resident Assistant, experiences that have strengthened my leadership, communication, and problem-solving skills. I thrive in collaborative environments, love learning new tools, and aim to make a meaningful impact wherever I go, whether it’s in code, classrooms, or communities.
    </p>
    <p className="text-zinc-400 mb-4">
       Outside of coding, I enjoy brainstorming new project ideas, exploring design tools, and learning through hands-on building.I'm currently seeking internship opportunities where I can grow as a developer, collaborate with great teams, and contribute to impactful projects.
    </p>
  </div>
</div>



        </section>
    );
};

export default Hero;
