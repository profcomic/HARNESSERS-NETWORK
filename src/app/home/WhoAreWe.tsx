const pillars = [
  { value: "Ksh 1,000", label: "Registration Fee" },
  { value: "Ksh 200", label: "Monthly Contribution" },
  { value: "2/3", label: "Majority for Amendments" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#B8952A] text-xs font-bold uppercase tracking-[0.15em] mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A3D5C] leading-tight mb-6">
            A community built on mutual growth
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            The Harnessers Youths' Self-Help Group (SHG) is a duly registered
            self-help group under the Ministry of East African Community, Labour
            and Social Protection in the Republic of Kenya.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            Open to all Kenyan youth as defined under Article 260 of the
            Constitution of Kenya, we combine resources, knowledge, and passion
            to create lasting change in our communities.
          </p>

          {/* Pillars */}
          <div className="flex flex-wrap gap-8">
            {pillars.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-[#1A3D5C]">{value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#1A3D5C] to-[#2E5F7A] rounded-2xl p-10 shadow-2xl shadow-[#1A3D5C]/30">
            <div className="text-5xl mb-5">✊</div>
            <h3 className="text-white font-black text-2xl mb-4">Our Mission</h3>
            <p className="text-white/75 leading-relaxed">
              To empower youth and the community holistically — through
              education, co-operative investment, charity, environmental
              advocacy, and sustainable income generation for all members.
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[#B8952A] italic text-sm font-medium">
                "Committed to Maximizing Potential for Endless Growth"
              </p>
            </div>
          </div>
          {/* Decorative blob */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#B8952A]/15 -z-10" />
        </div>
      </div>
    </section>
  );
}
