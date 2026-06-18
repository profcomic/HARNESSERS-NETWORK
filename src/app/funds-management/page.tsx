import PageHero from "@/components/Universals/PageHero";
import ContactUs from "@/components/Universals/ContactUs";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const sources = [
  { icon: "📋", title: "Registration Fee", desc: "A one-time non-refundable fee of Ksh 1,000 paid upon joining the group." },
  { icon: "📅", title: "Monthly Contributions", desc: "Each member contributes Ksh 200 per month to the collective fund." },
  { icon: "📈", title: "Surplus from Operations", desc: "Any surplus resulting from the organization's income-generating projects." },
  { icon: "🤲", title: "Donations & Grants", desc: "Accepted from individuals, organizations, and funding bodies aligned with our mission." },
  { icon: "🏦", title: "Loans from Financial Institutions", desc: "The group may access institutional loans to fund approved projects." },
  { icon: "💰", title: "Ploughing Back Profit From Projects", desc: "Any amount received from a successful project or initiative." },
];

const principles = [
  { num: "01", title: "Dual Signatories", desc: "All bank transactions require the signatures of any two from the Chairperson, Secretary, or Treasurer — ensuring no single person controls funds." },
  { num: "02", title: "Bank Account Transparency", desc: "All funds are held in a dedicated bank account in the name of the Harnessers Youths' Self-Help Group and are available for member review." },
  { num: "03", title: "Annual Audited Accounts", desc: "The Treasurer presents financial statements at the AGM. Accounts are audited and approved by the committee before presentation to members." },
  { num: "04", title: "Member Access to Records", desc: "Every member has the right to request and receive a statement of their account transactions and access internal financial records." },
  { num: "05", title: "Refund Policy", desc: "Members who exit receive 80% of their share of funds, after settling any outstanding loans or debts owed to the organization." },
  { num: "06", title: "Deficit Handling", desc: "If a deficit arises, the committee may organize a fundraising drive or additional member contributions to meet organizational demands." },
];

export default function FundsManagementPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />
      <PageHero
        eyebrow="What We Do"
        title="Funds Management"
        subtitle="Financial transparency and accountability are at the heart of how Harnessers operates. Every shilling is tracked, reported, and available for member scrutiny."
        crumbs={[{ label: "Funds Management", href: "/funds-management" }]}
      />

      {/* Sources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-2">Where Funds Come From</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Sources of Funds</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sources.map(({ icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200 hover:border-[#29b6c8] transition-all">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-[#1E3A4A] font-bold text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-2">How We Manage Money</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Our Financial Principles</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 bg-white p-7 rounded-xl border border-slate-200 hover:border-[#29b6c8] transition-all">
                <span className="text-[#F5C518] font-black text-lg mt-0.5 flex-shrink-0">{num}</span>
                <div>
                  <h3 className="text-[#1E3A4A] font-bold mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
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
