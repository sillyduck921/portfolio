import React from "react";
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
            </div>
            <div className="contact-container">
                <h3>Get in touch!</h3>
                <Button text={"Contact me"} />
            </div>
        </>
    );
};

export default Home;