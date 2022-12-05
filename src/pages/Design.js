import React from "react";
import { NavLink } from "react-router-dom";


const Design = () => {
  return (
    <div>
      <h1>
        DESIGN
      </h1>
      <div className="content-container">
        <NavLink to='/design/bread-and-butter' className="link-content" >
          <div className="card">
            <img src={'./assets/Bread and Butter Cover.png'} alt="Bread and Butter Cover" className="cover-image" />
            <h4>Bread and Butter</h4>
          </div>
        </NavLink>
        <NavLink to='/design/heyfood' className="link-content" >
          <div className="card">
            <img src={'./assets/Heyfood Cover.png'} alt="Heyfood Cover" className="cover-image" />
            <h4>Heyfood</h4>
          </div>
        </NavLink>
        <NavLink to='/design/the-forager-zine' className="link-content" >
          <div className="card">
            <img src={'./assets/The Forager Cover.png'} alt="The Forager Cover" className="cover-image" />
            <h4>The Forager Zine</h4>
          </div>
        </NavLink>
        <NavLink to='/design/grad-center-bar' className="link-content" >
          <div className="card">
            <img src={'./assets/Grad Center Bar Cover.png'} alt="Grad Center Bar Cover" className="cover-image" />
            <h4>Grad Center Bar</h4>
          </div>
        </NavLink>
        <NavLink to='/design/brown-mail-kiosk' className="link-content" >
          <div className="card">
            <img src={'./assets/Mail Kiosk Cover.png'} alt="Mail Kiosk Cover" className="cover-image" />
            <h4>Brown University Mail Kiosk</h4>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Design;