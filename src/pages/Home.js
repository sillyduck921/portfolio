import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    return (
        <>
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
                    <img src="../assets/The Forager Highlight.png" className="highlight-image" />
                    <div className="highlight-text-left">
                        <div className="highlight-text">
                            <h3>The Forager</h3>
                            <p>The Forager is an environmental zine that celebrates the intersection of environmental themes and literary communications. As Co-Founder and Head of Web Design, I designed and implemented an online publication that showcases student stories and artwork. </p>
                            <p>Project includes: branding, user experience, and user interface.</p>
                            <NavLink to='/portfolio/design/the-forager-zine' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                                <Button text={"Take a look!"} />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="highlight-card-left">
                    <img src="../assets/Bread and Butter Highlight.png" className="highlight-image" />
                    <div className="highlight-text-right">
                        <div className="highlight-text">
                            <h3>Bread and Butter</h3>
                            <p>Bread and Butter is your local bake shop with an efficient online marketplace to browse for your favorite gourmet breads and butters.</p>
                            <p>Project includes: branding, user experience, and user interface.</p>
                            <NavLink to='/portfolio/design/bread-and-butter' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
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
        </>
    );
};

export default Home;