import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

import Link from "next/link";

const partners = [
  { name: "Ministry of Labour & Social Protection", type: "Government", desc: "The Ministry under which Harnessers is officially registered as a Self-Help Group in Kenya.", abbr: "MoLSP" },
  { name: "Kenya Youth Fund", type: "Funding", desc: "Provides capital grants to registered youth groups for income-generating and community development projects.", abbr: "KYF" },
  { name: "Uwezo Fund", type: "Funding", desc: "National fund supporting youth, women, and persons with disability-led enterprises across Kenya.", abbr: "UF" },
  { name: "Local CBO Network", type: "Community", desc: "A network of community-based organizations collaborating on grassroots empowerment initiatives.", abbr: "LCBON" },
  { name: "County Government", type: "Government", desc: "County-level governance structures supporting registered community organizations and development agendas.", abbr: "CG" },
  { name: "Partner Organization", type: "Partner", desc: "We are actively seeking strategic partners. Reach out to explore how we can work together.", abbr: "+" },
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
        subtitle="We believe in the power of collaboration. Our partners share our vision of a Kenya where every young person can thrive and contribute."
        crumbs={[{ label: "Partners", href: "/partners" }]}
      />

      {/* Partners grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-2">Working Together</p>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Organizations We Work With</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map(({ name, type, desc, abbr }) => (
              <div key={name} className="border border-slate-200 rounded-xl p-8 hover:border-[#29b6c8] hover:shadow-lg transition-all group">
                {/* Logo placeholder */}
                <div className="w-16 h-16 rounded-xl bg-slate-100 group-hover:bg-[#29b6c8]/10 flex items-center justify-center mb-5 transition-colors">
                  <span className="text-[#1E3A4A] font-black text-sm">{abbr}</span>
                </div>
                <span className="inline-block text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">{type}</span>
                <h3 className="text-[#1E3A4A] font-bold text-base mb-2">{name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">Get Involved</p>
          <h2 className="text-4xl font-black text-[#1E3A4A] mb-4">Become a Partner</h2>
          <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mb-6" />
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            We are always looking for organizations, businesses, and institutions that share our passion for youth empowerment. If you are interested in partnering with Harnessers, we would love to hear from you.
          </p>
          <Link href="mailto:harnessersyouthnetwork@gmail.com" className="inline-block bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-bold px-8 py-4 rounded-lg transition-colors tracking-wide text-sm uppercase">
            Contact Us to Partner →
          </Link>
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}
