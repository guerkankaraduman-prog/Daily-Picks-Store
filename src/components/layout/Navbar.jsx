import React, { useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/logos/logo-v4.png";
export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="/"
          className="navbar-logo"
        >

          <img
            src={logo}
            alt="Daily Picks Logo"
            className="navbar-logo-image"
          />

          <span className="navbar-logo-text">
            DAILY <span>PICKS</span>
          </span>

        </a>

        {/* DESKTOP NAV */}
        <div className="navbar-links">

          <a href="/">Home</a>

          <a href="#products">
            Products
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

          <a
            href="https://amazon.com"

            target="_blank"

            rel="noopener noreferrer"

            className="navbar-button"
          >
            Shop Amazon ↗
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"

          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
      >

        <a
          href="/"

          onClick={() =>
            setMenuOpen(false)
          }
        >
          Home
        </a>

        <a
          href="#products"

          onClick={() =>
            setMenuOpen(false)
          }
        >
          Products
        </a>

        <a
          href="#about"

          onClick={() =>
            setMenuOpen(false)
          }
        >
          About
        </a>

        <a
          href="#contact"

          onClick={() =>
            setMenuOpen(false)
          }
        >
          Contact
        </a>

        <a
          href="https://amazon.com"

          target="_blank"

          rel="noopener noreferrer"

          className="mobile-menu-button-link"
        >
          Shop Amazon ↗
        </a>

      </div>

    </nav>
  );
}
