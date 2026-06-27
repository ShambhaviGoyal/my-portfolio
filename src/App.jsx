import ReactLenis from "lenis/react";

import AmbientBackground from "./components/AmbientBackground";
import LenisGsap from "./components/LenisGsap";
import ScrollProgress from "./components/ScrollProgress";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const App = () => {
  return (
    <ReactLenis root>
      <LenisGsap />
      <ScrollProgress />
      <AmbientBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Topbar />
        <main className="flex-1">
          <Hero />
          <Skill />
          <Education />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
