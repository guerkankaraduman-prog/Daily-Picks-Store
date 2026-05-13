import { useState } from "react";

import "../../styles/products.css";

import products from "../../data/products";

import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

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

        {/* PRODUCT GRID */}
        <ProductGrid
          products={products}
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
