import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h4>GET IN TOUCH</h4>
            <p>
              Ready to discuss your project? Contact us for consultation 
              and custom structural solutions.
            </p>
            
            <h4>OFFICE</h4>
            <p>
              123 Industrial Avenue<br />
              Engineering District<br />
              City, State 12345
            </p>
            
            <h4>PHONE</h4>
            <p>+1 (555) 123-4567</p>
            
            <h4>EMAIL</h4>
            <p>info@skyroof.com</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn form-submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;