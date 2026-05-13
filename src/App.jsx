import React from "react";
import { motion } from "framer-motion";
import SmoothScroll from "./components/ui/SmoothScroll";
import Products from "./components/products/Products";
import Loader from "./components/ui/Loader";
import Particles from "./components/ui/Particles";
import Spotlight from "./components/ui/Spotlight";
import Newsletter from "./components/newsletter/Newsletter";
import Stats from "./components/hero/Stats";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import CustomCursor from "./components/ui/CustomCursor";

function App() {
  return (
  <motion.div

    initial={{
      opacity: 0,
      y: 20,
    }}

    animate={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  >
      <CustomCursor />
      <SmoothScroll />
      <Loader />
      <Particles />
      <Spotlight />
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Newsletter />
      <Footer />
      
      

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
    </motion.div>
  );
}

export default App;
