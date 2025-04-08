import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return(
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contact />
    </main>
    <Footer />
    
    </>
  )
}

export default App;