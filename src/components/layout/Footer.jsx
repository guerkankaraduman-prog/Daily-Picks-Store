import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <h2 className="footer-logo">
            DAILY <span>PICKS</span>
          </h2>

          <p className="footer-description">
            Discover trending products curated daily
            for modern shoppers and tech lovers.
          </p>

        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-column">

            <h3>Navigation</h3>

            <a href="#">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>

          </div>

          <div className="footer-column">

            <h3>Categories</h3>

            <a href="#">Tech</a>
            <a href="#">Fitness</a>
            <a href="#">Lifestyle</a>

          </div>

          <div className="footer-column">

            <h3>Socials</h3>

            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Daily Picks. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
