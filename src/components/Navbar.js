import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  return (
    <nav className="nav-container">
      <div>
        <NavLink to="/portfolio" className={isActive ? "link-home-active" : "link-home"} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          setIsActive(true);
          }} >HOME</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/design" className="link" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          setIsActive(false);
          }}>DESIGN</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/illustration" className="link" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          setIsActive(false);
          }}>ILLUSTRATION</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/about" className="link" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          setIsActive(false);
          }}>ABOUT</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio/resume" className="link" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          setIsActive(false);
          }}>RESUME</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;