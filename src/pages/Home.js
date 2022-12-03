import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    return (
        <>
            <div className="intro-container">
                <div className="home-text">
                    <h2>
                        Hey there — I’m a designer & illustrator based in Providence, RI who integrates a passion for sustainability into digital storytelling and design.
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
                    <img src="./assets/The Forager Highlight.png" className="highlight-image" />
                    <div className="highlight-text-left">
                        <div className="highlight-text">
                            <h4>The Forager</h4>
                            <p>blah blah blah</p>
                            <NavLink to='/design/the-forager-zine'>
                                <Button text={"Take a look!"} />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="highlight-card-left">
                    <img src="./assets/Bread and Butter Highlight.png" className="highlight-image" />
                    <div className="highlight-text-right">
                        <div className="highlight-text">
                            <h4>Bread and Butter</h4>
                            <p>blah blah blah</p>
                            <NavLink to='/design/bread-and-butter'>
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