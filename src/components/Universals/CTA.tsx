const eligibility = [
  "Kenyan Youth",
  "Good Character",
  "Known by 5 Members",
  "Mentally Stable",
  "Ready to be Empowered",
];

export default function CTA() {
  return (
    <section
      id="membership"
      className="relative py-24 bg-gradient-to-br from-[#0D2235] via-[#1A3D5C] to-[#2E5F7A] overflow-hidden"
    >
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-[#B8952A]/10" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#B8952A] text-xs font-bold uppercase tracking-[0.15em] mb-3">
          Join the Movement
        </p>
        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
          Ready to harness your potential?
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Membership is open to all Kenyan youth who are ready to grow and
          willing to contribute to the group&apos;s mission. Join for just{" "}
          <span className="text-[#e0c06a] font-semibold">Ksh 1,000</span>{" "}
          registration and{" "}
          <span className="text-[#e0c06a] font-semibold">Ksh 200</span> monthly.
        </p>

        {/* Eligibility chips */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {eligibility.map((item) => (
            <span
              key={item}
              className="bg-[#B8952A]/15 border border-[#B8952A]/35 text-[#e0c06a] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="mailto:harnessersyouthnetwork@gmail.com"
          className="inline-block bg-[#B8952A] hover:bg-[#9a7a22] text-white px-10 py-4 rounded-lg font-bold text-base tracking-wide transition-all hover:-translate-y-0.5 shadow-lg shadow-[#B8952A]/35"
        >
          Apply for Membership →
        </a>
      </div>
    </section>
  );
}
