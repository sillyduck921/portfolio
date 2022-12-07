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
                            the GCB website because of its confusing layout and hard-to-read text, making it difficult to
                            locate information. By redesigning the website, users will be able to easily navigate the interface to
                            find the information they are looking for.</p>
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
                            <li className="list">Information on the website is not structured in a logical way (e.g. displays large blocks of text on the home page), making it difficult for users to navigate</li>
                            <li className="list">Critical information about the establishment is hidden amongst the mass of text, which makes it hard to find </li>
                            <li className="list">In the mobile screen of the website, the menu dropdown button is the same color as the background, so users have no way to know where to click to open the menu</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5>MEMORABILITY</h5>
                        <ul className="list-wrapper">
                            <li className="list">While there are not that many components on the website, the lack of hierarchies within the text makes it difficult for users to recall where the information lies</li>
                            <li className="list">The lack of general organization of the website causes the user to search through the site numerous times until they find what they are looking for</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5>EFFICIENCY</h5>
                        <ul className="list-wrapper">
                            <li className="list">Users can easily navigate to the Home and Event Form pages by using the navigation bar, but they cannot easily navigate anywhere else (i.e. establishment hours, location, menu)</li>
                            <li className="list">Due to the lack of headers and text hierarchy, it is still difficult for users to locate the information they are looking for</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h5>ACCESSIBILITY</h5>
                        <p>By running the current website through WebAim WAVE, a software that
                            identifies potential accessibility concerns of a website, I identified the following issues: </p>
                        <ul className="list-wrapper">
                            <li class="list">8 very low contrast errors between the items on the page and the background</li>
                            <li class="list">Suspicious alternative text</li>
                            <li class="list">Possible heading</li>
                            <li class="list">Redundant link</li>
                            <li class="list">Very small text</li>
                            <li class="list">ARIA labels are not consistent across the page and do not adequately describe the function of the element</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-container">
                <h2>Low-Fi Prototypes</h2>
                <p>I designed and sketched lo-fi prototypes for a desktop, tablet, and mobil device, incorporating solutions to the usability and accessibility issues of the original website.</p>
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
            <ScrollToTop />
        </motion.div>
    );
};

export default GradCenterBar;