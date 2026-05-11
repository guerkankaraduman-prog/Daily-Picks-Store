export default function Hero() {
  return (
    <section className="
      relative
      min-h-screen
      bg-gradient-to-b
      from-black
      via-zinc-900
      to-black
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
    ">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Main Orange Glow */}
        <div className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-orange-500/20
          blur-[140px]
          rounded-full
        " />

        {/* Secondary Glow */}
        <div className="
          absolute
          top-[250px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-amber-400/10
          blur-[120px]
          rounded-full
        " />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">

        <h1 className="
          inline-block
          text-6xl
          md:text-8xl
          font-black
          text-white
          px-8
          py-4
          rounded-3xl
          bg-gradient-to-r
          from-orange-500/90
          to-amber-400/90
          shadow-[0_0_60px_rgba(255,140,0,0.35)]
          backdrop-blur-md
        ">
          Smart Picks.
        </h1>

        <p className="
          mt-8
          text-zinc-400
          text-lg
          md:text-2xl
          leading-relaxed
        ">
          Curated viral Amazon products that transform your everyday routine.
        </p>

      </div>

    </section>
  )
}
