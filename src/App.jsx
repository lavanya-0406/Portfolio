import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="education">
        <Education />
      </section>

      <Footer />
    </div>
  );
}

export default App;
