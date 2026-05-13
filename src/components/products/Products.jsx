import { useState } from "react";

import "../../styles/products.css";

import products from "../../data/products";

import ProductSearch from "./ProductSearch";

import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import ProductFilters from "./ProductFilters";

export default function Products() {
  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [activeCategory, setActiveCategory] =
    useState("All");
  
  const [searchTerm, setSearchTerm] =
  useState("");

  const filteredProducts = products.filter(
  (product) => {

    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  }
);

  return (
    <section className="products" id="products">

      <div className="products-container">

        {/* HEADER */}
        <div className="products-header">

          <div className="products-badge">
            Featured Picks
          </div>

          <h2 className="products-title">
            Trending Products
          </h2>

          <p className="products-description">
            Explore our handpicked collection of the most
            popular products right now.
          </p>

        </div>

        {/* FILTERS */}
        <ProductFilters
          <ProductSearch
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

        {/* PRODUCT GRID */}
        <ProductGrid
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />

      </div>

      {/* PRODUCT MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
}
