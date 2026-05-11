import React from "react";
export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 40px",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "900",
        }}
      >
        DP
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="#products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </a>

        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
      </div>
    </nav>
  );
}
