import SmoothScroll from "./components/ui/SmoothScroll";
import Products from "./components/products/Products";
import Loader from "./components/ui/Loader";
import Particles from "./components/ui/Particles";
import Spotlight from "./components/ui/Spotlight";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll />
      <Loader />
      <Particles />
      <Spotlight />
      <Newsletter />
      <Footer />
      <Navbar />
      <Hero />
      <Products />

      <section
        style={{
          background: "#000",
          color: "white",
          padding: "120px 60px",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            fontWeight: "900",
            textAlign: "center",
            marginBottom: "70px",
            color: "#ff7a00",
          }}
        >
          Trending Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {["Tech", "Home", "Fitness", "Kitchen"].map(
            (category, index) => (
              <div
                key={index}
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "30px",
                  padding: "60px 30px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "16px",
                  }}
                >
                  {category}
                </h3>

                <p
                  style={{
                    color: "#888",
                    fontSize: "18px",
                  }}
                >
                  Discover trending Amazon finds.
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default App;
