import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const mainContentStyle = {
    backgroundImage: "url('/bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "10vh",
  };

  return (
    <div className="home-wrapper">
      <div className="home-side" />
      <div className="home-center" style={mainContentStyle}>
        <div className="home-content">
          <h1>Welcome to my Portfolio</h1>
          <h3>My Mission</h3>
          <p>
            As an aspiring software developer, my mission is to build efficient, reliable, and user-centric
            applications that solve real-world problems. Through continuous learning and practical experience,
            I aim to contribute meaningfully to the ever-evolving tech industry.
          </p>
        </div>
      </div>
      <div className="home-side" />
    </div>
  );
}

export default Home;
