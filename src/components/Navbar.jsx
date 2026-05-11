import React from "react";
import logo from "../assets/logo-v4.png";

function Navbar() {
  return (
    <nav id="mainNav">
      <a className="nav-logo" href="/">
        <img
          src={logo}
          alt="Daily Picks Logo"
          style={{ width: "150px", height: "auto" }}
        />
      </a>

      <ul className="nav-links" id="navLinks">
        <li><a href="/">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#disclosure">Disclosure</a></li>

        <li>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Shop Amazon ↗
          </a>
        </li>
      </ul>

      <button className="menu-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
