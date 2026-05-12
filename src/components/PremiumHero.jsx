export default function PremiumHero() {
  return (
    <section
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        padding: "120px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "rgba(255,122,0,0.12)",
          filter: "blur(140px)",
          borderRadius: "999px",
          top: "-250px",
          right: "-200px",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          position: "relative",
          zIndex: 2,
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
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(255,122,0,0.25)",
              color: "#ff7a00",
              background: "rgba(255,122,0,0.08)",
              marginBottom: "30px",
              fontWeight: "600",
            }}
          >
            CURATED. TESTED. LOVED.
          </div>

          <h1
            style={{
              fontSize: "92px",
              lineHeight: "0.95",
              fontWeight: "900",
              marginBottom: "30px",
            }}
          >
            Smart Picks.
            <br />
            Better <span style={{ color: "#ff7a00" }}>Living.</span>
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.7",
              color: "#9a9a9a",
              maxWidth: "650px",
              marginBottom: "50px",
            }}
          >
            Premium curated Amazon products that upgrade your everyday
            lifestyle with innovation, aesthetics and quality.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "50px",
            }}
          >
            <button
              style={{
                background: "#ff7a00",
                color: "black",
                border: "none",
                padding: "18px 34px",
                borderRadius: "18px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Shop Trending →
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "18px 34px",
                borderRadius: "18px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              View Collections
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "50px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#ff7a00",
                  fontSize: "36px",
                  marginBottom: "8px",
                }}
              >
                500+
              </h3>

              <p style={{ color: "#777" }}>Handpicked Products</p>
            </div>

            <div>
              <h3
                style={{
                  color: "#ff7a00",
                  fontSize: "36px",
                  marginBottom: "8px",
                }}
              >
                100%
              </h3>

              <p style={{ color: "#777" }}>Amazon Verified</p>
            </div>

            <div>
              <h3
                style={{
                  color: "#ff7a00",
                  fontSize: "36px",
                  marginBottom: "8px",
                }}
              >
                Daily
              </h3>

              <p style={{ color: "#777" }}>Trending Updates</p>
            </div>
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
              maxWidth: "560px",
              background: "#111",
              borderRadius: "40px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 80px rgba(255,122,0,0.08)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop"
              alt="Premium Product"
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
