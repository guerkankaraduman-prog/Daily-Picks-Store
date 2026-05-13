import logo from "../../assets/logo-v4.png";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="/" className="navbar-logo">
          <img
            src={logo}
            alt="Daily Picks Logo"
            className="navbar-logo-image"
          />

          <span className="navbar-logo-text">
            DAILY <span>PICKS</span>
          </span>
        </a>

        {/* NAVIGATION */}
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* AMAZON BUTTON */}
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          Shop Amazon ↗
        </a>

      </div>
    </header>
  );
}
