export default function DailyPicksHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
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
              color: "#999",
              lineHeight: "1.7",
              maxWidth: "600px",
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
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
              alt="product"
              style={{
                width: "100%",
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
