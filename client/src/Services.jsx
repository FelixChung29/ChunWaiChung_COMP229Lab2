import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '/fullstack-development-mern-illustration.png',
      title: '🔧 Full-Stack Development',
      desc: 'End-to-end web application development using the MERN stack (MongoDB, Express, React, Node.js). From frontend design to backend integration and deployment.',
    },
    {
      icon: '/testing-debugging-app-reliability-graphic.png',
      title: '🧪 Testing & Debugging',
      desc: 'Comprehensive unit testing, integration testing, and performance debugging to ensure application reliability and stability.',
    },
    {
      icon: '/ui-ux-design-user-centered-visual.png',
      title: '🎨 UI/UX Design',
      desc: 'Crafting intuitive, responsive, and aesthetically pleasing interfaces. Focus on user-centered design principles and usability testing.',
    },
  ];

  return (
    <div className="services-container">
      <h4 className="section-subtitle">SERVICES</h4>
      <h2 className="section-title">What I Offer</h2>
      <div className="services-grid">
        {services.map((srv, idx) => (
          <div key={idx} className="service-card">
            <img src={srv.icon} alt={srv.title.replace(/[^a-zA-Z ]/g, '')} />
            <div className="service-text">
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
