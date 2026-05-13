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
        Deine tägliche Auswahl der besten Deals.
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#999",
          maxWidth: "700px",
        }}
      >
        Jeden Tag unschlagbar. Daily-Picks.store kuratiert die besten Angebote aus Mode, Trend, Home & Lifestyle - exklusiv für dich.
      </p>
    </section>
  );
}

