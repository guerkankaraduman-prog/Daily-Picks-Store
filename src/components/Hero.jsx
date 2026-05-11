import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "900",
          marginBottom: "20px",
        }}
      >
        Smart Picks.
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#999",
          maxWidth: "700px",
        }}
      >
        Curated viral Amazon products that transform your everyday routine.
      </p>
    </section>
  );
}
