import React from 'react';
import '../App.css';

const Contact = ({ id }) => {
  return (
    <footer id={id} className="contact-footer-section">
      <div className="section-container">
        
        {/* Contact Content Area */}
        <div className="contact-grid">
          
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h2 className="section-title-white">Get in Touch</h2>
            <p className="contact-intro">
              Have a project in mind or want to discuss an opportunity?<br />
              I'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              <div className="method-item">
                <i className="far fa-envelope"></i>
                <a href="mailto:bethusilejm@gmail.com">bethusilejm@gmail.com</a>
              </div>
              <div className="method-item">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+27738949483">+27 (73) 894 9483</a>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://github.com/Bethusile" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/bethusile" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Tell me about your project" rows="5" required></textarea>
              <button type="submit" className="btn-send">
                <i className="far fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Area */}
        <div className="footer-bottom">
          <p>© 2026 Bethusile Mafumana. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://github.com/Bethusile" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bethusile-mafumana" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;