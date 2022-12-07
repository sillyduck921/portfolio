import React from "react";
import { motion } from "framer-motion";
  
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
    </motion.div>
  );
};
  
export default Illustration;