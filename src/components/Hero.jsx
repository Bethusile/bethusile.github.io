import React from 'react';
import '../App.css';
import africa1 from '../assets/images/africa1.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${africa1})` }}
    >
      <div className="hero-content">
        <p className="hero-eyebrow">· Digital Business Studio ·</p>
        <br />
        <h1>
          Websites and <span className="highlight">Custom </span>  software          
        </h1>
        <p className="hero-subtitle">We build websites, business applications and automation that help your team work more efficiently.</p>
        <br />
        <br />
        
        <div className="hero-buttons">
          <a href="/projects" className="btn btn-projects">
            Projects
          </a>
          <a href="#contact" className="btn btn-hire">
            Contact Us
          </a>
        </div>
        <br /><br /><br />
        <div className="scroll-down">
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;