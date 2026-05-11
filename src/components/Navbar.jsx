import React from "react";
import logo from "../assets/logo-v4.png";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "34px 48px",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="Daily Picks Logo"
          style={{
            width: "110px",
            height: "110px",
            objectFit: "contain",
            borderRadius: "14px",
          }}
        />

        <span
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "800",
            letterSpacing: "-1px",
          }}
        >
          DAILY PICKS
        </span>
      </a>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "42px",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
          }}
        >
          Home
        </a>

        <a
          href="#products"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
          }}
        >
          Products
        </a>

        <a
          href="#about"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
          }}
        >
          About
        </a>

        <a
          href="#contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "17px",
          }}
        >
          Contact
        </a>

        {/* AMAZON BUTTON */}
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            backdropFilter: "blur(10px)",
            transition: "0.3s",
          }}
        >
          Shop Amazon ↗
        </a>
      </div>
    </nav>
  );
}
