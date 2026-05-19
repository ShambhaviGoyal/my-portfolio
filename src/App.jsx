import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AmbientBackground from "./components/AmbientBackground";
import LenisGsap from './components/LenisGsap';
import ScrollProgress from './components/ScrollProgress';
import SideNav from './components/SideNav';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SIDEBAR_STORAGE_KEY = "portfolio-sidebar-open";

function readSidebarOpen() {
  if (typeof window === "undefined") return true;
  try {
    const v = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (v === null) return true;
    return v !== "0";
  } catch {
    return true;
  }
}

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(readSidebarOpen);

  useEffect(() => {
    try {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, sidebarOpen ? "1" : "0");
    } catch {
      /* ignore */
    }
    const id = window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
    return () => window.cancelAnimationFrame(id);
  }, [sidebarOpen]);

  return (
    <ReactLenis root>
      <LenisGsap />
      <ScrollProgress />
      <AmbientBackground />
      <div className="relative z-10 min-h-screen">
        <SideNav open={sidebarOpen} onOpenChange={setSidebarOpen} />
        <MobileNav />
        <div
          className={
            "layout-shell transition-[padding] duration-300 ease-out " +
            (sidebarOpen ? "lg:pl-[280px]" : "lg:pl-0")
          }
        >
          <main className="layout-main">
            <Hero />
            <Skill />
            <Education />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
