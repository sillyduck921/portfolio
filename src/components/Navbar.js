import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="nav-container">
      <div>
        <NavLink to="/" className="link">HOME</NavLink>
      </div>
      <div>
        <NavLink to="/design" className="link">DESIGN</NavLink>
      </div>
      <div>
        <NavLink to="/illustration" className="link">ILLUSTRATION</NavLink>
      </div>
      <div>
        <NavLink to="/about" className="link">ABOUT</NavLink>
      </div>
      <div>
        <NavLink to="/resume" className="link">RESUME</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;