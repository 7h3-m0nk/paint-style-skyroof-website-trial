import React from 'react';
import Stats from './Stats';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            SKYROOF INDIA
            <span className="hero-tagline">Innovation in every solution</span>
          </h1>
          
          <div className="hero-line"></div>
          
          <p className="hero-subtitle">
            We are a manufacturer and distributor of high-quality Tents, Outdoor canopies, Umbrellas, 
            Aluminium Hangars, Tensile structures and Super structures. Established in 2007.
          </p>
          
          <div className="hero-buttons">
            <button className="btn">VIEW PROJECTS</button>
            <button className="btn btn-outline">GET A CONSULT</button>
          </div>
          
          <Stats />
        </div>
        
        <div className="hero-image">
          <img src="/designer -models - 6.jpg" alt="SkyRoof Structures" />
        </div>
      </div>
    </section>
  );
};

export default Hero;