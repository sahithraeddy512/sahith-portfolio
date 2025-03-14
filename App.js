import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Sahith Reddy</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sahith Reddy | All Rights Reserved</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;