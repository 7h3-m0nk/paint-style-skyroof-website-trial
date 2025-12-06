import React from 'react';
import './TensilePage.css';

const TensilePage = () => {
  return (
    <div className="tensile-page">
      <div className="container">
        <h1 className="page-title">TENSILE STRUCTURES</h1>
        <p className="page-description">
          Permanent structures based on the PVC Fabric solutions, built to last long (in many cases, 50-60 yrs as well). 
          Any feasible design is possible with these structures ranging from a small umbrella to a mega event hall/space, 
          roofing solutions, car parkings, event venues, warehousing...take your pick. There's just no saying no to what we could possibly achieve!
        </p>
        
        <div className="tensile-categories">
          <div className="category">
            <h2>UMBRELLAS</h2>
            <p>Single Pillar based tensile umbrellas - some of the most simply elegant examples of tensile structures. Many, many options are possible with these cute little umbrellas.</p>
          </div>
          
          <div className="category">
            <h2>PARKINGS</h2>
            <p>Spacious, multi-sized, all sized-cars inclusive structures with multiple & custom design options for any other vehicle, ensuring your vehicles' general safety.</p>
          </div>
          
          <div className="category">
            <h2>ROOFING</h2>
            <p>Restaurants, Office Spaces, pick your space, we'll roof it up!</p>
          </div>
          
          <div className="category">
            <h2>WAREHOUSING</h2>
            <p>Warehousing projects with Tensile Fabric - apart from the beautification aspects, extremely cost effective & can be set up faster than traditional structures.</p>
          </div>
          
          <div className="category">
            <h2>SAIL STRUCTURES</h2>
            <p>Beautification - in one simple word! Shade, restaurant spaces, sit-outs, take your pick!</p>
          </div>
          
          <div className="category">
            <h2>DESIGNER STRUCTURES</h2>
            <p>Your ideas. "Our" creativity - our execution, your landmark!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TensilePage;