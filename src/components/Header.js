import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => navigate('/')}>
            <img src="/skyroof logo no bg.png" alt="SkyRoof" />
          </div>
          
          <div className="since-pill">Since 2007</div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <span onClick={() => navigate('/')} className="nav-link">HOME</span>
            <span onClick={() => navigate('/tents')} className="nav-link">TENTS</span>
            <span onClick={() => navigate('/hangars')} className="nav-link">HANGARS</span>
            <span onClick={() => navigate('/tensile')} className="nav-link">TENSILE</span>
            <span onClick={() => navigate('/#services')} className="nav-link">SERVICES</span>
            <span onClick={() => navigate('/#contact')} className="nav-link">CONTACT</span>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;