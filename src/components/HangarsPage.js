import React from 'react';
import './HangarsPage.css';

const HangarsPage = () => {
  return (
    <div className="hangars-page">
      <div className="container">
        <h1 className="page-title">HANGARS</h1>
        <p className="page-description">
          Manufactured using precision tools; raw materials procured from established brands like Jindal and Serge Ferrari; 
          and expert manpower with years of experience handling the manufacturing process, these Hangars serve the purpose 
          of covering large areas with utmost efficiency.
        </p>
        
        <div className="hangar-categories">
          <div className="category">
            <h2>LIGHT HANGARS</h2>
            <p>Spanning across 12m and 6m with an additional option for 9m, these light hangars are perfect to house a capacity of 200 to 400 people. Lighter profiles, and ease of installation without any additional mechanical support requirements make these a very economical solution for your small sized events.</p>
          </div>
          
          <div className="category">
            <h2>MEDIUM HANGARS</h2>
            <p>18m, 12m and 6m coming as standard with additional option for 15m and 9m, these are the quintessential multipurpose temporary roofing solutions for your events. Whether its a small or medium sized event, these hangars will serve your purpose any which way. Perfect blend of light weight, balance, and ability to cover a large area.</p>
          </div>
          
          <div className="category">
            <h2>HEAVY HANGARS</h2>
            <p>Purpose driven - 18m and 12m with option for 15m. Heavy, built to withstand heavy pressure, still balancing gracefully. Mechanical support (like cranes) recommended for installation.</p>
          </div>
          
          <div className="category">
            <h2>MEGA HANGARS</h2>
            <p>30m, 24m and 18m with option for 15m. Concerts, Political gatherings, Corporate events, you name it. Any "mega" event, this is your go to solution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HangarsPage;