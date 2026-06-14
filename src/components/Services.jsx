import React from 'react';
import '../App.css';
import servicesBg from '../assets/videos/services-bg.mp4';

const Services = ({ id }) => {
  const serviceList = [
    {
      number: "01",
      title: "Web Application Development",
      desc: "Full-stack applications built end-to-end — custom frontends, robust APIs, database design, and production-ready deployments tailored to your business.",
      tags: ["Deployed web app", "API & database", "Source code + docs"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Data Engineering & Analytics",
      desc: "Automated pipelines, BI dashboards, and analytical systems that turn raw data into clear, decision-ready insight for your team.",
      tags: ["Live BI dashboard", "Automated pipeline", "Insight report"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      )
    },
    {
      number: "03",
      title: "UX Design & Prototyping",
      desc: "User-centred design from wireframes to interactive Figma prototypes — validating ideas before a single line of code is written.",
      tags: ["Interactive prototype", "Usability report", "Design system"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Custom Tools & Maintenance",
      desc: "Bespoke automation scripts, internal management tools, and ongoing support — eliminating manual work and keeping your systems running cleanly.",
      tags: ["Working automation", "Maintenance plan", "Ongoing support"],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  ];

  return (
    <section id={id} className="services-section">
      <video className="services-video-bg" autoPlay loop muted playsInline>
        <source src={servicesBg} type="video/mp4" />
      </video>
      <div className="services-video-overlay" />
      <div className="section-container">
        <p className="services-eyebrow">What We Do</p>
        <h2 className="section-title" style={{ color: '#f8fafc' }}>
          Built for businesses that need it done right.
        </h2>
        <div className="services-cols">
          {serviceList.map((service, index) => (
            <div key={index} className="service-col">
              <span className="service-col-num">{service.number}</span>
              <div className="service-col-icon">{service.icon}</div>
              <h3 className="service-col-title">{service.title}</h3>
              <p className="service-col-desc">{service.desc}</p>
              <div className="service-col-tags">
                {service.tags.map((tag, t) => (
                  <span key={t} className="service-col-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;