import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="nav-container">
      <div>
        <NavLink to="/" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>HOME</NavLink>
      </div>
      <div>
        <NavLink to="/design" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>DESIGN</NavLink>
      </div>
      <div>
        <NavLink to="/illustration" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>ILLUSTRATION</NavLink>
      </div>
      <div>
        <NavLink to="/about" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>ABOUT</NavLink>
      </div>
      <div>
        <NavLink to="/resume" className="link" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>RESUME</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;