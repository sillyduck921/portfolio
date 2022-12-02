import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/design">Design</Link>
        </li>
        <li>
          <Link to="/illustration">Illustration</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;