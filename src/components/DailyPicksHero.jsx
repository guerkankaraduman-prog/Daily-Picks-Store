export default function DailyPicksHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "80px",
        gap: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "rgba(255,122,0,0.15)",
          filter: "blur(140px)",
          borderRadius: "999px",
          right: "-200px",
          top: "-100px",
        }}
      />

      {/* LEFT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            border: "1px solid rgba(255,122,0,0.3)",
            borderRadius: "999px",
            color: "#ff7a00",
            marginBottom: "30px",
            background: "rgba(255,122,0,0.08)",
          }}
        >
          LIVE HIGH-END CAMPAIGN
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
          Better Living.
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#999",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Premium curated Amazon products that upgrade your everyday life with
          aesthetics, functionality and innovation.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
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
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "18px 36px",
              borderRadius: "18px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            View Collection
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "500px",
            background: "#111",
            borderRadius: "40px",
            padding: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
            alt="product"
            style={{
              width: "100%",
              height: "620px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
