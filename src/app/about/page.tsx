import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import WhoAreWe from "@/app/about/WhoAreWe"
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";
import Link from "next/link";

const values = [
  { icon: "🤝", title: "Ubuntu", desc: "We believe in collective responsibility — the success of one uplifts the whole community." },
  { icon: "🌱", title: "Growth", desc: "Every member has untapped potential. We provide the tools, mentorship, and space to grow." },
  { icon: "🔒", title: "Integrity", desc: "We operate transparently, with all funds and decisions accountable to our members." },
  { icon: "💡", title: "Innovation", desc: "We continuously seek new solutions to youth unemployment and community challenges allroundedly." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar /> 
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />
      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="We believe every youth has great potential, but often lacks access to opportunity and the support necessary to succeed. That is why Harnessers was founded."
        crumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Our Story */}
      <section id="Our-Story" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-3">Our Story</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A] leading-tight mb-6">Born from the community, built for the community</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed text-sm">
              <p>The Harnessers Youths Self-Help Group is based in the outskits of Mombasa city, founded in 2025 by a group of passionate youths who recognized that when young people pool their <em>energy, resources, and ambition, they become unstoppable.</em> 
                Registered under the Ministry of East African Community, Labour and Social Protection, we created a structured, accountable platform for youth empowerment.</p>
              <p>Our founders saw that barriers between ambitious youth and economic opportunity were real but solvable — lack of capital, missing skills, and no professional networks. The SHG model offered a proven, 
                grassroots answer: <br/> 
                <b>MEMBERS CONTRIBUTE TOGETHER;<br/>
                 SUPPORT EACH OTHER; and <br/> 
                 GROW TOGETHER.</b>
              </p>
              <p>Today, our group runs monthly meetings, income-generating projects, skills workshops, and community charity drives — all governed by a <u>transparent, democratic constitution</u> that gives every member <b>an equal voice.</b></p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl aspect-video flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-300">
              📸 Group Photo Loading..........
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["Mombasa", "Base Location"], ["World-wide", "Membership Open"], ["MOL Reg.", "Official Status"], ["2 yrs", "Official Term"]].map(([val, lbl]) => (
                <div key={lbl} className="bg-[#1E3A4A] rounded-xl p-5">
                  <div className="text-[#F5C518] font-black text-lg">{val}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mt-1">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <WhoAreWe/>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-2">What Drives Us</h1>
            <h2 className="text-4xl font-black text-[#1E3A4A]">Our Core Values</h2>
            <div className="w-10 h-0.5 bg-[#F5C518] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-[#29b6c8] hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-[#1E3A4A] font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#1E3A4A] px-12 py-16">
          <h2 className="text-[#F5C518] text-2xl font-bold uppercase tracking-widest mb-3">Our Mission</h2>
          <h3 className="text-white font-black text-2xl mb-4 leading-snug">To empower youth and communities — all roundedly.</h3>
          <p className="text-white/70 text-sm leading-relaxed">Through education, co-operative investment, charity, environmental advocacy, and sustainable income generation, we build pathways to a better life for every member.</p>
        </div>
        <div className="bg-[#29b6c8] px-12 py-16">
          <h2 className="text-white/70 text-2xl font-bold uppercase tracking-widest mb-3">Our Vision</h2>
          <h3 className="text-white font-black text-2xl mb-4 leading-snug">A Community where every young person maximizes their potential.</h3>
          <p className="text-white/80 text-sm leading-relaxed">We envision self-reliant communities where youth are not just participants but leaders, contributors, and change-makers supported by strong peer networks.</p>
        </div>
      </section>

      <div className="py-10 bg-white text-center">
        <Link href="/team" 
        className="inline-block bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-bold px-8 py-4 rounded-lg transition-colors tracking-wide text-sm uppercase">Meet Our Team →</Link>
      </div>

      <DonateBanner />
      <Footer />
    </>
  );
}
