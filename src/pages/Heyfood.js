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
            <p style={{ width: 600 }}>Heyfood is a food delivery and pickup startup for the contintent of Africa (similar to Doordash, UberEats, and Grubhub in the United States).
              The company is based in Ibadan, Nigeria, and their target population consists of Millennials and Gen Z urban professionals in
              Africa's top 70 cities.
            </p>
            <p style={{ width: 600 }}>To understand the process of design (brainstorming, prototyping, critiquing, and user testing), my group and I designed Heyfood's product as a mobile app.</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/Heyfood App.png"} className="heyfood-app-image" />
        </div>
      </div>
      <div className="teal-section-container">
        <h2>Sketching</h2>
        <p>I sketched unique versions of Heyfood's product to explore different possibilities of the interface.</p>
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
        <div className="row">
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
        <div className="row">
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
        <div className="row">
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
      <div className="section-container" style={{ alignItems: "center"}}>
        <h2>Iteractive Prototype</h2>
        <p>Click through the Heyfood prototype made on Figma!</p>
        <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDsgM32mCliKNCXyptgqzoF%2FHi-Fi%3Fnode-id%3D1%253A3%26starting-point-node-id%3D1%253A3" allowfullscreen title="Heyfood" className="iframe-heyfood"></iframe>
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export default Heyfood;