import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ProductCard({
  product,
  onClick,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -8;

    const rotateY =
      ((x - centerX) / centerX) * 8;

    card.style.transform =
      `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      `;
  };

  const resetCard = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      `
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      `;
  };

  return (
    <motion.div
      ref={cardRef}

      className="product-card"

      onClick={onClick}

      onMouseMove={handleMouseMove}

      onMouseLeave={resetCard}

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.45,
      }}

      viewport={{
        once: true,
      }}
    >

      {/* IMAGE */}
      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

      </div>

      {/* CONTENT */}
      <div className="product-content">

        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-price">
          {product.price}
        </p>

        <a
          href={product.link || "https://amazon.com"}

          target="_blank"

          rel="noopener noreferrer"

          className="product-button"

          onClick={(e) =>
            e.stopPropagation()
          }
        >
          View Product ↗
        </a>

      </div>

    </motion.div>
  );
}
