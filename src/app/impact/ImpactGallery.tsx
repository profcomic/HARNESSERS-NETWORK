import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";


const stats = [
  { val: "20+", label: "Active Members" },
  { val: "3+", label: "Projects Completed" },
  { val: "3", label: "Communities Reached" },
  { val: "80%", label: "Member Satisfaction" },
];

const stories = [
  { name: "Esther J.", title: "From Zero to Employer", quote: "Before Harnessers, I had no capital and no plan. The group loan gave me the start I needed. Today I run a saloon business and employ two other youth from my area.", tag: "Business" },
  { name: "Patrick N.", title: "Skills That Changed Everything", quote: "The financial literacy workshop opened my eyes. I stopped living paycheck to paycheck and started saving. Within a year I had enough to pay school fees and start a side hustle.", tag: "Financial Literacy" },
  { name: "Sebastian M.", title: "A Voice in the Room", quote: "I never thought I would be a committee member. Harnessers taught me to speak up, lead, and advocate. Now I represent our members and I love every bit of it.", tag: "Leadership" },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="What We Do"
        title="Our Impact"
        subtitle="Numbers tell one story. The lives of our members tell a better one. Here is what Harnessers has meant to the people who make it what it is."
        crumbs={[{ label: "Impact", href: "/impact" }]}
      />

      {/* Stats */}
      <section className="py-16 bg-[#1E3A4A]">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ val, label }) => (
            <div key={label} className="text-center p-8 bg-white/5 rounded-xl border border-[#F5C518]/20">
              <div className="text-5xl font-black text-[#F5C518]">{val}</div>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-3">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Member stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-2">Real Stories</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Member Spotlights</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map(({ name, title, quote, tag }) => (
              <div key={name} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] h-40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#F5C518]/20 border-2 border-[#F5C518]/40 flex items-center justify-center text-2xl">👤</div>
                </div>
                <div className="p-7">
                  <span className="inline-block text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">{tag}</span>
                  <h3 className="text-[#1E3A4A] font-black text-lg mb-1">{title}</h3>
                  <p className="text-[#29b6c8] text-xs font-semibold mb-3">{name}</p>
                  <p className="text-slate-500 text-sm leading-relaxed italic">&quot;{quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}
