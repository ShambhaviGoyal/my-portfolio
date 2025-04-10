import ReactLenis from 'lenis/react'; 

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return(
    <ReactLenis root>
    <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
    </ReactLenis>
    
  )
}

export default App;