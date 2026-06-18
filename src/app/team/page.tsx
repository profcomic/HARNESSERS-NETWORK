import PageHero from "@/components/Universals/PageHero";
import ContactUs from "@/components/Universals/ContactUs";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";


const board = [
  { role: "Chairperson", name: "Anthonney Mwanzah", bio: "The Chairperson presides over all meetings, represents the organization, and ensures the constitution is upheld in all decisions." },
  { role: "Vice Chairperson", name: "N/A", bio: "Supports the Chairperson in all duties and steps in during absences to ensure smooth leadership continuity." },
  { role: "Secretary", name: "Ibrahim Origha", bio: "Records all organizational correspondence, reads previous minutes, files records, and ensures accurate documentation of all proceedings." },
  { role: "Treasurer", name: "Victoria Phelicia", bio: "Receives and disburses all organizational funds, issues receipts, and maintains proper books of accounts available for inspection." },
  { role: "Organizing Secretary", name: "Victoria Phelicia", bio: "Co-ordinates all activities aimed at fulfilling the organization's objectives and assists the Secretary as assigned." },
  { role: "Committee Member", name: "Peter Lewa", bio: "Participates in committee decisions, helps execute policy, and represents member interests in governance." },
  { role: "Committee Member", name: "Esther James", bio: "Participates in committee decisions, helps execute policy, and represents member interests in governance." },
  { role: "Committee Member", name: "Emmanuel Mdzomba", bio: "Participates in committee decisions, helps execute policy, and represents member interests in governance." },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="Who We Are"
        title="Meet The Team"
        subtitle="Our governing committee is elected by registered members and serves two-year terms. They are accountable to every member of the group."
        crumbs={[{ label: "Team", href: "/team" }]}
      />

      {/* Board */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-2">The Governing Committee</p>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Committee of 8</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
            <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">Elected by two-thirds majority at the AGM or SGM. Officials hold office for two years with a maximum of two terms.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map(({ role, name, bio }, i) => (
              <div key={i} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#29b6c8] transition-all">
                {/* Photo placeholder */}
                <div className="bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] aspect-square flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#F5C518]/20 border-2 border-[#F5C518]/40 flex items-center justify-center text-3xl">👤</div>
                </div>
                <div className="p-5">
                  <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-widest mb-1">{role}</p>
                  <h3 className="text-[#1E3A4A] font-black text-lg mb-2">{name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee duties */}
      <section className="py-20 bg-[#F5C518]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-3">Governance</h1>
          <h2 className="text-3xl font-black text-[#1E3A4A] mb-8">What the Committee Does</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Uphold the constitution and execute policy decisions",
              "Invite, nominate, suspend, dismiss, or restore membership",
              "Approve progress reports and audited accounts",
              "Fix dates, times, and places for general meetings",
              "Nominate members to fill vacancies left by office bearers",
              "Maintain and regularly update a register of members",
              "Make rules addressing and effecting organizational policies",
              "Ensure the group meets at least twice every two months",
            ].map((duty, i) => (
              <div key={i} className="flex gap-3 bg-white p-4 rounded-lg border border-slate-200">
                <span className="text-[#F5C518] font-black text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-slate-600 text-sm leading-relaxed">{duty}</p>
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
