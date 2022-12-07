import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-responsive-masonry";

const Illustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>
        ILLUSTRATION
      </h1>
      <Masonry columnsCount={2} className="masonry" gutter="80px">
      <img width="600" height="750" src={process.env.PUBLIC_URL + "/assets/Mars Hair.jpeg"} alt="" />
        <img width="600" height="430" src={process.env.PUBLIC_URL + "/assets/Jellies.jpeg"} alt="" />
        <img width="600" height="400" src={process.env.PUBLIC_URL + "/assets/Cherry Blossom.jpeg"} alt="" />
        <img width="600" height="800" src={process.env.PUBLIC_URL + "/assets/Stairs.jpeg"} alt="" />
        <img width="600" height="480" src={process.env.PUBLIC_URL + "/assets/Collage.jpeg"} alt="" />
      </Masonry>
    </motion.div>
  );
};

export default Illustration;