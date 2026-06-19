import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const partners = [
  {
    name: "Phroneo Spectacular Space",
    type: "Partner",
    desc: "A creative and community space collaborating with Harnessers on youth-focused events, branding, content creation, outreach, and technological initiatives.",
    logo: "/images/partners/pss-logo.png",
  },
  {
    name: "Women Of Value",
    type: "Community",
    desc: "A women-led organization partnering with Harnessers on empowerment and mentorship programs.",
    logo: "/images/partners/wov-logo.png",
  },
  {
    name: "PalmGold Agency",
    type: "Strategic Partner",
    desc: "A domestic workers recruitment firm, trainer of trainers, capacity-building organization, and real estate agency supporting youth empowerment and economic growth.",
    logo: "/images/partners/palmgold-logo.png",
  },
  {
    name: "Shofco Organization",
    type: "Community",
    desc: "A leading grassroots organization collaborating with Harnessers on community development programs.",
    logo: "/images/partners/shofco-logo.png",
  },
  {
    name: "County Government",
    type: "Government",
    desc: "County-level governance structures supporting registered community organizations and development agendas.",
    logo: "/images/partners/dept-of-youths-msa-county.png",
  },
  {
    name: "Become a Partner",
    type: "Open",
    desc: "Join our growing network of organizations, institutions, businesses, and development partners.",
    logo: "/images/partners/become-a-partner.png",
    href: "#get-involved",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="Who We Are"
        title="Our Partners"
        subtitle="We believe in the power of collaboration. Our partners share our vision of a world where every young person can thrive, lead, and contribute meaningfully to society."
        crumbs={[{ label: "Partners", href: "/partners" }]}
      />

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#29b6c8] font-bold uppercase tracking-[0.25em] mb-3">
              Working Together
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A4A] mb-4">
              Organizations We Work With
            </h2>

            <div className="w-16 h-1 bg-[#F5C518] mx-auto rounded-full" />

            <p className="max-w-3xl mx-auto mt-6 text-slate-500 leading-relaxed">
              Through partnerships and collaboration, we expand our impact,
              strengthen communities, and create sustainable opportunities for
              young people across Kenya.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => {
              const card = (
                <div
                  className={`group bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl h-full ${
                    partner.name === "Become a Partner"
                      ? "hover:border-[#F5C518] hover:shadow-[0_0_25px_rgba(245,197,24,0.25)] cursor-pointer hover:-translate-y-2"
                      : "hover:border-[#29b6c8]"
                  }`}
                >
                  {/* Logo Area */}
                  {partner.name === "Become a Partner" ? (
                    <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center overflow-hidden mb-6 mx-auto relative">
                      {/* Default Logo */}
                      <Image
                        src="/partners/become-partner.png"
                        alt="Become a Partner"
                        width={90}
                        height={90}
                        className="absolute object-contain transition-all duration-300 group-hover:opacity-0 group-hover:scale-75"
                      />

                      {/* Plus Icon */}
                      <span className="absolute text-6xl font-light text-[#F5C518] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        +
                      </span>
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center overflow-hidden mb-6 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={90}
                        height={90}
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* Type */}
                  <div className="text-center mb-4">
                    <span className="inline-block text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-center text-[#1E3A4A] font-bold text-xl mb-3">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-slate-500 text-sm leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              );

              return partner.href ? (
                <Link
                  key={partner.name}
                  href={partner.href}
                  className="block h-full"
                >
                  {card}
                </Link>
              ) : (
                <div key={partner.name}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="get-involved"
        className="py-24 bg-slate-50 scroll-mt-32"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#29b6c8] font-bold uppercase tracking-[0.25em] mb-3">
            Get Involved
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A4A] mb-4">
            Become a Partner
          </h2>

          <div className="w-16 h-1 bg-[#F5C518] mx-auto rounded-full mb-8" />

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            We are always looking for organizations, institutions,
            businesses, and development partners who share our passion
            for youth empowerment, innovation, and sustainable community
            development. Together, we can achieve greater impact.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Contact Us to Partner →
          </Link>
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}