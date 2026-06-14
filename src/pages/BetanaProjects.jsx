import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Contact from '../components/Contact';

// Project images
import fkImg from '../assets/images/fk-pic.png';
import marketingImg from '../assets/images/bbd-marketing.png';
import tuckshopImg from '../assets/images/tuckshop3.png';
import lasertagImg from '../assets/images/lasertag.png';
import shellhubImg from '../assets/images/shellhub2.png';

// Team photos
import bethusilePhoto from '../assets/images/Bethusile_Photo.png';
import simbaPhoto from '../assets/images/Simba.png';
import palesaPhoto from '../assets/images/Palesa.png';

// ── Team data ──────────────────────────────────────────────
const teamData = [
  {
    name: "Bethusile Mafumana",
    role: "Managing Director",
    initials: "BM",
    photo: bethusilePhoto,
    color: "#C11C84",
    brief: "Founder of Betana. Leads strategy, data engineering, and technical direction.",
    detail: `Bethusile holds a BCom Honours in Computer Science and Information Systems (Nelson Mandela University, expected 2026) and a BCom in Accounting. She has hands-on experience in full-stack development, data engineering, and financial analytics — with a background spanning FNB, Discovery, and BBD Software Development.

She is certified in Azure Fundamentals, Google Data Analytics, and Microsoft Fabric, and is currently leading Betana's flagship Fintech Anomaly Detection project. Her long-term focus is data-driven business strategy and risk analytics.`,
  },
  {
    name: "Simba Njanji",
    role: "Head of Sales & Marketing",
    initials: "SN",
    photo: simbaPhoto,
    color: "#8B1A6B",
    brief: "Drives client acquisition and manages Betana's brand presence and outreach.",
    detail: `Simba leads Betana's go-to-market strategy — managing outreach, partnerships, and LinkedIn content. He brings a commercial lens to everything the studio does, ensuring our work reaches the right clients and our brand communicates clearly and consistently.`,
  },
  {
    name: "Palesa Malele",
    role: "Business Analyst & Project Manager",
    initials: "PM",
    photo: palesaPhoto,
    color: "#A0186F",
    brief: "Keeps projects on track and translates business needs into clear deliverables.",
    detail: `Palesa bridges the gap between client requirements and the technical team. She handles scoping, contractor agreements, project documentation, and delivery timelines — making sure every project is structured properly from day one and delivered without surprises. She drafted Betana's contractor framework and manages internal project governance.`,
  },
  {
    name: "Lebo Modiko",
    role: "UX/UI & Graphic Designer",
    initials: "LM",
    photo: null,
    color: "#791560",
    brief: "Shapes the visual identity of everything Betana creates — inside and out.",
    detail: `Lebo is responsible for the look and feel of Betana's client work and internal brand. From Figma prototypes to meet-the-team cards, she brings a consistent, professional aesthetic to every touchpoint. She leads UX research, wireframing, and design handoff on all studio projects.`,
  },
  {
    name: "Thabo Mootwana",
    role: "Business Development Manager",
    initials: "T",
    photo: null,
    color: "#601250",
    brief: "Identifies and develops strategic partnerships and new business opportunities.",
    detail: `Thabo focuses on growing Betana's pipeline — identifying partnership opportunities, engaging potential clients, and supporting the studio's expansion into new markets and sectors. He works closely with Simba on outreach strategy and with Bethusile on positioning Betana for long-term growth.`,
  },
];

// ── Team Member Card ───────────────────────────────────────
const TeamCard = ({ member }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="team-card">
      {/* Full photo or gradient background */}
      <div
        className="team-photo-bg"
        style={!member.photo ? {
          background: `linear-gradient(160deg, ${member.color} 0%, #0f172a 100%)`
        } : {}}
      >
        {member.photo
          ? <img src={member.photo} alt={member.name} className="team-photo-full" />
          : <span className="team-initials-large">{member.initials}</span>
        }
      </div>

      {/* Slide-up overlay — always visible at bottom, expands on hover/click */}
      <div className={`team-overlay ${open ? 'team-overlay-open' : ''}`}>
        {/* Always visible: name + role */}
        <div className="team-overlay-header">
          <h4 className="team-name">{member.name}</h4>
          <p className="team-role">{member.role}</p>
        </div>

        {/* Revealed on expand: brief + detail + toggle */}
        <div className="team-overlay-body">
          <p className="team-brief">{member.brief}</p>

          {open && (
            <div className="team-detail">
              {member.detail.trim().split('\n\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          )}

          <button
            className="team-toggle-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? 'Close' : 'See more'}
            <i className={`fas fa-chevron-${open ? 'up' : 'down'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Page ──────────────────────────────────────────────
const BetanaProjects = () => {
  // Default to Past Work
  const [activeTab, setActiveTab] = useState('Past');
  const [pastTab, setPastTab] = useState('Custom Web Application');
  const [pastIndex, setPastIndex] = useState(0);
  const [isPastHovering, setIsPastHovering] = useState(false);
  const teamRef = useRef(null);
  const location = useLocation();

  // Scroll to team section if URL has #team
  useEffect(() => {
    if (location.hash === '#team' && teamRef.current) {
      setTimeout(() => {
        teamRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  const internalProjects = [
    {
      title: "Fintech Transaction Anomaly Detection",
      status: "In Progress",
      statusClass: "status-active",
      desc: "A production-grade fraud detection system built on the Kaggle Credit Card Fraud Detection dataset. Combines XGBoost classification with SHAP explainability, a Power BI dashboard for analysts, and a Figma-designed interface — engineered end-to-end by the Betana team.",
      role: "Full Studio Project",
      tech: [
        { name: "Python", icon: "fab fa-python" },
        { name: "scikit-learn", icon: "fas fa-brain" },
        { name: "XGBoost", icon: "fas fa-chart-line" },
        { name: "SHAP", icon: "fas fa-eye" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Power BI", icon: "fas fa-chart-bar" },
        { name: "Figma", icon: "fab fa-figma" },
      ],
      link: "https://github.com/Bethusile",
      kickoff: "25 June 2026",
    }
  ];

  const pastProjects = {
    'Custom Web Application': [
      {
        title: "Tuckshop Stock Manager",
        desc: "An automated inventory solution featuring financial tracking, real-time stock levels, and PDF reporting for small-scale retail operations.",
        role: "Backend Lead",
        tech: [
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "PostgreSQL", icon: "fas fa-database" },
          { name: "Express.js", icon: "fas fa-server" },
          { name: "MUI", icon: "fas fa-code" },
          { name: "React", icon: "fab fa-react" }
        ],
        image: tuckshopImg,
        link: "https://github.com/Bethusile/TuckShop",
        demo: "https://tuck-shop-nu.vercel.app/"
      },
      {
        title: "Lasertag Web Game",
        desc: "A real-time multiplayer web game utilising Socket.IO for low-latency communication and a React-based frontend for dynamic UI updates.",
        role: "Frontend Developer",
        tech: [
          { name: "Socket.IO", icon: "fas fa-network-wired" },
          { name: "React", icon: "fab fa-react" },
          { name: "TypeScript", icon: "fas fa-code" }
        ],
        image: lasertagImg,
        link: "https://github.com/Bethusile/BBD-Laser-Tag-Game",
        demo: "https://bbd-laser-tag-game.vercel.app/"
      },
      {
        title: "BBD Marketing Campaign Manager",
        desc: "A web-based Augmented Reality marketing platform allowing users to scan print ads to reveal hidden content, built with React, Node.js, and MindAR.",
        role: "Full Stack Developer",
        tech: [
          { name: "React", icon: "fab fa-react" },
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "MindAR", icon: "fas fa-eye" },
          { name: "Express.js", icon: "fas fa-server" },
          { name: "PostgreSQL", icon: "fas fa-database" },
          { name: "TypeScript", icon: "fas fa-code" },
        ],
        image: marketingImg,
        link: "https://github.com/Bethusile/Marketing-Campaign-Manager",
        demo: "https://github.com/Bethusile/Marketing-Campaign-Manager"
      }
    ],
    'Portfolio Website': [
      {
        title: "Psychology Website",
        desc: "A clean, professional website for a psychologist, featuring service listings, an about section, and a contact form — designed for a strong personal brand presence.",
        role: "Full Stack Developer",
        tech: [
          { name: "React", icon: "fab fa-react" },
          { name: "Netlify", icon: "fas fa-cloud" }
        ],
        image: fkImg,
        link: "https://github.com/Bethusile/fihliweklaas-psychology-website",
        demo: "https://fihliweklaas.netlify.app/"
      }
    ],
    'Basic Website': [
      {
        title: "ShellHub",
        desc: "A clean, modern static website built to showcase a brand or service with a polished UI, smooth navigation, and responsive layout across all devices.",
        role: "Frontend Developer",
        tech: [
          { name: "HTML/CSS", icon: "fab fa-html5" },
          { name: "Vercel", icon: "fas fa-cloud" }
        ],
        image: shellhubImg,
        link: "https://github.com/Bethusile/ShellHub",
        demo: "https://shell-hub.vercel.app/"
      }
    ]
  };

  const currentPastProjects = pastProjects[pastTab] || [];

  useEffect(() => {
    if (currentPastProjects.length <= 1 || isPastHovering || activeTab !== 'Past') return;
    const interval = setInterval(() => {
      setPastIndex((prev) => (prev + 1) % currentPastProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [pastTab, currentPastProjects.length, isPastHovering, activeTab]);

  const handlePastNext = () => setPastIndex((pastIndex + 1) % currentPastProjects.length);
  const handlePastPrev = () => setPastIndex((pastIndex - 1 + currentPastProjects.length) % currentPastProjects.length);

  return (
    <div className="projects-page">

      {/* ── Page Header ── */}
      <div className="projects-page-header">
        <div className="section-container">
          <p className="hero-eyebrow" style={{ paddingTop: '6rem', marginBottom: '0.5rem' }}>Betana Projects</p>
          <h1 className="projects-page-title">Our Work</h1>
          <p className="projects-page-sub">
            Projects built by the Betana team — from client deliverables to internal R&amp;D.
          </p>
        </div>
      </div>

      {/* ── Top-level tabs ── */}
      <div className="section-container" style={{ paddingTop: '2rem' }}>
        <div className="tabs-container" style={{ marginBottom: '0' }}>
          <button
            className={`tab-btn ${activeTab === 'Past' ? 'active' : ''}`}
            onClick={() => setActiveTab('Past')}
          >
            Past Work
          </button>
          <button
            className={`tab-btn ${activeTab === 'Current' ? 'active' : ''}`}
            onClick={() => setActiveTab('Current')}
          >
            Current Projects
          </button>
        </div>
      </div>

      {/* ── PAST WORK ── */}
      {activeTab === 'Past' && (
        <section className="projects-section" style={{ paddingTop: '1.5rem' }}>
          <div className="section-container full-width-container">
            <div className="tabs-container" style={{ marginTop: '1rem' }}>
              {Object.keys(pastProjects).map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${pastTab === tab ? 'active' : ''}`}
                  onClick={() => { setPastTab(tab); setPastIndex(0); }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              className="slider-view-viewport full-width-viewport"
              onMouseEnter={() => setIsPastHovering(true)}
              onMouseLeave={() => setIsPastHovering(false)}
            >
              <div className="projects-slider-track">
                {currentPastProjects.map((proj, index) => (
                  <div key={index} className={`project-card-full ${index === pastIndex ? 'active-card' : 'inactive-card'}`}>
                    <div className="image-header-full">
                      <a href={proj.demo} target="_blank" rel="noreferrer">
                        <img src={proj.image} alt={proj.title} />
                      </a>
                    </div>
                    <div className="project-content-full text-center">
                      <h3>{proj.title}</h3>
                      <p className="project-description">{proj.desc}</p>
                      <div className="tech-icon-grid">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="tech-item">
                            <i className={t.icon}></i> {t.name}
                          </span>
                        ))}
                      </div>
                      <p className="project-role"><strong>Role:</strong> {proj.role}</p>
                      <div className="github-box-container">
                        <a href={proj.link} target="_blank" rel="noreferrer" className="github-text-box">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-nav-tools">
              <button className="nav-circle-btn" onClick={handlePastPrev}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="pagination-dots">
                {currentPastProjects.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === pastIndex ? 'active-dot' : ''}`}
                    onClick={() => setPastIndex(i)}
                  />
                ))}
              </div>
              <button className="nav-circle-btn" onClick={handlePastNext}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── CURRENT PROJECTS ── */}
      {activeTab === 'Current' && (
        <section className="projects-section" style={{ paddingTop: '1.5rem' }}>
          <div className="section-container full-width-container">
            <div className="internal-projects-grid">
              {internalProjects.map((proj, idx) => (
                <div key={idx} className="internal-project-card">
                  <div className="internal-card-top">
                    <span className={`project-status-badge ${proj.statusClass}`}>{proj.status}</span>
                    <p className="internal-kickoff">Kickoff: {proj.kickoff}</p>
                  </div>
                  <h3 className="internal-card-title">{proj.title}</h3>
                  <p className="project-description">{proj.desc}</p>
                  <div className="tech-icon-grid" style={{ marginTop: '1.25rem' }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} className="tech-item">
                        <i className={t.icon}></i> {t.name}
                      </span>
                    ))}
                  </div>
                  <p className="project-role" style={{ marginTop: '1rem' }}>
                    <strong>Team:</strong> {proj.role}
                  </p>
                  <div className="github-box-container" style={{ marginTop: '1.5rem' }}>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="github-text-box">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="projects-cta-strip">
              <p>Interested in working with us on something similar?</p>
              <a href="#contact" className="btn btn-hire">Get in Touch</a>
            </div>
          </div>
        </section>
      )}

      {/* ── MEET THE TEAM ── */}
      <section id="team" ref={teamRef} className="team-section">
        <div className="section-container">
          <h2 className="section-title-white">Meet the Team</h2>
          <p className="projects-page-sub" style={{ marginBottom: '2.5rem' }}>
            A small, focused team — each person here owns a real part of what we build.
          </p>
          <div className="team-grid">
            {teamData.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact id="contact" />
    </div>
  );
};

export default BetanaProjects;