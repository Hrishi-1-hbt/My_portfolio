import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Education from './components/Education/Education';
import Language from './components/language/Language';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,  
    });

    
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <main className='bg-[#0d182e]'>
      <Hero />
      <Skills />
      <Education />
      <Language />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
