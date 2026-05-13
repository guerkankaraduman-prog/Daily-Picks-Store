import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  onProductClick,
}) {
  return (
    <div className="products-grid">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}

    </div>
  );
}
