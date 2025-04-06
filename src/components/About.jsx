const aboutItems = [
    {
      label: 'Project done',
      number: 45
    },
    {
      label: 'Years of experience',
      number: 10
    }
];

const About = () => {
    return (
        <section id="about" className="section">

        <div className="container">
            <div className="">
                <p className="">
                Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>

                <div className="">
                    {
                        aboutItems.map(({labe, number}, key) => (
                            <div key={key}>
                                <div className="">
                                    <span className="">{number}</span>
                                    <span className="">+</span>
                                    </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
        </section>
    )
}

export default About 