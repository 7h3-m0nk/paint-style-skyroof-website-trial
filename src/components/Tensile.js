import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tensile.css';

const Tensile = () => {
  const navigate = useNavigate();
  const tensile = [
    {
      name: "UMBRELLAS",
      description: "Single pillar tensile umbrellas - simply elegant examples of tensile structures.",
      features: ["Single Pillar", "Elegant Design", "Multiple Options", "Compact Solution"]
    },
    {
      name: "PARKINGS", 
      description: "Spacious multi-sized structures for all vehicles with custom design options ensuring safety.",
      features: ["Multi-Sized", "All Vehicles", "Custom Design", "Vehicle Safety"]
    },
    {
      name: "ROOFING",
      description: "Restaurant and office space roofing solutions for any space requirement.",
      features: ["Restaurant Roofing", "Office Spaces", "Custom Spaces", "Weather Protection"]
    },
    {
      name: "WAREHOUSING",
      description: "Cost-effective warehousing with tensile fabric, faster setup than traditional structures.",
      features: ["Cost Effective", "Fast Setup", "Beautification", "Large Spaces"]
    },
    {
      name: "SAIL STRUCTURES",
      description: "Beautification solutions for shade, restaurant spaces, and sit-outs.",
      features: ["Beautification", "Shade Solutions", "Restaurant Spaces", "Sit-out Areas"]
    },
    {
      name: "DESIGNER STRUCTURES",
      description: "Your ideas, our creativity and execution - creating your landmark!",
      features: ["Custom Ideas", "Creative Execution", "Landmark Design", "Unique Solutions"]
    }
  ];

  return (
    <section className="tensile section" id="tensile">
      <div className="container">
        <h2 className="section-title">TENSILE STRUCTURES</h2>
        
        <div className="tensile-grid">
          {tensile.map((structure, index) => (
            <div key={index} className="tensile-card" onClick={() => navigate('/tensile')}>
              <h3 className="tensile-name">{structure.name}</h3>
              <p className="tensile-description">{structure.description}</p>
              <ul className="tensile-features">
                {structure.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tensile;