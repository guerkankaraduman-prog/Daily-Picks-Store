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
    ">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Main Glow */}
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

      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center">

        <h1 className="
          text-7xl
          font-black
          text-white
        ">
          Smart Picks.
        </h1>

      </div>

    </section>
  )
}
