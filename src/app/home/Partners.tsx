const partners = [
  { name: "Phroneo Spectacular Space", abbr: "PSS" },
  { name: "Women Of Value", abbr: "WOV" },
  { name: "PalmGold Agency", abbr: "PGA" },
  { name: "Shofco Organization", abbr: "SHOFCO" },
  { name: "County Government", abbr: "CG" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-[#1E3A4A] uppercase tracking-[0.15em]">
            Our Partners
          </h1>
          <div className="w-8 h-0.5 bg-[#F5C518] mx-auto mt-3" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map(({ name, abbr }) => (
            <div
              key={name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              title={name}
            >
              {/* Replace with <Image> tags once you have real partner logos */}
              <div className="h-12 flex items-center">
                <span className="text-[#1E3A4A] font-black text-lg tracking-wide">
                  {abbr}
                </span>
                <span className="text-slate-400 font-medium text-sm ml-1.5 hidden sm:inline">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
