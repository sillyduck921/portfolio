import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router }
  from 'react-router-dom';
import Footer from './components/Footer';
import AnimatedRoutes from './pages/AnimatedRoutes';

function App() {

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;