import React from "react";
import { motion } from "framer-motion";
  
const About = () => {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
      <div className="row" style={{ gap: 50, justifyContent: "center", padding: "80px 0px" }}>
        <img src={process.env.PUBLIC_URL + "/assets/Duck gif.gif"} className="duck" />
        <div style={{ width: 500, gap: 30 }} className="column" >
        <h6 style={{ color: "#ACACAC", margin: 0, fontSize: 16 }}>HEY.</h6>
        <p style={{ margin: 0, fontSize: 22, fontWeight: 700, marginTop: -20 }}>I'm [sillyduck921].</p>
        <p> I am currently a designer and illustration based in Providence, RI. My work centers around the intersection of sustainability and design. 
        I am interested in establishing sustainable practices both through my designs and during the design process.
        </p>
        <p>I have a background in Computer Science, Economics, and Environmental Science. Previously, I have worked as a Frontend Software Engineer Intern at Merge API, a fintech startup, and as an Environmental, Social, Governance (ESG) Summer Analyst at Bank of America. </p>
        <p>In my free time, I like to hike, doodle, and cook dinner with friends!</p>
        </div>
      </div>
    </motion.div>
  );
};
  
export default About;