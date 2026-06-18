import Image from "next/image";

const partners = [
  {
    name: "Phroneo Spectacular Space",
    logo: "/images/partners/phroneo.png",
  },
  {
    name: "Women Of Value",
    logo: "/images/partners/wov.png",
  },
  {
    name: "PalmGold Agency",
    logo: "/images/partners/palmgold.png",
  },
  {
    name: "SHOFCO",
    logo: "/images/partners/shofco.png",
  },
  {
    name: "County Government",
    logo: "/images/partners/county.png",
  },
];

export default function Partners() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Strategic Partnerships
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A4A] uppercase">
            Our Partners
          </h2>

          <div className="w-16 h-1 bg-[#F5C518] mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-500 leading-relaxed">
            We collaborate with organizations, institutions, and community
            leaders who share our vision of empowering youth, strengthening
            communities, and creating sustainable impact.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-20 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h3 className="text-center text-sm font-semibold text-[#1E3A4A]">
                {partner.name}
              </h3>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">
            Interested in partnering with Harnessers Youth Network?
          </p>

          <a
            href="/contact"
            className="inline-block mt-4 bg-[#1E3A4A] hover:bg-[#29b6c8] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors"
          >
            Become a Partner
          </a>
        </div>

      </div>
    </section>
  );
}