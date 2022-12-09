import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar(props) {
  const location = (props.location.pathname === "/portfolio")
  const [isActive, setIsActive] = useState(location);

  useEffect(() => {
    setIsActive(location);
  }, [location])

  return (
    <nav className="nav-container">
      <div>
        <NavLink to="/portfolio" className="link" onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }} >[SILLYDUCK921]</NavLink>
      </div>
      <div className="tabs">
        <div>
          <NavLink to="/portfolio" className={isActive ? "link-home-active" : "link-home"} onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }} >HOME</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio/design" className="link" onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}>DESIGN</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio/illustration" className="link" onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}>ILLUSTRATION</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio/about" className="link" onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}>ABOUT</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio/resume" className="link-not-active" onClick={(e) => {
            e.preventDefault();
          }}>RESUME</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;