export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        background: "linear-gradient(160deg, #0D2235 0%, #1A3D5C 50%, #2E5F7A 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#B8952A]/5 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#3A6B8A]/10 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Gold arc */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 Q720,0 1440,80"
          fill="none"
          stroke="rgba(184,149,42,0.2)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-white">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#B8952A]/15 border border-[#B8952A]/40 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8952A]" />
          <span className="text-[#B8952A] text-xs font-semibold uppercase tracking-[0.15em]">
            Committed to Maximizing Potential for Endless Growth
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black max-w-4xl leading-[1.05]">
          Empowering Youths.{" "}
          <span className="bg-gradient-to-r from-[#B8952A] to-[#e0c06a] bg-clip-text text-transparent">
            Transforming Communities.
          </span>
        </h1>

        <p className="mt-6 text-xl text-white/75 max-w-2xl leading-relaxed">
          The Harnessers Youths&apos; Self-Help Group — a registered Kenyan SHG
          uniting youth to build skills, generate income, and uplift our
          communities together.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#membership"
            className="bg-[#B8952A] hover:bg-[#9a7a22] text-white px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-all hover:-translate-y-0.5 shadow-lg shadow-[#B8952A]/30"
          >
            Become a Member
          </a>
          <a
            href="#about"
            className="border border-white/30 hover:border-[#B8952A] hover:bg-[#B8952A]/10 text-white px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
