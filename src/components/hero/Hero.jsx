import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

import "../../styles/hero.css";

export default function Hero() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    setMousePosition({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
    >

      {/* MOUSE GLOW */}
      <div
        className="mouse-glow"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      ></div>

      {/* BACKGROUND GLOW */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            x: -80,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <div className="hero-badge">
            Trending Products 2026
          </div>

          <h1 className="hero-title">
            Discover the Best
            <span> Daily Picks</span>
          </h1>

          <p className="hero-description">
            Handpicked trending products from tech,
            fitness, home and lifestyle — curated
            daily for smart shoppers.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <MagneticButton
  href="#products"
  className="hero-button-primary"
>
  Explore Products
</MagneticButton>

            <MagneticButton
  href="#about"
  className="hero-button-secondary"
>
  Learn More
</MagneticButton>

          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div className="hero-stat">
              <h3>10K+</h3>
              <p>Products Viewed</p>
            </div>

            <div className="hero-stat">
              <h3>4.9★</h3>
              <p>User Rating</p>
            </div>

            <div className="hero-stat">
              <h3>Daily</h3>
              <p>New Picks</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-visual"

          initial={{
            opacity: 0,
            x: 80,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.9,
          }}
        >

          <div className="hero-card">

            <div className="hero-card-badge">
              #1 Trending
            </div>

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Trending Product"
              className="hero-image"
            />

            <div className="hero-card-content">

              <h3>
                Premium Lifestyle Picks
              </h3>

              <p>
                Discover top-rated products selected
                for modern living and smart shopping.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
