<section className="hero">
  <div className="hero-content">

    <span className="hero-tag">
      Die besten Produkte. Jeden Tag neu entdeckt.
    </span>

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
          document
            .getElementById('products')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Explore Picks
      </a>

      <a
        href="#"
        className="btn-outline"
        onClick={() => showPage('about')}
      >
        Our Story
      </a>

    </div>
  </div>
</section>