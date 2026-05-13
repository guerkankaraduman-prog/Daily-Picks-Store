import "../../styles/products.css";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Apple Watch Ultra",
      price: "$799",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    },
    {
      id: 2,
      title: "Sony Headphones",
      price: "$349",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      title: "Gaming Setup",
      price: "$1299",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },
  ];

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

        {/* GRID */}
        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>

              <div className="product-content">

                <h3>{product.title}</h3>

                <p className="product-price">
                  {product.price}
                </p>

                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-button"
                >
                  View Product ↗
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
