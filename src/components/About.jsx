import React from 'react';
import '../App.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Betana</h2>

        <p className="about-description">
          Betana is a registered digital solutions studio based in South Africa.
          We design and build web applications, data systems, and software products for
          businesses across South Africa - combining technical depth with a clear focus
          on delivering real business value.
        </p>

        <p className="about-description" style={{ marginTop: '1rem' }}>
          The studio is led by Bethusile Mafumana (Managing Director), a computer scientist
          and data engineer with a background in accounting and financial analytics.
          Betana operates as a lean, skilled team - bringing together design, engineering,
          business analysis, and strategic thinking on every engagement.
        </p>

        {/* How We Work */}
        <h3 className="sub-header-pink">How We Work</h3>
        <div className="hire-me-list">
          {[
            { title: "Transparent Communication", desc: "We keep clients informed at every stage and set honest expectations upfront." },
            { title: "Quality Over Speed", desc: "We prioritise clean, maintainable solutions that hold up long after delivery." },
            { title: "Deadline Accountability", desc: "Reliable planning and honest timelines — we deliver what we commit to." },
            { title: "Honest Capability", desc: "We are upfront about what we can build today and where we are growing." },
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

        {/* Engagement */}
        <h3 className="sub-header-pink">Engagement</h3>
        <div className="availability-grid">
          <div className="availability-card">
            <div className="card-header">
              <i className="far fa-clock card-icon"></i>
              <h4>Working Hours</h4>
            </div>
            <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
            <p className="sub-text">Weekends available on request</p>
          </div>
          <div className="availability-card">
            <div className="card-header">
              <i className="far fa-calendar-alt card-icon"></i>
              <h4>Project Types</h4>
            </div>
            <p>Freelance, contract, or retainer</p>
            <p className="sub-text">Short and long-term engagements</p>
          </div>
          <div className="availability-card">
            <div className="card-header">
              <i className="far fa-calendar-check card-icon"></i>
              <h4>Start Date</h4>
            </div>
            <p>Available for new projects</p>
            <p className="sub-text">Contact us to discuss timelines</p>
          </div>
        </div>

        {/* Location */}
        <h3 className="sub-header-pink">Location</h3>
        <div className="location-grid">
          <div className="location-item">
            <i className="fas fa-desktop location-icon"></i>
            <div className="location-text">
              <h5>Remote-First</h5>
              <p>Fully equipped for remote delivery with reliable infrastructure.</p>
            </div>
          </div>
          <div className="location-item">
            <i className="fas fa-building location-icon"></i>
            <div className="location-text">
              <h5>Hybrid / On-Site</h5>
              <p>Available for on-site work within South Africa by arrangement.</p>
            </div>
          </div>
          <div className="location-item">
            <i className="fas fa-map-marker-alt location-icon"></i>
            <div className="location-text">
              <h5>Based In</h5>
              <p>Gqeberha (Port Elizabeth), Eastern Cape.</p>
            </div>
          </div>
        </div>

        {/* Meet the Team link */}
        <div className="meet-team-cta">
          <p>Want to know who's behind the work?</p>
          <a href="/projects#team" className="btn btn-projects">
            Meet the Team →
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;