import React from "react";

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "100px 60px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Smart Picks.
        <br />
        Better Living.
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          color: "#ccc",
        }}
      >
        Curated viral Amazon products that transform your everyday routine.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "16px 28px",
          borderRadius: "12px",
          border: "none",
          background: "#ff7a00",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Explore Picks
      </button>
    </section>
  );
}

export default Hero;
