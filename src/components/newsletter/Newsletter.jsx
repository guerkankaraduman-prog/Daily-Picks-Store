import React, { useState } from "react";

export default function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-container">

        <div className="newsletter-content">

          <div className="newsletter-badge">
            Stay Updated
          </div>

          <h2 className="newsletter-title">
            Get the Latest
            <span> Daily Picks</span>
          </h2>

          <p className="newsletter-description">
            Join our newsletter and discover trending
            products, exclusive picks and daily deals.
          </p>

          {/* FORM */}
          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />

            <button
              type="submit"
              className="newsletter-button"
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
