import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* BACKGROUND GLOW */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            Trending Products 2026
          </div>

          <h1 className="hero-title">
            Discover the Best
            <span> Daily Picks</span>
          </h1>

          <p className="hero-description">
            Handpicked trending products from tech, fitness,
            home and lifestyle — curated daily for smart shoppers.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#products" className="hero-button-primary">
              Explore Products
            </a>

            <a href="#about" className="hero-button-secondary">
              Learn More
            </a>

          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div className="hero-stat">
              <h3>10K+</h3>
              <p>Products Viewed</p>
            </div>

            <div className="hero-stat">
              <h3>4.9★</h3>
              <p>User Rating</p>
            </div>

            <div className="hero-stat">
              <h3>Daily</h3>
              <p>New Picks</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="hero-card">

            <div className="hero-card-badge">
              #1 Trending
            </div>

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Trending Product"
              className="hero-image"
            />

            <div className="hero-card-content">
              <h3>Premium Lifestyle Picks</h3>

              <p>
                Discover top-rated products selected for
                modern living and smart shopping.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
