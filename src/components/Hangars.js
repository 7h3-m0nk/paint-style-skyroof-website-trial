import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hangars.css';

const Hangars = () => {
  const navigate = useNavigate();
  
  const hangars = [
    {
      id: 1,
      name: "LIGHT HANGARS",
      description: "12m and 6m spans with 9m option. Perfect for 200-400 people capacity.",
      features: ["Lighter Profiles", "Easy Installation", "No Mechanical Support", "Economical Solution"]
    },
    {
      id: 2,
      name: "MEDIUM HANGARS", 
      description: "18m, 12m and 6m standard with 15m and 9m options. Multipurpose temporary roofing.",
      features: ["Lightweight", "Balanced Design", "Large Area Coverage", "Versatile Use"]
    },
    {
      id: 3,
      name: "HEAVY HANGARS",
      description: "18m and 12m with 15m option. Built to withstand heavy pressure with grace.",
      features: ["Heavy Duty", "High Pressure Resistance", "Mechanical Support", "Purpose Driven"]
    },
    {
      id: 4,
      name: "MEGA HANGARS",
      description: "30m, 24m and 18m with 15m option. For concerts, political gatherings, corporate events.",
      features: ["Mega Events", "Large Capacity", "Concert Ready", "Corporate Solutions"]
    }
  ];

  return (
    <section className="hangars section" id="hangars">
      <div className="container">
        <h2 className="section-title">HANGAR SOLUTIONS</h2>
        
        <div className="hangars-grid">
          <div className="hangar-card" onClick={() => navigate('/hangars')}>
            <h3 className="hangar-name">{hangars[0].name}</h3>
            <p className="hangar-description">{hangars[0].description}</p>
            <ul className="hangar-features">
              {hangars[0].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="hangar-card" onClick={() => navigate('/hangars')}>
            <h3 className="hangar-name">{hangars[1].name}</h3>
            <p className="hangar-description">{hangars[1].description}</p>
            <ul className="hangar-features">
              {hangars[1].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="hangar-card" onClick={() => navigate('/hangars')}>
            <h3 className="hangar-name">{hangars[2].name}</h3>
            <p className="hangar-description">{hangars[2].description}</p>
            <ul className="hangar-features">
              {hangars[2].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="hangar-card" onClick={() => navigate('/hangars')}>
            <h3 className="hangar-name">{hangars[3].name}</h3>
            <p className="hangar-description">{hangars[3].description}</p>
            <ul className="hangar-features">
              {hangars[3].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="hangar-card empty-card" onClick={() => navigate('/hangars')}>
            <img src="/home-hangar-2.jpg" alt="Hangar" className="full-cover-image" />
          </div>
          <div className="hangar-card empty-card" onClick={() => navigate('/hangars')}>
            <img src="/home-hangars-5.jpeg" alt="Hangar" className="full-cover-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hangars;