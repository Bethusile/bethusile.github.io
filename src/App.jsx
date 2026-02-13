import React from 'react';
import './App.css';         // global styles
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Rates from './components/Rates';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <Services id="services" />
      <Projects id="projects"/>
      <Rates id="rates"/>
      <About id="about" />
      <Contact id="contact"/>
    </div>
  );
}

export default App;
