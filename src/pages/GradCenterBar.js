import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

const GradCenterBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="banner-container">
                <img src={process.env.PUBLIC_URL + "/assets/GCB Banner.png"} className="banner" />
                <div className="banner-text" style={{ right: 150, top: 280 }}>
                    <h3>Grad Center Bar</h3>
                    <h5>UX & UI</h5>
                </div>
            </div>
            <div className="section-container">
                <div className="row" style={{ gap: 40 }}>
                    <div className="column" style={{ gap: 40 }}>
                        <h2>About</h2>
                        <p><a href="https://www.gcbpvd.org/" target="_blank" className="link" style={{ letterSpacing: 0, fontSize: 18 }} >The Grad Center Bar (GCB)</a> is an on-campus hub for 21+ students to spend time with friends,
                            play a few rounds of pool, and enjoy the ambiance of the eclectic space.</p>
                        <p>I chose to redesign
                            the GCB website because of its <b>confusing layout</b> and <b>hard-to-read text</b>, making it difficult to
                            locate information. By redesigning the website, users will be able to <b>easily navigate the interface to
                            find the information they are looking for.</b></p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/assets/Old GCB.png"} className="old-gcb" />
                </div>
            </div>
            <div className="burnt-orange-section-container">
                <h2>Usability Issues</h2>
                <div className="row" style={{ gap: 20 }}>
                    <div className="column">
                        <h5>LEARNABILITY</h5>
                        <ul className="list-wrapper">
                            <li className="list">Information on the website is <b>not structured in a logical way</b> (e.g. displays large blocks of text on the home page), making it difficult for users to navigate</li>
                            <li className="list">Critical information about the establishment is <b>hidden amongst the mass of text</b>, which makes it hard to find </li>
                            <li className="list">In the mobile screen of the website, the <b>menu dropdown button is the same color as the background</b>, so users have no way to know where to click to open the menu</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5>MEMORABILITY</h5>
                        <ul className="list-wrapper">
                            <li className="list">While there are not that many components on the website, <b>the lack of hierarchies within the text makes it difficult for users to recall where the information lies</b></li>
                            <li className="list">The lack of general organization of the website causes the user to <b>search through the site numerous times</b> until they find what they are looking for</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5>EFFICIENCY</h5>
                        <ul className="list-wrapper">
                            <li className="list">Users can easily navigate to the Home and Event Form pages by using the navigation bar, but <b>they cannot easily navigate anywhere else</b> (i.e. establishment hours, location, menu)</li>
                            <li className="list">Due to <b>the lack of headers and text hierarchy</b>, it is still difficult for users to locate the information they are looking for</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h5>ACCESSIBILITY</h5>
                        <p>By running the current website through WebAim WAVE, a software that
                            identifies potential accessibility concerns of a website, I identified the following issues: </p>
                        <ul className="list-wrapper">
                            <li class="list">8 <b>very low contrast errors</b> between the items on the page and the background</li>
                            <li class="list">Suspicious <b>alternative text</b></li>
                            <li class="list">Redundant link</li>
                            <li class="list">Very small text</li>
                            <li class="list"><b>ARIA labels are not consistent</b> across the page and do not adequately describe the function of the element</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-container">
                <h2>Low-Fi Prototypes</h2>
                <p>I designed and sketched lo-fi prototypes for a <b>desktop, tablet, and mobil device</b>, incorporating solutions to the usability and accessibility issues of the original website.</p>
                <div className="column">
                    <h6>DESKTOP</h6>
                    <img src={process.env.PUBLIC_URL + "/assets/Desktop.jpg"} className="lo-fi-image" />
                </div>
                <div className="column" style={{ alignItems: "flex-end" }}>
                    <h6>TABLET</h6>
                    <img src={process.env.PUBLIC_URL + "/assets/Tablet.jpg"} className="lo-fi-image" />
                </div>
                <div className="column">
                    <h6>MOBILE</h6>
                    <img src={process.env.PUBLIC_URL + "/assets/Mobile.jpg"} className="lo-fi-image" />
                </div>

            </div>
            <div className="burnt-orange-section-container" style={{ alignItems: "center" }}>
                <h2>Style Guide</h2>
                <img src={process.env.PUBLIC_URL + "/assets/Style Guide.png"} className="style-guide-image" />
            </div>
            <div className="section-container">
                <h2>Hi-Fi Prototypes</h2>
                <p>Based on the design of lo-fi prototypes and the style guide I created, I mocked up hi-fi prototypes in Figma for the three different screen sizes.</p>
                <div className="row" style={{ gap: 50 }}>
                    <div className="column">
                        <h6>DESKTOP</h6>
                        <img src={process.env.PUBLIC_URL + "/assets/GCB Desktop gif.gif"} className="gcb-gif-desktop" />
                    </div>
                    <div className="column">
                        <h6>TABLET</h6>
                        <img src={process.env.PUBLIC_URL + "/assets/GCB Tablet gif.gif"} className="gcb-gif-tablet" />
                    </div>
                    <div className="column">
                        <h6>MOBILE</h6>
                        <img src={process.env.PUBLIC_URL + "/assets/GCB Mobile gif.gif"} className="gcb-gif-mobile" />
                    </div>
                </div>
            </div>
            <div className="burnt-orange-section-container">
                <h2>Redesign</h2>
                <p>The <a href="https://sillyduck921.github.io/gcb-redesign/" target={"_blank"} className="link-white" >redesigned GCB website</a> incorporates solutions to usability and accessibility issues while being a responsive design for numerous device sizes.</p>
                <div className="row" style={{ gap: 50 }} >
                    <div className="column">
                        <h5>DESKTOP</h5>
                        <img src={process.env.PUBLIC_URL + "/assets/GCB Final Website.png"} className="gcb-image-desktop" />
                    </div>
                    <div className="column">
                        <h5>TABLET</h5>
                        <img src={process.env.PUBLIC_URL + "/assets/GCB Final Website Tablet.png"} className="gcb-image-tablet" />
                    </div>
                    <div className="column">
                        <h5>MOBILE</h5>
                        <img src={process.env.PUBLIC_URL + "/assets/GCB Final Website Mobile.png"} className="gcb-image-mobile" />
                    </div>
                </div>
            </div>
            <div className="section-container">
                <h2>Conclusions</h2>
                <ul className="list-wrapper">
                    <li className="list">Sketching and prototyping in Figma allowed me to <b>explore different versions of the website to address the usability issues of the original website</b></li>
                    <li className="list">Creating a style guide made implementing the final website easier and the <b>final product more cohesive in style</b></li>
                    <li className="list">Implementing a responsive design led me to think more critically about the design choices I was making to ensure that <b>each screen size had user-friendly interfaces</b> and that there are <b>smooth transitions between different screen sizes</b></li>
                </ul>
            </div>
            <ScrollToTop />
        </motion.div>
    );
};

export default GradCenterBar;