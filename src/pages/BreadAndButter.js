import React from "react";
import { motion } from "framer-motion";

const BreadAndButter = () => {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
      <div className="banner-container">
        <img src={process.env.PUBLIC_URL + "/assets/Bread and Butter Banner.png"} className="banner" />
        <div className="banner-text" style={{ right: 60, top: 240 }}>
          <h3>Bread and Butter</h3>
          <h3>Bake Shop</h3>
          <h5>UX & UI</h5>
        </div>
      </div>
      <div className="section-container">
        <h2>About</h2>
      </div>
    </motion.div>
  );
};

export default BreadAndButter;