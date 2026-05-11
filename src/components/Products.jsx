import React from "react";

const products = [
  {
    category: "Kitchen",
    title: "Smart Blender Pro",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.amazon.com",
  },
  {
    category: "Fitness",
    title: "Resistance Bands Set",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.amazon.com",
  },
  {
    category: "Home",
    title: "Minimal LED Lamp",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.amazon.com",
  },
  {
    category: "Tech",
    title: "Wireless Smart Speaker",
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e52d?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.amazon.com",
  },
  {
    category: "Beauty",
    title: "Skincare Ice Roller",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.amazon.com",
  },
];

function Products() {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <span className="section-tag">TRENDING PICKS</span>
        <h2>Viral Products People Actually Love</h2>
        <p>
          Curated Pinterest-inspired Amazon finds for smarter everyday living.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />
              <span className="product-category">{product.category}</span>
            </div>

            <div className="product-content">
              <h3>{product.title}</h3>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-btn"
              >
                Shop on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
export default Products;
