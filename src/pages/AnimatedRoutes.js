import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Design from "./Design";
import Illustration from "./Illustration";
import BreadAndButter from "./BreadAndButter";
import Heyfood from "./Heyfood";
import TheForager from "./TheForager";
import GradCenterBar from "./GradCenterBar";
import MailKiosk from "./MailKiosk";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route exact path='/portfolio' element={<Home />} />
          <Route path='/portfolio/about' element={<About />} />
          <Route path='/portfolio/design' element={<Design />} />
          <Route path='/portfolio/illustration' element={<Illustration />} />
          <Route path='/portfolio/design/bread-and-butter' element={<BreadAndButter />} />
          <Route path='/portfolio/design/heyfood' element={<Heyfood />} />
          <Route path='/portfolio/design/the-forager-zine' element={<TheForager />} />
          <Route path='/portfolio/design/grad-center-bar' element={<GradCenterBar />} />
          <Route path='/portfolio/design/brown-mail-kiosk' element={<MailKiosk />} />
        </Routes>
      </AnimatePresence>
  );
}

export default AnimatedRoutes;