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
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#B8952A] text-5xl font-bold uppercase tracking-[0.15em] mb-2">
            What We Stand For
          </p>
          <h2 className="text-sm lg:text-xl font-black text-[#1A3D5C]">
            Our Core Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group p-8 rounded-xl border border-slate-200 hover:border-[#B8952A] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A3D5C]/10 transition-all duration-200 cursor-default"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-[#1A3D5C] font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
