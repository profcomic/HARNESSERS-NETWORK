import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const eligibility = [
  { icon: "🗺️", title: "Any Youth above 18 years", desc: "Open to all youth by birth, domicile, or permanent residence — as defined in Article 260 of the Constitution of Kenya, including school-going students." },
  { icon: "✅", title: "Good Character", desc: "The member must be of good character and willing to help achieve the group's objectives." },
  { icon: "🤝", title: "Known by Atleast 3 Members", desc: "You must be known and vouched for by at least 3 existing members of the organization." },
  { icon: "🧠", title: "Mentally Stable", desc: "Open to any youth who is mentally stable and ready to be empowered." },
];

const steps = [
  { num: "01", title: "Express Interest", desc: "Reach out to us via email or phone and express your interest in joining. A committee member will get back to you." },
  { num: "02", title: "Meet 3 Members", desc: "Attend a group meeting to meet current members. You need to be known and vouched for by at least 3 existing members." },
  { num: "03", title: "Documentation", desc: "You will be taken through a letter of constent, signing major documents and added to our online system." },
  { num: "04", title: "Pay Registration Fee", desc: "Pay the one-time non-refundable registration fee of Ksh 1,000 to formalize your membership." },
  { num: "05", title: "Welcome & Onboard", desc: "You will be officially inducted, oriented and receive a copy of the constitution, and begin your monthly contributions of Ksh 200 while being incubated for atleast 2 months [Probation]." },
  { num: "06", title: "Fully Member", desc: "After the incubation period, if you meet the code of conduct & met the requirements, you'll be induced into full membership." },
];

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />
      
      <PageHero
        eyebrow="Get Engaged"
        title="Join Us"
        subtitle="Become part of a community that is committed to maximizing your potential for endless growth. Membership is open, affordable, and life-changing."
        crumbs={[{ label: "Join Us", href: "/join" }]}
      />

      {/* Eligibility */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-[#29b6c8] text-2xl font-bold uppercase tracking-[0.2em] mb-2">Are You Eligible?</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Membership Requirements</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map(({ icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-[#29b6c8] hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-[#1E3A4A] font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-[#29b6c8] text-3xl font-bold uppercase tracking-[0.2em] mb-2">How to Join</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A]">4 Simple Steps</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 bg-white p-7 rounded-xl border border-slate-200 hover:border-[#29b6c8] transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] flex items-center justify-center text-[#F5C518] font-black text-sm">{num}</div>
                <div>
                  <h3 className="text-[#1E3A4A] font-bold mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="CTA" className="py-20 bg-[#29b6c8] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Join?</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">Send us a message and a committee member will guide you through the process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:harnessersyouthnetwork@gmail.com" className="bg-[#F5C518] hover:bg-[#e0b310] text-[#1E3A4A] font-black px-8 py-4 rounded-lg transition-colors text-sm uppercase tracking-wide">Email Us</a>
            <a href="tel:+254113088424" className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm uppercase tracking-wide">Call Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

