import React from 'react';
import '../App.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        {/* Core Info Grid */}
        <div className="about-grid-system">
          <div className="info-item">
            <span className="info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <div className="info-content">
              <p className="info-label">Full Name</p>
              <p className="info-value">Bethusile Mafumana</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10L12 5l-10 5 10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <div className="info-content">
              <p className="info-label">Education</p>
              <p className="info-value">BCom Hons CS & IS, BCom Accounting</p>
            </div>
          </div>
        </div>

        <p className="about-description">
          Junior developer with a background in accounting and computer science. 
          I enjoy turning ideas into functional, well-structured web applications 
          while writing clean code and solving real problems.
        </p>

        {/* Availability Section */}
        <h3 className="sub-header-pink">Availability</h3>
        <div className="availability-grid">
          <div className="availability-card">
            <div className="card-header">
              <i className="far fa-clock card-icon"></i>
              <h4>Working Hours</h4>
            </div>
            <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
            <p className="sub-text">Weekends: Available on request</p>
          </div>
          <div className="availability-card">
            <div className="card-header">
              <i className="far fa-calendar-alt card-icon"></i>
              <h4>Engagement Type</h4>
            </div>
            <p>Part-time, contract, or freelance</p>
            <p className="sub-text">Open to full-time junior roles</p>
          </div>
          <div className="availability-card">
            <div className="card-header">
              <i className="far fa-calendar-check card-icon"></i>
              <h4>Start Date</h4>
            </div>
            <p>Available immediately</p>
            <p className="sub-text">Flexible for the right role</p>
          </div>
        </div>

        {/* Work Location */}
        <h3 className="sub-header-pink">Work Location</h3>
        <div className="location-grid">
          <div className="location-item">
            <i className="fas fa-desktop location-icon"></i>
            <div className="location-text">
              <h5>Remote (Preferred)</h5>
              <p>Fully set up for remote work with dedicated workspace.</p>
            </div>
          </div>
          <div className="location-item">
            <i className="fas fa-building location-icon"></i>
            <div className="location-text">
              <h5>Hybrid / On-Site</h5>
              <p>Open to arrangements within South Africa.</p>
            </div>
          </div>
          <div className="location-item">
            <i className="fas fa-map-marker-alt location-icon"></i>
            <div className="location-text">
              <h5>Based In</h5>
              <p>South Africa — willing to relocate for the right role.</p>
            </div>
          </div>
        </div>

        {/* Why Hire Me Checklist */}
        <h3 className="sub-header-pink">Why Hire Me</h3>
        <div className="hire-me-list">
          {[
            { title: "Strong Work Ethic", desc: "I take ownership and deliver quality work under pressure." },
            { title: "Clear Communication", desc: "I keep stakeholders informed and set honest expectations." },
            { title: "Meets Deadlines", desc: "Reliable and punctual planning to deliver on time." },
            { title: "Honest About Skill Level", desc: "Upfront about what I know and what I am learning." }
          ].map((item, idx) => (
            <div className="hire-item" key={idx}>
              <i className="far fa-check-circle hire-icon"></i>
              <div className="hire-text">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;