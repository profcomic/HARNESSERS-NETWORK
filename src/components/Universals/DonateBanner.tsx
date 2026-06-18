import Link from "next/link";

export default function DonateBanner() {
  return (
    <section
      className="relative py-14 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/backgrounds/donate-bg.png')" }}
    >
      {/* Dark terracotta overlay — matching Ujima's reddish-brown tint */}
      <div className="absolute inset-0 bg-[#8B3A2A]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white font-black text-xl md:text-2xl uppercase tracking-[0.12em] text-center md:text-left">
          Support Us and Join Our Movement
        </p>
        <Link
          href="/donate"
          className="flex-shrink-0 border-2 border-white text-white hover:bg-white hover:text-[#8B3A2A] font-bold text-sm uppercase tracking-widest px-8 py-3 rounded transition-colors"
        >
          Support Us
        </Link>
      </div>
    </section>
  );
}
