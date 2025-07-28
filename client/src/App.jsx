import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import ContactMe from './ContactMe';
import './App.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">CWC<span className="dot">.</span></div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </div>
      </header>

      <div style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
