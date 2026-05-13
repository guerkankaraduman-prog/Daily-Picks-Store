import React from "react";

function Footer() {
  return (
    <footer className="footer-section" id="disclosure">
      <div className="footer-grid">
        <div>
          <h3>Daily Picks Store</h3>
          <p>
            Smart Amazon finds for modern living and Pinterest-inspired trends.
          </p>
        </div>

        <div>
          <h4>Social Links</h4>
          <ul>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutz</a></li>
            <li><a href="#">Disclosure</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Daily Picks Store — Affiliate links may generate commissions.
        </p>
      </div>
    </footer>
  );
}
