import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

const Heyfood = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="banner-container">
        <img src={process.env.PUBLIC_URL + "/assets/Heyfood Banner.png"} className="banner" />
        <div className="banner-text" style={{ right: 90, top: 270 }}>
          <h3>Heyfood</h3>
          <h5>BRANDING, UX, UI & USER TESTING</h5>
        </div>
      </div>
      <div className="section-container">
        <h2>About</h2>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="column" style={{ gap: 40 }}>
            <p style={{ width: 600 }}>Heyfood is a <b>food delivery and pickup startup for the contintent of Africa</b> (similar to Doordash, UberEats, and Grubhub in the United States).
              The company is based in Ibadan, Nigeria, and their target population consists of Millennials and Gen Z urban professionals in
              Africa's top 70 cities.
            </p>
            <p style={{ width: 600 }}>To understand the process of design <b>(brainstorming, prototyping, critiquing, and user testing)</b>, my group and I designed Heyfood's product as a mobile app.</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/Heyfood App.png"} className="heyfood-app-image" />
        </div>
      </div>
      <div className="teal-section-container">
        <h2>Sketching</h2>
        <p>First, I sketched unique versions of Heyfood's product to explore different possibilities of the interface. We chose to focus on three different pages: Home screen, ordering page, and checkout screen.</p>
        <h4 style={{ alignSelf: "center", marginTop: 80 }}>SKETCH 1</h4>
        <div className="row">
          <div className="column">
            <h5>HOME</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Sketch 1.png"} className="heyfood-sketch-image" />
          </div>
          <div className="column">
            <h5>ORDER</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Sketch 2.png"} className="heyfood-sketch-image" />
          </div>
          <div className="column">
            <h5>CHECKOUT</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Sketch 3.png"} className="heyfood-sketch-image" />
          </div>
        </div>
        <h4 style={{ alignSelf: "center", marginTop: 80 }}>SKETCH 2</h4>
        <div className="row">
          <div className="column">
            <h5>HOME</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Sketch 4.png"} className="heyfood-sketch-image" />
          </div>
          <div className="column">
            <h5>ORDER</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Sketch 5.png"} className="heyfood-sketch-image" />
          </div>
          <div className="column">
            <h5>CHECKOUT</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Sketch 6.png"} className="heyfood-sketch-image" />
          </div>
        </div>
      </div>
      <div className="section-container">
        <h2>Lo-Fi Prototypes</h2>
        <p>Based on the sketches, my group and I chose the elements we liked the most from the sketches and incorporated them into a lo-fi prototype.</p>
        <div className="row" style={{ gap: 50 }}>
          <div className="column">
            <h6>HOME</h6>
            <img src={process.env.PUBLIC_URL + "/assets/Home Lofi.png"} className="heyfood-lofi-image" />
          </div>
          <div className="column">
            <h6>ORDER</h6>
            <img src={process.env.PUBLIC_URL + "/assets/Order Lofi.png"} className="heyfood-lofi-image" />
          </div>
          <div className="column">
            <h6>CHECKOUT</h6>
            <img src={process.env.PUBLIC_URL + "/assets/Checkout Lofi.png"} className="heyfood-lofi-image" />
          </div>
        </div>
      </div>
      <div className="teal-section-container">
        <h2>Hi-Fi Prototypes</h2>
        <p>Using the lo-fi prototype pages as a guide, I mocked up hi-fi prototypes in Figma. The color scheme stems from Heyfood's actual app, but we chose different font styles that are more simplictic yet stylish.</p>
        <div className="row" style={{ gap: 50 }}>
          <div className="column">
            <h5>HOME DELIVERY</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Home Delivery.png"} className="heyfood-hifi-image" />
          </div>
          <div className="column">
            <h5>HOME PICKUP</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Home Pickup.png"} className="heyfood-hifi-image" />
          </div>
          <div className="column">
            <h5>ORDER</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Order.png"} className="heyfood-hifi-image" />
          </div>
        </div>
        <div className="row" style={{ gap: 50 }}>
          <div className="column">
            <h5>ITEM</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Item.png"} className="heyfood-hifi-image" />
          </div>
          <div className="column">
            <h5>CHECKOUT</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Checkout.png"} className="heyfood-hifi-image" />
          </div>
          <div className="column">
            <h5>PAYMENT</h5>
            <img src={process.env.PUBLIC_URL + "/assets/Heyfood Payment.png"} className="heyfood-hifi-image" />
          </div>
        </div>
      </div>
      <div className="section-container" style={{ alignItems: "center" }}>
        <h2>Iteractive Prototype</h2>
        <p>This is a video illustrating how a user might interact with our Heyfood prototype!</p>
        <img src={process.env.PUBLIC_URL + "/assets/Heyfood gif.gif"} className="heyfood-gif" />
      </div>
      <div className="teal-section-container">
        <h2>User Testing</h2>
        <p>After creating the hi-fi prototype, we wanted to understand the strengths and weaknesses of our design through user testing. We conducted the user testing of our app with UserTesting.com, a website in which random participants iteract with our design such that we can
          receive feedback about its usability. The following are instructions and questions the user gets when interacting with our Figma prototype:</p>
        <ol className="list-wrapper">
          <li class="list">
            Get to the Taste of Africa restaurant page and get to the checkout page.
          </li>
          <li class="list">
            Switch the page to the Pickup page.
          </li>
          <li class="list">
            How easy was the site to navigate? The options are: Very Difficult, Difficult, Neutral, Easy, and Very Easy
          </li>
          <li class="list">
            How clear are the purposes of the different buttons on the site? The options are: Very Unclear, Unclear, Somewhat Clear, Clear, and Very Clear
          </li>
        </ol>
        <p style={{ alignSelf: "flex-start"}}>The results of the user testing were the following:</p>
        <ul className="list-wrapper">
          <li className="list"><b>All three users met our expectations and were able to navigate through the app with little difficulty.</b> They found each step of the process easy to understand (choosing a restaurant,
            placing an order and checking out) and many of them were able to identify what each symbol and button did.</li>
          <li className="list">Although all three users were able to complete the main task, <b>they experienced difficulty completing our subtask of switching the mode from delivery to pickup.</b>
            This may be a result of <b>this function only existing on the home page,</b> causing users extra time to figure out how to do this.</li>
          <li className="list">Some of the users expressed frustration with that fact that <b>you cannot
            change the order from delivery to pickup at the checkout page,</b> but need to navigate all the way back to the home page to do this.</li>
        </ul>

        <p>Users were able to easily navigate through the app to complete the main task of checking out, but they struggled with switching from the delivery to pickup method. To address this issue in a future prototype, I would <b>create an option to change the delivery/pickup method on the checkout screen.</b>
        </p>
      </div>
      <div className="section-container">
        <h2>Conclusions</h2>
        <ul className="list-wrapper">
          <li className="list">As a group project, working together to <b>gather and explore design ideas made our final product more robust</b></li>
          <li className="list">Creating an interactive prototype in Figma allowed us to <b>understand how users would intereact with the real product without writing code</b></li>
          <li className="list">Understanding the purpose of the product led to design decisions that made it <b>easier for users to view items and checkout</b></li>
          <li className="list">Testing the product with random users is helpful to <b>understand how people who have never interacted with the interface before initially react to design choices</b></li>
        </ul>
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export default Heyfood;