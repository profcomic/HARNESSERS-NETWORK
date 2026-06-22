import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Phroneo Spectacular Space",
    logo: "/images/partners/pss-logo.png",
  },
  {
    name: "Women Of Value",
    logo: "/images/partners/wov-logo.png",
  },
  {
    name: "PalmGold Agency",
    logo: "/images/partners/palmgold-logo.png",
  },
  {
    name: "SHOFCO",
    logo: "/images/partners/shofco-logo.png",
  },
  {
    name: "Mombasa County Government",
    logo: "/images/partners/dept-of-youths-msa-county.png",
  },
];

export default function Partners() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#29b6c8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F5C518]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
              className="
                group
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                p-6
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <div className="relative w-full h-24 mb-5">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="
                    object-contain
                    grayscale
                    opacity-80
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                />
              </div>

              <h3 className="text-center text-sm font-semibold text-[#1E3A4A]">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
          {/* Become a Partner */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-slate-200 text-center">
            <h1 className="text-[#29b6c8] text-2xl font-bold uppercase tracking-[0.2em] mb-3">
              Partnership Opportunity
            </h1>

            <h3 className="text-2xl md:text-3xl font-black text-[#1E3A4A] mb-4">
              Interested in Partnering with Harnessers Youth Network?
            </h3>

            <p className="text-slate-500 leading-relaxed mb-8">
              Join us in empowering communities, supporting youth initiatives,
              fostering leadership, and creating sustainable impact through
              strategic collaboration.
            </p>

            <Link
              href="/contact"
              className="
                inline-block
                bg-[#1E3A4A]
                hover:bg-[#29b6c8]
                text-white
                px-8
                py-3
                rounded-lg
                font-bold
                uppercase
                tracking-wider
                transition-colors
              "
            >
              Become a Partner
            </Link>
          </div>

          {/* See All Partners */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-slate-200 text-center">
            <h1 className="text-[#F5C518] text-3xl font-bold uppercase tracking-[0.2em] mb-3">
              Our Network
            </h1>

            <h3 className="text-2xl md:text-3xl font-black text-[#1E3A4A] mb-4">
              Explore Our Partnership Ecosystem
            </h3>

            <p className="text-slate-500 leading-relaxed mb-8">
              Discover the organizations, institutions, development partners,
              and community leaders working alongside us to transform lives and
              strengthen communities.
            </p>

            <Link
              href="/partners"
              className="
                inline-block
                bg-[#29b6c8]
                hover:bg-[#1E3A4A]
                text-white
                px-8
                py-3
                rounded-lg
                font-bold
                uppercase
                tracking-wider
                transition-colors
              "
            >
              See All Partners →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}