import React from "react";
import ProductGrid from "./components/ProductGrid";
import Navbar from "./components/Navbar";
import DailyPicksHero from "./components/DailyPicksHero";

function App() {
  return (
    <>
      <Navbar />

      <DailyPicksHero />

      <ProductGrid />

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
            textAlign: "center",
            marginBottom: "70px",
            color: "#ff7a00",
          }}
        >
          Trending Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {["Tech", "Home", "Fitness", "Kitchen"].map(
            (category, index) => (
              <div
                key={index}
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "30px",
                  padding: "60px 30px",
                  textAlign: "center",
                  transition: "0.3s",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "16px",
                  }}
                >
                  {category}
                </h3>

                <p
                  style={{
                    color: "#888",
                    fontSize: "18px",
                  }}
                >
                  Discover trending Amazon finds.
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default App;
