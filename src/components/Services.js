import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "WATERPROOF FABRICS",
      description: "All outdoor canopies made from waterproof fabrics with UV protection and fire-retardant properties."
    },
    {
      title: "MANUFACTURING UNIT",
      description: "Full-fledged manufacturing facility in Bangalore with advanced technologies and machinery."
    },
    {
      title: "ESTABLISHED BRAND",
      description: "Trusted by event management organizations, hotel groups, corporates & government sectors across India."
    },
    {
      title: "CUSTOM SOLUTIONS",
      description: "Each project is unique and specific to customers' requirements with highly skilled task force."
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">OUR EXPERTISE</h2>
        
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;