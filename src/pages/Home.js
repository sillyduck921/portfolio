import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="intro-container">
                <div className="home-text">
                    <h2 style={{ margin: 50 }}>
                        Hey there — I’m a designer & illustrator who integrates a passion for sustainability into digital storytelling and design.
                    </h2>
                </div>
                <div className="orange-block">
                </div>
                <div className="blue-block">
                </div>
                <div className="pink-block">
                </div>
                <div className="light-orange-block">
                </div>
            </div>
            <div className="highlights-container">
                <h1 className="white-text">
                    HIGHLIGHTS
                </h1>
                <div className="highlight-card-right">
                    <img src={process.env.PUBLIC_URL + "/assets/Heyfood Highlight.png"} className="highlight-image" />
                    <div className="highlight-text-left">
                        <div className="highlight-text">
                            <h3>Heyfood</h3>
                            <p>Heyfood is a food delivery and pickup startup for the contintent of Africa. I designed a mobile app of their product and explored the design procress.</p>
                            <p>Project includes: branding, user experience, user interface, and user testing</p>
                            <NavLink to='/portfolio/design/heyfood' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                                <Button text={"Take a look!"} />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="highlight-card-left">
                    <img src={process.env.PUBLIC_URL + "/assets/GCB Highlight.png"} className="highlight-image" />
                    <div className="highlight-text-right">
                        <div className="highlight-text">
                            <h3>Grad Center Bar</h3>
                            <p>The Grad Center Bar (GCB) is an on-campus hub for 21+ students. I redesigned the original GCB website to improve usability and accessibility.</p>
                            <p>Project includes: user experience and user interface.</p>
                            <NavLink to='/portfolio/design/grad-center-bar' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                                <Button text={"Take a look!"} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <h3>Get in touch!</h3>
                <Button text={"Contact me"} />
            </div>
        </motion.div>
    );
};

export default Home;