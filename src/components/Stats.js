import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">18+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">2400+</h3>
            <p className="stat-label">Clients</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">20M+</h3>
            <p className="stat-label">Sqft. Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;