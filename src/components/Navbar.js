import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="nav-container">
      <div>
        <NavLink to="/portfolio" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>HOME</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/design" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>DESIGN</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/illustration" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>ILLUSTRATION</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/about" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>ABOUT</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/resume" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>RESUME</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;