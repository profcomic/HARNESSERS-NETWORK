"use client";

export default function WorkInAction() {
  return (
    // Explicit padding utility overrides applied directly on the outer section layout wrapper
    <section className="w-full py-20 bg-[#1E3A4A] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 mx-8">
      
      {/* Centered bounding grid container that enforces safe horizontal side margins */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Section: Text Content Block */}
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-wide">
            Work In <br /> Action
          </h2>
          <div className="w-10 h-0.5 bg-[#B8952A] mt-4 mb-6" />
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-md">
            Watch our featured video to learn more about the ongoing work of{" "}
            <span className="font-bold text-white">The Harnessers Youths&apos; Self-Help Group</span>{" "}
            and see how we are dynamically transforming local communities across Kenya.
          </p>
        </div>

        {/* Right Section: YouTube Video Placeholder / Interactive Aspect Box */}
        <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl bg-black group cursor-pointer w-full">
          {/* Video Poster Thumbnail Background Layout Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 bg-gradient-to-br from-[#0D2235] to-[#2E5F7A]"
            style={{ backgroundImage: "url('/images/herosection-bg.png')" }}
          />
          
          {/* Soft Tint Overlay Layer containing Interactive Play Actions */}
          <div className="absolute inset-0 bg-[#1A3D5C]/60 flex items-center justify-center group-hover:bg-[#1A3D5C]/40 transition-colors duration-300">
            <a
              href="https://www.youtube.com/@harnessersyouthsnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Watch on YouTube"
            >
              {/* Play SVG Path Element Asset */}
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>

          {/* Social Tag Branding Indicator layout element */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 px-3 py-1.5 rounded-sm text-white text-xs font-semibold tracking-wide">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-red-500">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            WATCH ON YOUTUBE
          </div>
        </div>

      </div>
    </section>
  );
}