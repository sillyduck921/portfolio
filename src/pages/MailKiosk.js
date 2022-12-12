import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

const MailKiosk = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="banner-container">
                <img src={process.env.PUBLIC_URL + "/assets/Mail Kiosk Banner.png"} className="banner" />
                <div className="banner-text">
                    <h3>Brown University</h3>
                    <h3>Mail Pick-Up Kiosk</h3>
                    <h5>USER RESEARCH & UX</h5>
                </div>
            </div>
            <div className="section-container">
                <div className="row">
                    <img src={process.env.PUBLIC_URL + "/assets/Mail Kiosk Sketch.png"} style={{ width: "45%" }} />
                    <img src={process.env.PUBLIC_URL + "/assets/Mail Swipe Sketch.png"} style={{ width: "60%" }} />
                </div>
                <h2>About</h2>
                <p>The Brown University Mail Pick-Up Kiosk allows students to <b>easily pick up their packages and
                    mail sent to their mailbox</b> in Page-Robinson Hall. The touch-screen interface prompts
                    users to type in their Brown ID or swipe their physical Brown ID card. Users have the option
                    to pick up their mail either now or later. The kiosk simplifies the mail pick-up process, as
                    students need only to swipe their ID card to determine which packages have arrived to pick up.</p>
                    <p>The mailroom is one of the most visited locations on campus day after day. Therefore, <b>having an efficient pick-up system is integral to maintaining the flow of students getting their mail.</b> I 
                        chose to analyze the <b>strengths and weaknesses</b> of the kiosk in hopes of identifying ways to improve the system.
                    </p>
            </div>
            <div className="orange-section-container">
                <h2>User Research</h2>
                <p>First, I observed how people interacted with the kiosk and randomly interviewed some to understand <b>highlights</b> and <b>drawbacks</b> of the interface. </p>
                <div className="row" style={{ gap: 50 }}>
                    <div className="column">
                        <h5>OBSERVATIONS</h5>
                        <ul className="list-wrapper">
                            <li className="list">All users <b>swiped their ID card</b> instead of typing in their Brown ID</li>
                            <li className="list">All users used the mail kiosk outside the mailroom instead of the screen interface inside the mailroom</li>
                            <li className="list">All users selected the <b>“Pick Up Now”</b> option and proceeded into the mailroom</li>
                            <li className="list">Most users did not have to wait in line to swipe their ID</li>
                            <li className="list">Some users swiped their ID card up and down <b>multiple times</b></li>
                            <li className="list">One user swiped their Brown ID and the search bar was filled with a few dots.
                                This was an indication that they did not swipe their ID card properly.
                                They flipped it over and swiped it again and yet again it did not process.
                                They walked to the other screen and successfully swiped their ID card</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h5>QUESTIONS</h5>
                        <ol className="list-wrapper">
                            <li className="list">How would you intuitively go about using the kiosk?</li>
                            <li className="list">How effective are the instructions posted around the kiosk?</li>
                            <li className="list">Was anything surprising or did not perform as expected?</li>
                            <li className="list">Was the interface easy to understand?</li>
                            <li className="list">What was the one thing you liked the most about the design?</li>
                            <li className="list">What was the one thing you disliked the most about the design?</li>
                            <li className="list">If you could change one thing about the design, what would it be?</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h5>USER RESPONSES</h5>
                        <ul className="list-wrapper">
                            <li className="list">Users generally agreed that <b>the kiosk and screen interface is easy to use and understand</b>. They thought the
                                instructions coupled with seeing how other people use the kiosk give new users enough information to be able
                                to successfully navigate the interface</li>
                            <li className="list">Users are generally <b>frustrated that the swiping mechanism is glitchy and does not always work.</b> Specifically, swiping
                                their ID card sometimes does not process correctly or takes a long time to read the card</li>
                            <li className="list">To improve the kiosk, one user suggested that it would be helpful to <b>improve the functionality of the screens</b> or replace
                                the card readers with newer ones. They agreed that swiping your ID card to receive your mail is easy, but the machines
                                often do not perform at their best</li>
                            <li className="list">To improve the kiosk, another user suggested that it would be <b>helpful to know your place in the pick-up queue to understand
                                how long it will take for mail services to say your name.</b> This would perhaps guide them to choose the “Cancel” option to
                                pick up later if they were in a hurry and did not have time to wait for their mail</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-container">
                <h2>Personas</h2>
                <p>With the user feedback collected, I created two personas representing how someone might <b>feel, think, say, and do</b> while interacting with the mail kiosk.</p>
                <div className="row">
                    <div className="column" style={{ padding: 25 }}>
                    <img src={process.env.PUBLIC_URL + "/assets/Personas + Storyboards-3.jpg"} className="personas-image" />
                    <p><i>Suzie has had a long day full of classes and meetings, and she wants to pick up her packages at the mailroom before it closes at 5:00 pm. 
                    After she swipes her Brown ID at the pick-up kiosk, she does not know what her packages are and how long she needs to wait before her name is called.</i></p>
                    <p style={{ marginTop: 30}}>Many users expressed frustration with the <b>unknown wait time to pick up one’s package</b>, and one user pointed out that it would be helpful to know 
                    more about package content such that they may make a better-informed decision on whether to pick up now or later.</p>
                    </div>
                    <div className="column" style={{ padding: 25 }}>
                    <img src={process.env.PUBLIC_URL + "/assets/Personas + Storyboards-4.jpg"} className="personas-image" />
                    <p><i>Sam is excited to pick up his package and strolls into Page-Robinson Hall. Sam struggles with swiping his Brown ID, 
                    as the card reader reads it incorrectly multiple times. He feels bad for holding up the line of people behind him, so he switches to the other screen in 
                    hopes that it will process correctly.</i></p>
                    <p style={{ marginTop: 30}}>Many users pointed out the glitchiness of the card readers and screen interfaces, as their <b>IDs often do not process 
                    correctly.</b> This was a significant point of frustration amongst users of the mail pick-up kiosk.</p>
                    </div>
                </div>
            </div>
            <div className="orange-section-container" style={{ gap: 0 }}>
                <h2 style={{ marginBottom: 40 }}>Storyboard</h2>
                <p style={{ marginBottom: 40 }}>I created a storyboard of the situation that Sam, one of the personas, finds himself in.</p>
                <div className="column" style={{ alignItems: "center" }}>
                    <img src={process.env.PUBLIC_URL + "/assets/Personas + Storyboards-5.jpg"} className="storyboard-image" />
                    <img src={process.env.PUBLIC_URL + "/assets/Personas + Storyboards-6.jpg"} className="storyboard-image" />
                </div>
            </div>
            <div className="section-container">
                <h2>Conclusions</h2>
                <ul className="list-wrapper">
                    <li className="list">Conducting user research allowed me to <b>understand different perspectives of people who interact with the interface</b></li>
                    <li className="list">Information about the strengths and weaknesses of the kiosk from diverse sources led me to <b>create personas that more accurately depicted people and the situations they may find themselves in</b></li>
                    <li className="list">Drawing and writing scenes that composed Sam's storyboard allowed me to further analyze how issues with the <b>interface may impact users in unique ways</b></li>
                </ul>
            </div>
            <ScrollToTop />
        </motion.div>
    );
};

export default MailKiosk;