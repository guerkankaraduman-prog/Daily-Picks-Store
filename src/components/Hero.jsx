{/* HERO */}
  <section className="hero">
    <div className="hero-content">
      <span className="hero-tag">Die besten Produkte. Jeden Tag neu entdeckt.</span>
      <h1 className="hero-title">
  Smart Picks.<br />
  <em>Better Living.</em><br />
  Every Day.
</h1>
      <p className="hero-sub">
        Curated viral Amazon products that transform your everyday routine. 
        Handpicked for quality, value, and that spark-of-joy factor.
      </p>
      <div className="hero-buttons">
        <a
  href="#"
  className="btn-primary"
  onClick={() =>
    document.getElementById("products").scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Explore Picks
</a>
        <a href="#" className="btn-outline" onClick={() => showPage('about')}
          Our Story
        </a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-num">500+</span>
          <span className="hero-stat-label">Products Reviewed</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">4.9★</span>
          <span className="hero-stat-label">Avg. Rating</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">50k+</span>
          <span className="hero-stat-label">Happy Shoppers</span>
        </div>
      </div>
    </div>
    <div className="hero-right">
      <div className="hero-image-grid">
        <img
  src="LEER"
  alt="Daily Picks Logo"
  style={{ width: "150px", height: "auto" }}
/>
        <span style={{ fontSize: "64px" }}>
          <div className="badge">
            <span className="badge-name">Portable Blender Pro</span>
            <span className="badge-price">$34.99 on Amazon</span>
          </div>
        </div>
        <div className="hero-img-card" onClick="showProduct(1)" style="background:#EEE8DC;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px">
          <span style="font-size:44px">🎧</span>
          <div className="badge">
            <span className="badge-name">Wireless Earbuds</span>
            <span className="badge-price">$49.99</span>
          </div>
        </div>
        <div className="hero-img-card" onClick="showProduct(2)" style="background:#F0EBE0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px">
          <span style="font-size:44px">🛁</span>
          <div className="badge">
            <span className="badge-name">Silk Pillowcase Set</span>
            <span className="badge-price">$28.99</span>
          </div>
        </div>
      </div>
    </div>
  </section>
