import { useState } from "react";
import "../../styles/products.css";
import products from "src/components/products/Products";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import ProductFilters from "./ProductFilters";
import ProductSearch from "./ProductSearch";

import Reveal from "../ui/Reveal";

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
        <Reveal>
          <div className="products-header">

            <div className="products-badge">
              Featured Picks
            </div>

            <h2 className="products-title">
              Trending Products
            </h2>

            <p className="products-description">
              Explore our handpicked collection of the
              most popular products right now.
            </p>

          </div>
        </Reveal>

        {/* FILTERS */}
        <Reveal delay={0.1}>
          <ProductFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </Reveal>

        {/* SEARCH */}
        <Reveal delay={0.15}>
          <ProductSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Reveal>

        {/* PRODUCT GRID */}
        <Reveal delay={0.2}>

          <ProductGrid
            products={filteredProducts}
            onProductClick={setSelectedProduct}
          />

        </Reveal>

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
