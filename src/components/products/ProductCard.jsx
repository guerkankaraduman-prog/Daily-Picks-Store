import { motion } from "framer-motion";

export default function ProductCard({
  product,
  onClick,
}) {
  return (
    <motion.div
      className="product-card"
      onClick={onClick}

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        y: -10,
      }}

      transition={{
        duration: 0.45,
      }}

      viewport={{
        once: true,
      }}
    >

      {/* PRODUCT IMAGE */}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      {/* PRODUCT CONTENT */}
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
          onClick={(e) => e.stopPropagation()}
        >
          View Product ↗
        </a>

      </div>

    </motion.div>
  );
}
