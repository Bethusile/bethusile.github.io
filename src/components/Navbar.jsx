import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectsPage = location.pathname === '/projects';

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.min(window.scrollY / 5000, 1);
      setScrollOpacity(opacity);
    };
    // Reset opacity on route change so it recalculates from current scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleAnchorClick = (e, href) => {
    setIsMenuOpen(false);
    if (isProjectsPage) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services', type: 'anchor' },
    { name: 'Work', href: '/projects', type: 'route' },
    { name: 'Pricing', href: '#rates', type: 'anchor' },
    { name: 'About', href: '#about', type: 'anchor' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
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
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img
            src="/Betana logo black bg.png"
            alt="Betana"
            style={{ height: '38px', width: 'auto', display: 'block' }}
          />
          Betana
          <span
            className="dot-nav"
            style={{
              color: scrollOpacity > 0.7 ? '#ffffff' : '#C11C84',
              transition: 'color 0.8s ease'
            }}
          >
            .
          </span>
        </Link>

        <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`burger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-item ${location.pathname === link.href ? 'nav-item-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="nav-item"
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;