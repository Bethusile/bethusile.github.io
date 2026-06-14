import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
emailjs.init('7-JTNGWN9vtk2EMD6');
import '../App.css';
import Swal from 'sweetalert2';
import bearVideo from '../assets/videos/bear.mp4';

const Contact = ({ id }) => {
  const form     = useRef();
  const videoRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jmhnwab', 'template_h79f1u1', form.current, '7-JTNGWN9vtk2EMD6')
      .then(
        () => {
          Swal.fire({ icon: 'success', title: 'Message sent!', text: "Thanks for reaching out. I'll get back to you soon.", confirmButtonColor: '#C11C84', background: '#0f172a', color: '#fff' });
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong. Please try again.', confirmButtonColor: '#ef4444', background: '#0f172a', color: '#fff' });
        }
      );
  };

  const unmute = () => { if (videoRef.current) videoRef.current.muted = false; };
  const mute   = () => { if (videoRef.current) videoRef.current.muted = true;  };

  return (
    <footer id={id} className="contact-footer-section">
      <div className="contact-master">

        {/* ── Left: info + form ── */}
        <div className="contact-left">
          <h2 className="section-title-white">Get in Touch</h2>
          <p className="contact-intro">
            Have a project in mind or want to discuss an opportunity?<br />
            I'd love to hear from you.
          </p>
          <div className="contact-methods">
            <div className="method-item">
              <i className="far fa-envelope"></i>
              <a href="mailto:hello@betana.co.za">hello@betana.co.za</a>
            </div>
            <div className="method-item">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+27738949483">073 894 9483</a>
            </div>
          </div>
          <div className="social-links-contact">
            <a href="https://github.com/Bethusile" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/company/betana" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form" style={{ marginTop: '2rem' }}>
            <input  type="text"  name="user_name"  placeholder="Your name"  required />
            <input  type="email" name="user_email" placeholder="Your email" required />
            <textarea name="message" placeholder="Tell us about your project" rows="5" required></textarea>
            <button type="submit" className="btn-send">
              <i className="far fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        {/* ── Right: bear video ── */}
        <div className="bear-video-wrap">
          <video
            ref={videoRef}
            className="bear-video"
            autoPlay
            muted
            loop
            playsInline
            onMouseEnter={unmute}
            onMouseLeave={mute}
          >
            <source src={bearVideo} type="video/mp4" />
          </video>
          <p className="bear-hint">hover for sound</p>
        </div>

        {/* ── Footer bar — always last, full width ── */}
        <div className="footer-bottom">
          <p>© 2026 Betana. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://github.com/Bethusile" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/company/betana" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;