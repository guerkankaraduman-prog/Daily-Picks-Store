import React from "react";
import ProductGrid from "./components/ProductGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PremiumHero from "./components/PremiumHero";

function App() {
  return (
    <>
      <Navbar />
      <PremiumHero />
      <ProductGrid />
      <section
  style={{
    background: "#050505",
    padding: "80px 60px",
    color: "white",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "30px",
    }}
  >
    {[
      {
        title: "Premium Quality",
        text: "Handpicked top-rated Amazon products.",
      },
      {
        title: "Trusted & Safe",
        text: "Secure verified affiliate shopping.",
      },
      {
        title: "Trending Daily",
        text: "Fresh product discoveries every day.",
      },
      {
        title: "Loved by Thousands",
        text: "Community-driven smart shopping.",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            marginBottom: "18px",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#888",
            lineHeight: "1.7",
          }}
        >
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>
