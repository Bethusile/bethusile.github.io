import React, { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      // Ultra-slow transition as requested
      const opacity = Math.min(winScroll / 5000, 1); 
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [    
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Rates', href: '#rates' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className="navbar" 
      style={{ 
        backgroundColor: `rgba(193, 28, 132, ${scrollOpacity})`,
        borderBottom: `1px solid rgba(241, 245, 249, ${Math.max(0, 0.1 - scrollOpacity)})`
      }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          BM
          <span 
            className="dot-nav" 
            style={{ 
              // Logic: Starts pink (#C11C84), gradually becomes white (#ffffff)
              color: scrollOpacity > 0.3 ? '#ffffff' : '#C11C84',
              transition: 'color 0.8s ease' 
            }}
          >
            .
          </span>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`burger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;