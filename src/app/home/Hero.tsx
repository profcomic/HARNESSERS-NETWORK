export default function Hero() {
  return (
    <section
      className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/herosection-bg.png')",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#B8952A]/5 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#3A6B8A]/10 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Gold arc - positioned dynamically above the bottom container */}
      <svg
        className="absolute bottom-[250px] md:bottom-[300px] left-0 right-0 w-full z-0"
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

      {/* Top Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-12 text-white w-full flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <div className="inline-flex self-start items-center gap-2 bg-[#B8952A]/15 border border-[#B8952A]/40 rounded-full px-4 py-1.5 mb-6">
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

      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 shadow-2xl rounded-t-xl overflow-hidden">
          
          <div className="md:col-span-3 bg-[#f4f4f4] text-[#1E3A4A] p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black tracking-wider uppercase mb-4 text-[#1E3A4A]">
              OUR STORY
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md mb-6">
             The Harnessers Youths' Self-Help Group — was launched in 2026 and is  a registered 
             Kenyan Self Help Group uniting youth to build skills, generate income, and uplift our
             communities together.
            </p>
            <a 
              href="#about" 
              className="text-[#29b6c8] hover:text-[#1E3A4A] text-sm font-bold tracking-wide underline decoration-2 transition-colors"
            >
              Learn more
            </a>
          </div>
          <div 
            className="md:col-span-2 relative p-8 md:p-12 flex flex-col justify-center items-center text-center min-h-[250px] md:min-h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/join-us.png')" }}
          >
            {/* Overlay color tint */}
            <div className="absolute inset-0 bg-[#CC5A43]/80 mix-blend-multiply" />

            {/* Interactive content */}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl font-black tracking-widest text-white uppercase leading-none mb-6">
                BECOME A<br />MEMBER
              </h3>
              <a 
                href="#membership" 
                className="bg-white hover:bg-gray-100 text-[#CC5A43] font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-full shadow-md transition-all transform hover:scale-105"
              >
                JOIN US NOW
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}