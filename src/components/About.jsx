import logo from '../images/logo.svg'; 

const aboutItems = [
    {
      label: 'Project done',
      number: 10
    },
    {
      label: 'Years of experience',
      number: 5
    }
];

const About = () => {
    return (
        <section id="about" className="section">

        <div className="container max-w-xl mx-auto">

       <div className="bg-zinc-800/50 p-4 rounded-2xl md:p-4 reveal-up">               
                <p className="text-zinc-400 mb-2 md:mb-4 md:text-base max-w-[100ch]">
                Hi! I'm Shambhavi Goyal, a Computer Science student skilled in Python, Java, C, and JavaScript. I enjoy building full-stack applications using tools like React, Node.js, and Tailwind CSS. My curiosity has also led me to explore machine learning and low-level languages, giving me a deeper understanding of how things work behind the scenes.</p>
                <p className="text-zinc-400 mb-2 md:mb-4 md:text-base max-w-[100ch]">
                I've worked as a TA, Math Tutor, and Resident Assistant, experiences that have strengthened my leadership, communication, and problem-solving skills. I thrive in collaborative environments, love learning new tools, and aim to make a meaningful impact wherever I go, whether it’s in code, classrooms, or communities.
                </p>
                
                {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>  

                            </div>
                        ))
                    }

                    <img src={logo} alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />

                </div> */}
            </div>
        </div>
        </section>
    )
}

export default About 