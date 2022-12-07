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
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="column" style={{ gap: 40 }}>
            <h2>About</h2>
            <p style={{ width: 600 }}>Bread and Butter is a local bake shop that is dedicated to the delicious combination of bread and butter. The shop sells their homemade goods, locally-sourced treats, and imported products.
            </p>
            <p style={{ width: 600 }}>I designed and implemented a React app of an online marketplace, allowing Bread and Butter fanatics to search for and save their favorite treats.</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/Maple Icon.png"} className="maple-image" />
        </div>
      </div>
      <div className="pink-section-container">
        <h2>Design Considerations</h2>
        <div className="row">
          <div className="column">
            <h5>USER EXPERIENCE</h5>
            <ul className="list-wrapper">
              <li className="list">Ability to easily filter the list of items based on type of product and source location of the products (i.e. made in-house, locally, or imported)</li>
              <li className="list">Item cards with the item's picture, description, and price such that users have an immediate impression of the item</li>
              <li className="list">Price tracker for the favorites list to provide information to the user about the price of everything in their favorites list</li>
              <li className="list">User can easily toggle back and forth between the main page and the favorites list</li>
            </ul>
          </div>
          <div className="column">
            <h5>USER INTERFACE</h5>
            <ul className="list-wrapper">
              <li className="list">Rustic yet vibrant colors to fit the branding and overall vibe of the bake shop</li>
              <li className="list">Text that is easy-to-read and conveys a hierarchy through font size and font color</li>
              <li className="list">Items are arranged in a grid structure to provide consistency across the interface</li>
              <li className="list">Images of the items are visually pleasing and grabs the attention of the user</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-container">
        <h2>Final Website</h2>
        <p>Click <a href="https://sillyduck921.github.io/development/" target={"_blank"} className="link" style={{ letterSpacing: 0, fontSize: 18 }}>here</a> to see the Bread and Butter Bake Shop website in action!</p>
        <div className="row">
          <img src={process.env.PUBLIC_URL + "/assets/Bread gif 1.gif"} className="bread-gif" />
          <img src={process.env.PUBLIC_URL + "/assets/Bread gif 2.gif"} className="bread-gif"/>
          <img src={process.env.PUBLIC_URL + "/assets/Bread gif 3.gif"} className="bread-gif"/>
        </div>
      </div>
    </motion.div>
  );
};

export default BreadAndButter;