import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css';

function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    navigate('/');
  };

  return (
    <div className="contact-section">
      <h4 className="contact-subtitle">CONTACT</h4>
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-cards">
        <div className="card">
          <i className="icon-email" />
          <a href="felixchung08@dgmail.com">felixchung08@gmail.com</a>
          <span>Email</span>
        </div>
        <div className="card">
          <i className="icon-location" />
          <p>937 Progress Ave, Scarborough, ON M1G 3T8</p>
          <span>Address</span>
        </div>
        <div className="card">
          <i className="icon-phone" />
          <p>+1 123 456 7890</p>
          <span>Phone</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        </div>
        <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit" className="gradient-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;
