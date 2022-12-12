import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Design = () => {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
      <h1>
        DESIGN
      </h1>
      
      <div className="content-container">
      <NavLink to='/portfolio/design/grad-center-bar' className="link-content" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} >
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/Grad Center Bar Cover.png"} alt="Grad Center Bar Cover" className="cover-image" />
            <h4>Grad Center Bar</h4>
          </div>
        </NavLink>
        
        <NavLink to='/portfolio/design/heyfood' className="link-content" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Cover.png"} alt="Heyfood Cover" className="cover-image" />
            <h4>Heyfood</h4>
          </div>
        </NavLink>
        <NavLink to='/portfolio/design/the-forager-zine' className="link-content" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/The Forager Cover.png"} alt="The Forager Cover" className="cover-image" />
            <h4>The Forager Zine</h4>
          </div>
        </NavLink>
        <NavLink to='/portfolio/design/bread-and-butter' className="link-content" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/Bread and Butter Cover.png"} alt="Bread and Butter Cover" className="cover-image" />
            <h4>Bread and Butter</h4>
          </div>
        </NavLink>
        <NavLink to='/portfolio/design/brown-mail-kiosk' className="link-content" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/Mail Kiosk Cover.png"} alt="Mail Kiosk Cover" className="cover-image" />
            <h4>Brown University Mail Kiosk</h4>
          </div>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Design;