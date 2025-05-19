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

        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Shambhavi, a passionate full stack developer who brings ideas to life through clean code and thoughtful design. From building intuitive user interfaces to developing powerful backend systems, I specialize in creating end-to-end web solutions that are scalable, secure, and beautifully crafted. Let’s turn your vision into a seamless digital experience.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
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

                </div>
            </div>
        </div>
        </section>
    )
}

export default About 