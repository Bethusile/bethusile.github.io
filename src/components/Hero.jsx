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
          We Build <span className="highlight">Purposeful</span> Digital Products
        </h1>
        <br />
        <br />
        
        <div className="hero-buttons">
          <a href="/projects" className="btn btn-projects">
            Our Work
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