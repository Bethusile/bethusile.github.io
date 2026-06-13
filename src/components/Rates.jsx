import React from 'react';
import '../App.css';

const Rates = ({ id }) => {
  return (
    <section id={id} className="rates-section">
      <div className="section-container">

        {/* Main Section Title */}
        <h2 className="section-title">Pricing</h2>

        {/* Hourly Rate Card */}
        <div className="hourly-rate-container">
          <div className="hourly-card">
            <p className="rate-label">Hourly Rate</p>
            <h3 className="rate-value">R150 - R200 <span>/ hour</span></h3>
            <p className="rate-note">Rate depends on scope and complexity of the project.</p>
          </div>
        </div>

        {/* Package Pricing Title */}
        <h3 className="package-title">Package Pricing</h3>

        {/* Package Cards Grid */}
        <div className="package-grid">

          <div className="package-card">
            <p className="p-name">Basic Website</p>
            <h4 className="p-price">R2,500 - R4,000</h4>
            <p className="p-desc">Simple static site, a few pages</p>
          </div>

          <div className="package-card">
            <p className="p-name">Portfolio Website</p>
            <h4 className="p-price">R3,500 - R6,000</h4>
            <p className="p-desc">Personal or professional portfolio with projects</p>
          </div>

          <div className="package-card">
            <p className="p-name">Custom Web Application</p>
            <h4 className="p-price">R8,000+</h4>
            <p className="p-desc">Custom functionality, backend logic, integrations</p>
          </div>

          <div className="package-card">
            <p className="p-name">Data Engineering & Analytics</p>
            <h4 className="p-price">R6,000+</h4>
            <p className="p-desc">Pipelines, dashboards, and analytical systems</p>
          </div>

          <div className="package-card">
            <p className="p-name">UX Design & Prototyping</p>
            <h4 className="p-price">R3,500+</h4>
            <p className="p-desc">Wireframes, Figma prototypes, usability testing</p>
          </div>

          <div className="package-card">
            <p className="p-name">Custom Tools & Maintenance</p>
            <h4 className="p-price">R150 - R200 / hr</h4>
            <p className="p-desc">Automation scripts, internal tools, ongoing support</p>
          </div>

        </div>

        {/* Footer Disclaimer */}
        <p className="rates-footer-text">
          Prices are in ZAR and based on scope, complexity, and value delivered.
          We're open to discussion depending on your project requirements.
        </p>

      </div>
    </section>
  );
};

export default Rates;