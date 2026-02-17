import React from 'react';
import '../App.css';

const Services = ({ id }) => {
  const serviceList = [
    {
      title: "Frontend Web Development",
      desc: "Responsive, accessible interfaces built with HTML, CSS, JavaScript, and modern frameworks like React.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Backend Development",
      desc: "Server-side logic, APIs, and database integration for web applications.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      )
    },
    {
      title: "Full-Stack Web Applications",
      desc: "End-to-end web solutions from UI design to deployment, tailored to your needs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Website Maintenance & Custom Tools",
      desc: "Bug fixes, feature updates, and small custom web tools or automation scripts.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  ];

  const techStack = ["React", "TypeScript", "JavaScript", "HTML/CSS", "Python", "SQL", "Git", "Node.js", "Java", "ASP.Net", "C#", "Android"];
  const openTo = ["Graduate roles", "Junior developer positions", "Junior Data Engineer positions", "Freelance projects", "Part-time", "Contract work"];

  return (
    <section id={id} className="services-section">
      <div className="section-container">
        <h2 className="section-title">What I Build</h2>
        
        {/* The 4 Main Cards */}
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="extra-info-group">
          <h3 className="sub-header-pink">Tech Stack</h3>
          <div className="pill-container">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        {/* Open To Section */}
        <div className="extra-info-group">
          <h3 className="sub-header-pink">Open To</h3>
          <div className="pill-container">
            {openTo.map((role, i) => (
              <span key={i} className="open-pill">{role}</span>
            ))}
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

export default Services;