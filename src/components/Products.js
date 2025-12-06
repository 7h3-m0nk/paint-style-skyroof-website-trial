import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();
  
  const structures = [
    {
      id: 1,
      name: "MS TENTS",
      description: "Powder coated MS frames with nut & bolt system for easy installation.",
      features: ["MS Frame", "Nut & Bolt System", "Easy Installation", "Multiple Pieces"]
    },
    {
      id: 2,
      name: "ALUMINIUM TENTS",
      description: "Lightweight aluminum frames with minimal maintenance and enhanced aesthetics.",
      features: ["Aluminum Frame", "Lightweight", "Long Lasting", "Beautiful Design"]
    },
    {
      id: 3,
      name: "CUSTOM DESIGNS",
      description: "Tailored tent solutions for specific site conditions and creative requirements.",
      features: ["Custom Made", "Permanent/Temporary", "Site Specific", "Creative Solutions"]
    },
    {
      id: 4,
      name: "PVC TENTS",
      description: "Weather-resistant PVC membrane tents including pagodas, pyramids, and marquees.",
      features: ["PVC Membrane", "Weather Resistant", "Versatile Design", "Event Solutions"]
    }
  ];

  return (
    <section className="structures section" id="structures">
      <div className="container">
        <h2 className="section-title">TENT SOLUTIONS</h2>
        
        <div className="structures-grid">
          <div className="structure-card" onClick={() => navigate('/tents')}>
            <h3 className="structure-name">{structures[3].name}</h3>
            <p className="structure-description">{structures[3].description}</p>
            <ul className="structure-features">
              {structures[3].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="structure-card empty-card" onClick={() => navigate('/tents')}>
            <img src="/home-tents-18.jpg" alt="Tent" className="full-cover-image" />
          </div>
          <div className="structure-card empty-card" onClick={() => navigate('/tents')}>
            <img src="/home-tents-19.png" alt="Tent" className="full-cover-image" />
          </div>
          <div className="structure-card" onClick={() => navigate('/tents')}>
            <h3 className="structure-name">{structures[0].name}</h3>
            <p className="structure-description">{structures[0].description}</p>
            <ul className="structure-features">
              {structures[0].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="structure-card" onClick={() => navigate('/tents')}>
            <h3 className="structure-name">{structures[1].name}</h3>
            <p className="structure-description">{structures[1].description}</p>
            <ul className="structure-features">
              {structures[1].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="structure-card" onClick={() => navigate('/tents')}>
            <h3 className="structure-name">{structures[2].name}</h3>
            <p className="structure-description">{structures[2].description}</p>
            <ul className="structure-features">
              {structures[2].features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;