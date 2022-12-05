import React from "react";

const MailKiosk = () => {
    return (
        <>
            <div className="banner-container">
                <img src={'/assets/Mail Kiosk Banner.png'} className="banner" />
                <div className="banner-text">
                    <h3>Brown University</h3>
                    <h3>Mail Pick-Up Kiosk</h3>
                    <h5>USER RESEARCH & UX</h5>
                </div>
            </div>
            <div className="section-container">
                <img src={'/assets/Mail Kiosk Sketch.png'} style={{ width: "45%"}} />
                <img src={'/assets/Mail Swipe Sketch.png'} style={{ width: "60%"}} />
            </div>
        </>
    );
};

export default MailKiosk;