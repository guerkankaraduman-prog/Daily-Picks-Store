export default function ProductModal({
  product,
  isOpen,
  onClose,
}) {
  if (!isOpen || !product) return null;

  return (
    <div className="product-modal-overlay">

      <div className="product-modal">

        {/* CLOSE BUTTON */}
        <button
          className="product-modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        {/* IMAGE */}
        <div className="product-modal-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-modal-image"
          />
        </div>

        {/* CONTENT */}
        <div className="product-modal-content">

          <div className="product-modal-badge">
            Featured Product
          </div>

          <h2 className="product-modal-title">
            {product.title}
          </h2>

          <p className="product-modal-price">
            {product.price}
          </p>

          <p className="product-modal-description">
            Premium curated product selected for modern
            shoppers looking for quality and trending picks.
          </p>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="product-modal-button"
          >
            View On Amazon ↗
          </a>

        </div>

      </div>
    </div>
  );
}
