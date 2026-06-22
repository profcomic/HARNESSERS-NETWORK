import Link from "next/link";

export default function MemberSpotlight() {
  return (
    <section className="grid md:grid-cols-2 min-h-[400px]">
      {/* Left: photo — replace bg with actual member photo when available */}
      <div
        className="relative bg-cover bg-center bg-gradient-to-br from-[#1A3D5C] to-[#2E5F7A] min-h-[320px]"
        style={{ backgroundImage: "url('/images/backgrounds/join-us.png')" }}
      >
        {/* Tint overlay for legibility and brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D5C]/85 to-[#2E5F7A]/70" />
      </div>

      {/* Right: story card */}
      <div className="bg-[#29b6c8] flex items-center px-12 py-16">
        <div>
          <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Member Spotlight
          </p>
          <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-wide mb-5">
            Meet<br />Victoria 
          </h2>
          <p className="text-white/85 text-sm leading-relaxed mb-6 max-w-xs">
            Victoria Esimi is one of the founders and an entrepreneur in the hospitality industry.
            She uses her skills to impact those in harnessers youth network. After completing her training,
            she launched a small business. Today she employs three
            young women from her village and is saving to expand.
          </p>
          <Link
            href="/blog"
            className="inline-block text-white font-bold text-sm border-b-2 border-white/50 hover:border-white pb-0.5 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
