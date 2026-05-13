export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

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
        >
          View Product ↗
        </a>

      </div>

    </div>
  );
}
