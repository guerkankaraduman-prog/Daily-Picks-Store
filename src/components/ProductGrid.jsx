import React from "react";

const products = [
  {
    title: "Smart LED Lamp",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    category: "Home",
  },

  {
    title: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    category: "Tech",
  },

  {
    title: "Minimal Desk Setup",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
    category: "Workspace",
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
