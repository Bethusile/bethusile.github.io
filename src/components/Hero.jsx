import React from 'react';
import '../App.css'; 
import africa1 from '../assets/images/africa1.jpg'; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{backgroundImage: `url(${africa1})` 
      }}
    >
      <div className="hero-content">
        <h1>
          Build Modern <span className="highlight">Web & Software</span> Solutions
        </h1>
        <br/>
        <p>
          I'm Bethusile, a freelance developer crafting responsive websites and software solutions
          that help businesses grow online.
        </p>
        <br/><br/>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-projects">
            View Projects
          </a>
          <a href="#contact" className="btn btn-hire">
            Hire Me
          </a>
        </div>
        <br/><br/><br/>
        <div className="scroll-down">
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;