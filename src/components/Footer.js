import React from "react";
import '../App.css';

const Footer = () => {
    return (
        <nav className="footer-container">
            <div>
                <a href="https://www.facebook.com/" className="link" onClick={(e) => 
          e.preventDefault()}>FACEBOOK</a>
            </div>
            <div>
                <a href="https://www.instagram.com/" className="link" onClick={(e) => 
          e.preventDefault()}>INSTAGRAM</a>
            </div>
            <div>
                <a href="https://www.linkedin.com/" className="link" onClick={(e) => 
          e.preventDefault()}> LINKEDIN</a>
            </div>
        </nav>
    );
}

export default Footer;