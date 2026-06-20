import ReactLenis from "lenis/react";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Skill />
          <Education />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
