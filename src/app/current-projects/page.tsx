import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const projects = [
  { tag: "Active", color: "bg-yellow-100 text-yellow-700", title: "Harnessers Food Garden Initiative", location: "Mombasa", desc: "Our Flagship community project aimed at improving food security, promoting environmental stewardship, and creating practical learning opportunities for young people.Through sustainable farming techniques, herb cultivation, and vegetable production, members gain valuable agricultural skills while contributing to household nutrition and community resilience.", goal: "Nill", raised: "N/A", pct: 100 },
  { tag: "Upcoming", color: "bg-green-100 text-green-700", title: "Youth Skills Bootcamp 2027", location: "Mombasa", desc: "A 6-week intensive bootcamp covering digital literacy, financial management, and entrepreneurship for 50 registered members.", goal: "Ksh 120,000", raised: "Ksh 30,000", pct: 20 },
  { tag: "Active", color: "bg-green-100 text-green-700", title: "Community Tree-Planting Drive", location: "Mombasa Environs", desc: "Planting Atleast 500 indigenous trees across three local schools in partnership with the County Environment Office.", goal: "Ksh 45,000", raised: "Ksh 45,000", pct: 100 },
  { tag: "Active", color: "bg-yellow-100 text-yellow-700", title: "Holiday Food Drive", location: "Mombasa", desc: "Annual December food collection and distribution drive targeting 200 vulnerable households in our community.", goal: "Ksh 60,000", raised: "Ksh 5,000", pct: 1 },
  { tag: "Upcoming", color: "bg-yellow-100 text-yellow-700", title: "Members Savings & Loan Fund", location: "Group-wide", desc: "Expanding the group loan fund to increase per-member loan limits and reduce interest rates for qualifying members.", goal: "Ksh 500,000", raised: "Ksh 210,000", pct: 42 },
  { tag: "Completed", color: "bg-slate-100 text-slate-600", title: "Constitution Drafting & Registration", location: "Committee", desc: "Successfully drafted, agreed, and registered the group constitution with the Ministry of Labour & Social Protection.", goal: "Done", raised: "Done", pct: 100 },
];

export default function CurrentProjectsPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />
      <PageHero
        eyebrow="What We Do"
        title="Current Projects"
        subtitle="A live view of what Harnessers is working on — active initiatives, upcoming drives, and recently completed milestones."
        crumbs={[{ label: "Current Projects", href: "/current-projects" }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {projects.map(({ tag, color, title, location, desc, goal, raised, pct }) => (
            <div key={title} className="border border-slate-200 rounded-xl p-8 hover:border-[#29b6c8] hover:shadow-md transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 ${color}`}>{tag}</span>
                  <h3 className="text-[#1E3A4A] font-black text-xl">{title}</h3>
                  <p className="text-[#29b6c8] text-xs font-semibold mt-0.5">📍 {location}</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-xs uppercase tracking-widest">Target</div>
                  <div className="text-[#1E3A4A] font-black text-lg">{goal}</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
              {goal !== "Done" && (
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                    <span>Raised: <span className="font-semibold text-[#1E3A4A]">{raised}</span></span>
                    <span>{pct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-[#29b6c8] h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}
