import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import AboutTeaser from "./components/AboutTeaser";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <AboutTeaser />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;