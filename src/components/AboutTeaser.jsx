import React from "react";

function AboutTeaser() {
  return (
    <section className="about-section" id="about">
      <div className="about-card glass">
        <span className="section-tag">WHY DAILY PICKS</span>

        <h2>Curated Viral Finds For Modern Living</h2>

        <p>
          We discover Pinterest-inspired Amazon products designed to improve your
          daily life. Every product is selected for quality, design, usefulness,
          and aesthetic appeal.
        </p>

        <div className="trust-grid">
          <div className="trust-item glass">
            <h3>Curated Viral Finds</h3>
            <p>
              We hand-pick trending Amazon products with real everyday value.
            </p>
          </div>

          <div className="trust-item glass">
            <h3>Affiliate Disclosure</h3>
            <p>
              We may earn commissions from qualifying purchases at no extra cost
              to you.
            </p>
          </div>

          <div className="trust-item glass">
            <h3>Pinterest Inspired Picks</h3>
            <p>
              Aesthetic products inspired by modern Pinterest trends and luxury
              lifestyle design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeaser;
