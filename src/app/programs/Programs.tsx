const programs = [
  {
    icon: "🌱",
    title: "Youth Empowerment",
    desc: "Empowering youth and the community holistically — socially, economically, and professionally.",
  },
  {
    icon: "💼",
    title: "Skills Development",
    desc: "Educating the community on social-economic and life skills to foster self-reliance and employability.",
  },
  {
    icon: "🤝",
    title: "Community Outreach",
    desc: "Formulating and co-operating on projects that benefit the wider community through capital investment.",
  },
  {
    icon: "🌍",
    title: "Environmental Conservation",
    desc: "Advocating for environmental protection and sustainable practices in all our activities.",
  },
  {
    icon: "💡",
    title: "Entrepreneurship",
    desc: "Carrying out income-generating projects that create real financial growth for all members.",
  },
  {
    icon: "🏅",
    title: "Leadership Training",
    desc: "Organizing charity work and leadership programs for the less fortunate in our communities.",
  },
];

export default function Programs() {
  return (
    <section className="w-full flex flex-col">
      {/* Header */}
      <div className="w-full bg-[#eaeaea] py-10 md:py-14 border-b border-gray-200 text-center">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.15em] text-[#1E3A4A]">
          What We Stand For
        </h1>

        <div className="w-16 h-1 bg-[#F5C518] mx-auto mt-4 rounded-full" />

        <h2 className="mt-5 text-xl lg:text-2xl font-black text-[#1A3D5C]">
          Our Core Programs
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-slate-600 leading-relaxed">
          Through strategic programs and community-driven initiatives,
          Harnessers Youth Network empowers individuals, strengthens families,
          and creates sustainable opportunities for growth and development.
        </p>
      </div>

      {/* Background Section */}
      <div
        className="relative w-full bg-cover bg-center py-20 md:py-28 px-6"
        style={{
          backgroundImage:
            "url('/images/backgrounds/howwedoit-bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1A3D5C]/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="
                  group
                  bg-white/50
                  backdrop-blur-sm
                  rounded-2xl
                  p-8
                  shadow-xl
                  border
                  border-white/10
                  hover:bg-[#1E3A4A]
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div className="text-5xl mb-5">{icon}</div>

                {/* Title */}
                <h3 className="text-[#1A3D5C] group-hover:text-white font-black text-xl mb-3 transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 group-hover:text-slate-200 leading-relaxed transition-colors">
                  {desc}
                </p>

                {/* Accent Line */}
                <div className="mt-6 w-12 h-1 bg-[#F5C518] rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}