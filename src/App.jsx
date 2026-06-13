import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Rates from './components/Rates';
import About from './components/About';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import BetanaProjects from './pages/BetanaProjects';

const Home = () => (
  <>
    <Hero />
    <Services id="services" />
    <Rates id="rates" />
    <About id="about" />
    <Contact id="contact" />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<BetanaProjects />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;