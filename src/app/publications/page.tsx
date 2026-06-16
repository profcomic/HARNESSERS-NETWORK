import PageHero from "@/components/Universals/PageHero";
import ContactUs from "@/components/Universals/ContactUs";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";


const publications = [
  { type: "Constitution", date: "2024", title: "Harnessers Youths' SHG Constitution", desc: "The founding governance document of the organization — covering membership, obligations, elections, meetings, finances, and amendments.", file: "/documents/constitution.pdf" },
  { type: "Annual Report", date: "2024", title: "Annual Report 2024", desc: "A comprehensive overview of our activities, financial position, membership growth, and project outcomes for the year.", file: "#" },
  { type: "Newsletter", date: "Q1 2025", title: "Harnessers Quarterly — Q1 2025", desc: "Member updates, project spotlights, upcoming events, and committee announcements for the first quarter of 2025.", file: "#" },
  { type: "Policy", date: "2024", title: "Loan Policy & Guidelines", desc: "The full terms and conditions governing member loans — eligibility, limits, interest, repayment schedules, and default procedures.", file: "#" },
];

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="What We Do"
        title="Publications"
        subtitle="Official documents, reports, and communications from the Harnessers Youths' Self-Help Group — available to all members and the public."
        crumbs={[{ label: "Publications", href: "/publications" }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          {publications.map(({ type, date, title, desc, file }) => (
            <div key={title} className="flex flex-col sm:flex-row gap-6 items-start p-8 border border-slate-200 rounded-xl hover:border-[#29b6c8] hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-[#1E3A4A] rounded-xl flex items-center justify-center text-2xl">📄</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">{type}</span>
                  <span className="text-slate-400 text-xs">{date}</span>
                </div>
                <h3 className="text-[#1E3A4A] font-black text-lg mb-1">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <a href={file} className="inline-flex items-center gap-2 text-[#1E3A4A] hover:text-[#29b6c8] font-bold text-sm border-b border-[#1E3A4A]/30 hover:border-[#29b6c8] pb-0.5 transition-colors">
                  {file === "#" ? "Coming Soon" : "Download PDF →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}
