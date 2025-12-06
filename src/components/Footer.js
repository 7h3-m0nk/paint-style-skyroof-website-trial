import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">SKYROOF</div>
            <p className="footer-description">
              Engineering excellence in tensile structures, German hangars, 
              and architectural solutions for industrial applications.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">STRUCTURES</h4>
            <ul className="footer-links">
              <li><a href="#structures">Tensile Structures</a></li>
              <li><a href="#structures">German Hangars</a></li>
              <li><a href="#structures">Industrial Tents</a></li>
              <li><a href="#structures">Canopies</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SKYROOF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;