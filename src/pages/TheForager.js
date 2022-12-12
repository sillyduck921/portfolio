import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import Masonry from "react-responsive-masonry";

const TheForager = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="banner-container">
        <img src={process.env.PUBLIC_URL + "/assets/Forager Banner.png"} className="banner" />
        <div className="banner-text" style={{ right: 80, top: 250 }}>
          <h3>The Forager Zine</h3>
          <h5>Branding, UX & UI</h5>
        </div>
      </div>
      <div className="section-container">
        <div className="row" style={{ gap: 40 }}>
          <div className="column" style={{ gap: 40 }}>
            <h2>About</h2>
            <p>The Forager is an environmental zine on Brown & RISD's campuses that celebrates the <b>intersection of environmental themes and literary communications.</b></p>
            <p>We believe storytelling through various mediums is a fundamental pillar of environmentalism and environmental justice. Our intention is to create a welcoming space for <b>those curious and passionate about the environment</b> to share their ideas with the College Hill community.</p>
            <p>I co-founded the club, led the design process of the website, established The Forager's brand, and implemented the online publication.</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/Forager About.png"} className="forager" />
        </div>
      </div>
      <div className="blue-section-container">
        <h2>Goals</h2>
        <p>Before designing and implementing the website, the other co-founders and I brainstormed goals for the online publication. These goals are meant to guide our design decisions to better engage users.</p>
        <div className="row" style={{ gap: 20 }}>
          <div className="column">
            <h5>ENGAGEMENT</h5>
            <ul className="list-wrapper">
              <li className="list">Website highlights key features such as <b>recent articles and illustrations</b></li>
              <li className="list">Links to The Forager's Instagram and email are easy to find</li>
              <li className="list"><b>Illustrations and color scheme</b> adhere to The Forager's <b>biweekly themes</b></li>
              <li className="list">Audience can easily hop around the website to <b>explore different sections</b></li>
            </ul>
          </div>
          <div className="column">
            <h5>USABILITY</h5>
            <ul className="list-wrapper">
              <li className="list">Having the links/tabs to other pages within the site <b>easily found and accessibility</b> at all times</li>
              <li className="list">Hierarchy amongst font sizes and colors to indicate differences in page content</li>
              <li className="list">Keeping the <b>page format consistent with the upload of new articles and illustrations</b></li>
              <li className="list">Individual pages have a logical flow in their content</li>
            </ul>
          </div>
          <div className="column">
            <h5>ACCESSIBILITY</h5>
            <ul className="list-wrapper">
              <li className="list">Large text such that audiences with impaired vision can still meaningfully engage with the publication</li>
              <li className="list"><b>Alternative text</b> for images for a screenreader</li>
              <li className="list">Providing enough <b>contrast between the page background and the text and illustrations</b></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-container">
        <h2>Publication</h2>
        <p>To make it easier to renew the domain, the website is hosted on Squarespace. Instead of mocking up prototypes in Figma, I played around with the different built-in tools Squarespace has to offer, only to end up injecting my own HTML code in many parts of the website.<a href="https://www.theforagerzine.com/" target={"_blank"} className="link" style={{ letterSpacing: 0, fontSize: 20}}>The Forager</a> website aims to engage readers by making the website easy to use and accessible. </p>
        <Masonry columnsCount={2} className="masonry" gutter="50px">
          <img src={process.env.PUBLIC_URL + "/assets/Forager 1.png"} className="forager-image" />
          <img src={process.env.PUBLIC_URL + "/assets/Forager 2.png"} className="forager-image" />
          <img src={process.env.PUBLIC_URL + "/assets/Forager 4.png"} className="forager-image" />
          <img src={process.env.PUBLIC_URL + "/assets/Forager 3.png"} className="forager-image" />
          <img src={process.env.PUBLIC_URL + "/assets/Forager 5.png"} className="forager-image" />
          <img src={process.env.PUBLIC_URL + "/assets/Forager 6.png"} className="forager-image" />
        </Masonry>
      </div>
      <div className="blue-section-container">
        <h2>Conclusions</h2>
        <ul className="list-wrapper">
          <li className="list">Since The Forager is an online publication with weekly new articles and illustrations, I created a design that would <b>allow new content to be easily added</b></li>
          <li className="list"><b>Brainstorming and outlining the publication's goals</b> as the first step of the design process <b>allowed the rest of the process to flow more seemlessly</b></li>
          <li className="list">Exploring different formats of the landing page <b>inspired a more innovative design that immediately grabs the user's attention</b></li>
        </ul>
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export default TheForager;