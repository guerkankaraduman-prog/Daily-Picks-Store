import React, { useState, useEffect } from "react";
export default function ProductFilters({
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
    "All",
    "Tech",
    "Fitness",
    "Home",
    "Lifestyle",
  ];

  return (
    <div className="product-filters">

      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() =>
            setActiveCategory(category)
          }
        >
          {category}
        </button>
      ))}

    </div>
  );
}
