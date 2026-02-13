import React, { useState, useEffect } from 'react';
import '../App.css';

// Import images
import pipelineImg from '../assets/images/pipeline.png';
import lostFoundImg from '../assets/images/Lostandfound.png';
import ab1Img from '../assets/images/ab1.JPG';
import marketingImg from '../assets/images/bbd-marketing.png';
import tuckshopImg from '../assets/images/tuckshop3.png';
import lasertagImg from '../assets/images/lasertag.png';
import bikeImg from '../assets/images/bike1.png';

const Projects = ({ id }) => {
  const [activeTab, setActiveTab] = useState('TypeScript');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projectData = {
    'TypeScript': [
      { 
        title: "BBD Marketing Campaign Manager", 
        desc: "A web-based Augmented Reality marketing platform that allows users to scan print ads to reveal hidden content. Built with React, Node.js, and MindAR for interactive AR experiences.", 
        role: "Full stack developer",
        tech: [
            { name: "React", icon: "fab fa-react" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "MindAR", icon: "fas fa-eye" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "TypeScript", icon: "fas fa-code" }
        ],
        image: marketingImg, 
        link: "https://github.com/Bethusile/Marketing-Campaign-Manager" 
      },
      { 
        title: "Tuckshop Stock Manager", 
        desc: "An automated inventory solution featuring financial tracking, real-time stock levels, and PDF reporting for small-scale retail operations.", 
        role: "Backend Lead",
        tech: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "Express", icon: "fas fa-server" }
        ],
        image: tuckshopImg, 
        link: "https://github.com/Bethusile/TuckShop" 
      },
      { 
        title: "Lasertag Web Game", 
        desc: "A real-time multiplayer web game utilizing Socket.IO for low-latency communication and a React-based frontend for dynamic UI updates.", 
        role: "Frontend Developer",
        tech: [
            { name: "Socket.IO", icon: "fas fa-network-wired" },
            { name: "React", icon: "fab fa-react" },
            { name: "TypeScript", icon: "fas fa-code" }
        ],
        image: lasertagImg, 
        link: "https://github.com/Bethusile/BBD-Laser-Tag-Game" 
      }
    ],
    'Microsoft Fabric': [
      { 
        title: "Sales ETL Pipeline", 
        desc: "A robust data engineering pipeline built in Microsoft Fabric using PySpark to clean, transform, and load retail data into Delta Lake for analysis.", 
        role: "Data Engineer",
        tech: [
            { name: "MS Fabric", icon: "fas fa-cloud" },
            { name: "PySpark", icon: "fas fa-bolt" },
            { name: "Delta Lake", icon: "fas fa-layer-group" }
        ],
        image: pipelineImg, 
        link: "https://github.com/Bethusile/Fabric-Data-Engineering-Project" 
      }
    ],
    'ASP.NET C#': [
      { 
        title: "Lost & Found App", 
        desc: "An Azure-hosted community platform allowing users to report lost items. Features automated CI/CD pipelines and SQL Server integration.", 
        role: "Full Stack Developer",
        tech: [
            { name: "C#", icon: "fas fa-terminal" },
            { name: "ASP.NET Core", icon: "fas fa-globe" },
            { name: "Azure", icon: "fab fa-microsoft" }
        ],
        image: lostFoundImg, 
        link: "https://github.com/Thango25/ProjectBB" 
      },
      { 
        title: "Afro-Belle E-Commerce", 
        desc: "A full-stack custom platform for small business e-commerce, focusing on responsive design and secure checkout processes.", 
        role: "Lead Developer",
        tech: [
            { name: "MVC", icon: "fas fa-project-diagram" },
            { name: "EF Core", icon: "fas fa-link" },
            { name: "SQL Server", icon: "fas fa-database" }
        ],
        image: ab1Img, 
        link: "https://github.com/Bethusile/Afro-Belle-E-Commerce" 
      }
    ],
    'Power BI': [
      { 
        title: "London Bike Analysis", 
        desc: "An interactive dashboard visualizing London bike rental trends, weather impacts, and peak usage hours using DAX for complex modeling.", 
        role: "Data Analyst",
        tech: [
            { name: "Power BI", icon: "fas fa-chart-bar" },
            { name: "DAX", icon: "fas fa-calculator" },
            { name: "Data Modeling", icon: "fas fa-database" }
        ],
        image: bikeImg, 
        link: "https://github.com/Bethusile/London-Bike-Sharing-Analysis" 
      }
    ]
  };

  const currentProjects = projectData[activeTab] || [];

  useEffect(() => {
    if (currentProjects.length <= 1 || isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
    }, 4500); 
    return () => clearInterval(interval);
  }, [activeTab, currentProjects.length, isHovering]);

  const handleNext = () => setCurrentIndex((currentIndex + 1) % currentProjects.length);
  const handlePrev = () => setCurrentIndex((currentIndex - 1 + currentProjects.length) % currentProjects.length);

  return (
    <section id={id} className="projects-section">
      <div className="section-container full-width-container">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="tabs-container">
          {Object.keys(projectData).map((tab) => (
            <button key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}>
              {tab}
            </button>
          ))}
        </div>

        <div 
          className="slider-view-viewport full-width-viewport"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="projects-slider-track">
            {currentProjects.map((proj, index) => (
              <div key={index} className={`project-card-full ${index === currentIndex ? 'active-card' : 'inactive-card'}`}>
                <div className="image-header-full">
                  <img src={proj.image} alt={proj.title} />
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
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-nav-tools">
          <button className="nav-circle-btn" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="pagination-dots">
            {currentProjects.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${i === currentIndex ? 'active-dot' : ''}`} 
                onClick={() => setCurrentIndex(i)} 
              />
            ))}
          </div>
          
          <button className="nav-circle-btn" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;