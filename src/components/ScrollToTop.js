import React from "react";
import '../App.css';
import { ArrowUp } from "react-bootstrap-icons";

const ScrollToTop = () => {
    return (
        <div className="scroll-container">
            <button className="scroll-button" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                Scroll to Top
                <ArrowUp size="20px" />
            </button>
        </div>
    );
}

export default ScrollToTop;