import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7)',
          transformOrigin: '0%',
          zIndex: 100,
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
