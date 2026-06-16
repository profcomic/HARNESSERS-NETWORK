import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";
import Link from "next/link";

const openings = [
  { type: "Volunteer", title: "Community Outreach Volunteer", location: "Mombasa (Field)", commitment: "Weekends / Part-time", desc: "Help coordinate community events, charity drives, and environmental campaigns. Ideal for passionate youth wanting hands-on impact experience." },
  { type: "Volunteer", title: "Social Media & Content Volunteer", location: "Remote", commitment: "5 hrs/week", desc: "Create engaging content for our social media channels, draft newsletters, and help tell the Harnessers story to the world." },
  { type: "Contract", title: "Skills Trainer — Financial Literacy", location: "Mombasa", commitment: "Occasional workshops", desc: "Deliver financial literacy, budgeting, and savings workshops to group members. Must have relevant background in finance or business." },
  { type: "Internship", title: "Program Coordination Intern", location: "Mombasa", commitment: "3 months", desc: "Support the Organizing Secretary in planning and executing group programs. Great for students in social work, community development, or project management." },
];

const typeColors: Record<string, string> = {
  Volunteer: "bg-green-100 text-green-700",
  Contract: "bg-blue-100 text-blue-700",
  Internship: "bg-yellow-100 text-yellow-700",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar /> 
      <ContactUs />
      <ChatWithUs />
      <PageHero
        eyebrow="Get Engaged"
        title="Careers & Volunteering"
        subtitle="Join our team of passionate individuals driving youth empowerment across Kenya. We are always looking for skills, energy, and commitment."
        crumbs={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Why join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Work With Us</p>
            <h2 className="text-4xl font-black text-[#1E3A4A] leading-tight mb-6">Be part of something that matters</h2>
            <div className="space-y-4">
              {[
                ["🌍", "Real Community Impact", "Your work directly reaches youth and families in Nairobi and beyond."],
                ["📈", "Grow Your Skills", "Gain hands-on experience in program management, communications, and community development."],
                ["🤝", "Supportive Team", "Work alongside a dedicated committee and a growing network of passionate members."],
                ["📜", "Reference & Experience", "Volunteering and contract roles include official letters of engagement and performance references."],
              ].map(([icon, title, desc]) => (
                <div key={String(title)} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="text-[#1E3A4A] font-bold text-sm">{String(title)}</h3>
                    <p className="text-slate-500 text-sm">{String(desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] rounded-2xl p-10 text-white">
            <div className="text-4xl mb-4">🙋</div>
            <h3 className="font-black text-2xl mb-3">Don&apos;t see your role?</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-6">We are always open to passionate individuals who want to contribute skills we may not have listed. Send us your CV and a brief note on how you can help.</p>
            <Link href="mailto:harnessersyouthnetwork@gmail.com" className="inline-block bg-[#F5C518] hover:bg-[#e0b310] text-[#1E3A4A] font-black px-6 py-3 rounded-lg text-sm uppercase tracking-wide transition-colors">Send Your CV</Link>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-2">Open Positions</p>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Current Opportunities</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="space-y-5">
            {openings.map(({ type, title, location, commitment, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-[#29b6c8] hover:shadow-md transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 ${typeColors[type]}`}>{type}</span>
                    <h3 className="text-[#1E3A4A] font-black text-xl">{title}</h3>
                    <p className="text-slate-400 text-xs mt-1">📍 {location} · ⏱ {commitment}</p>
                  </div>
                  <Link href={`mailto:harnessersyouthnetwork@gmail.com?subject=Application: ${title}`}
                    className="flex-shrink-0 bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wide">
                    Apply
                  </Link>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
