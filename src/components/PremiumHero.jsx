export default function PremiumHero() {
  return (
    <section
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        padding: "120px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,122,0,0.2)",
              color: "#ff7a00",
              background: "rgba(255,122,0,0.08)",
              marginBottom: "30px",
            }}
          >
            CURATED PREMIUM PICKS
          </div>

          <h1
            style={{
              fontSize: "90px",
              lineHeight: "0.95",
              fontWeight: "900",
              marginBottom: "30px",
            }}
          >
            Smart Picks.
            <br />
            Better Living.
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#9a9a9a",
              lineHeight: "1.7",
              maxWidth: "600px",
              marginBottom: "40px",
            }}
          >
            Premium curated Amazon finds that combine aesthetics,
            functionality and innovation.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#ff7a00",
                color: "black",
                border: "none",
                padding: "18px 36px",
                borderRadius: "18px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Shop Trending
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "18px 36px",
                borderRadius: "18px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Explore Collection
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "#111",
              borderRadius: "40px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(255,122,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop"
              alt="Premium Product"
              style={{
                width: "100%",
                height: "650px",
                objectFit: "cover",
                borderRadius: "28px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
