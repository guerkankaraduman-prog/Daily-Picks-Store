import React from "react";
import HomeImage from "../assets/Home.jpg";
import TechImage from "../assets/Tech.jpg";
import WorkImage from "../assets/Workspace.jpg";

const products = [
  {
    title: "PHILIPS Wasserkocher",
    image: HomeImage,
    category: "Home",
  },

  {
    title: "BOSE QuietComfort Bluetooth-Kopfhörer",
    image: TechImage,
    category: "Tech",
  },

  {
    title: "APMIEK Doppelkopf Schreibtischlampe LED",
    image: WorkImage,
    category: "Work",
  },
];

export default function ProductGrid() {
  return (
    <section
      style={{
        background: "#000",
        color: "white",
        padding: "120px 60px",
      }}
    >
      <h2
        style={{
          fontSize: "56px",
          fontWeight: "900",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        Featured Picks
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(180deg,#111,#0a0a0a)",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 0 40px rgba(0,0,0,0.5)",
transition: "0.3s",
            }}
          >
            <img
  src={product.image}
  alt={product.title}
  style={{
    width: "100%",
    height: "320px",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
  }}
/>

            <div
              style={{
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#777",
                  marginBottom: "10px",
                }}
              >
                {product.category}
              </p>

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "24px",
                }}
              >
                {product.title}
              </h3>

              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  background: "white",
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                View Product →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
