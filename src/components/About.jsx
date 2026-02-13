import React from 'react';
import '../App.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid-system">
          <div className="info-item">
            <span className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <div className="info-content">
              <p className="info-label">Full Name</p>
              <p className="info-value">Bethusile Mafumana</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10L12 5l-10 5 10 5 10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <div className="info-content">
              <p className="info-label">Education</p>
              <p className="info-value">BSc Accounting & Computer Science</p>
            </div>
          </div>
        </div>

        <p className="about-description">
          I'm a junior developer with a background in accounting and computer science. 
          I enjoy turning ideas into functional, well-structured web applications. 
          My approach is simple — write clean code, solve real problems, and keep learning. 
          I'm looking for opportunities where I can grow as a developer while delivering value from day one.
        </p>

        <h3 className="strengths-title">Key Strengths</h3>
        <div className="about-grid-system">
          <ul className="strengths-list">
            <li>HTML, CSS & JavaScript</li>
            <li>Python & SQL</li>
            <li>Attention to detail</li>
          </ul>
          <ul className="strengths-list">
            <li>React & modern frameworks</li>
            <li>Problem-solving & logical thinking</li>
            <li>Self-motivated & quick learner</li>
          </ul>
        </div>

        {/* --- AVAILABILITY SECTION (Card Style) --- */}
        <h3 className="sub-header-pink">Availability</h3>
        <div className="availability-grid">
          <div className="availability-card">
            <i className="far fa-clock card-icon"></i>
            <h4>Working Hours</h4>
            <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
            <p className="sub-text">Weekends: Available on request</p>
          </div>
          <div className="availability-card">
            <i className="far fa-calendar-alt card-icon"></i>
            <h4>Engagement Type</h4>
            <p>Part-time, contract, or freelance</p>
            <p className="sub-text">Open to full-time junior / graduate roles</p>
          </div>
          <div className="availability-card">
            <i className="far fa-calendar-check card-icon"></i>
            <h4>Start Date</h4>
            <p>Available immediately</p>
            <p className="sub-text">Flexible for the right opportunity</p>
          </div>
        </div>

        {/* --- WORK LOCATION SECTION --- */}
        <h3 className="sub-header-pink">Work Location</h3>
        <div className="location-row">
          <div className="location-item">
            <i className="fas fa-desktop location-icon"></i>
            <div>
              <h5>Remote (Preferred)</h5>
              <p>Fully set up for remote work with reliable internet and a dedicated workspace.</p>
            </div>
          </div>
          <div className="location-item">
            <i className="fas fa-building location-icon"></i>
            <div>
              <h5>Hybrid / On-Site</h5>
              <p>Open to hybrid or on-site arrangements within South Africa.</p>
            </div>
          </div>
          <div className="location-item">
            <i className="fas fa-map-marker-alt location-icon"></i>
            <div>
              <h5>Based In</h5>
              <p>South Africa — willing to relocate for the right opportunity.</p>
            </div>
          </div>
        </div>

        {/* --- WHY HIRE ME SECTION (Checklist Style) --- */}
        <h3 className="sub-header-pink">Why Hire Me</h3>
        <div className="hire-me-list">
          <div className="hire-item">
            <i className="far fa-check-circle hire-icon"></i>
            <div>
              <strong>Strong Work Ethic</strong>
              <p>I take ownership of tasks and deliver quality work, even under pressure.</p>
            </div>
          </div>
          <div className="hire-item">
            <i className="far fa-check-circle hire-icon"></i>
            <div>
              <strong>Clear Communication</strong>
              <p>I keep clients informed, ask the right questions, and set honest expectations.</p>
            </div>
          </div>
          <div className="hire-item">
            <i className="far fa-check-circle hire-icon"></i>
            <div>
              <strong>Meets Deadlines</strong>
              <p>Reliable and punctual — I plan my work and deliver on time.</p>
            </div>
          </div>
          <div className="hire-item">
            <i className="far fa-check-circle hire-icon"></i>
            <div>
              <strong>Honest About Skill Level</strong>
              <p>I'm upfront about what I know and what I'm still learning. No overselling.</p>
            </div>
          </div>
          <div className="hire-item">
            <i className="far fa-check-circle hire-icon"></i>
            <div>
              <strong>Focused on Working Solutions</strong>
              <p>I prioritise code that works, is maintainable, and solves the actual problem.</p>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default About;