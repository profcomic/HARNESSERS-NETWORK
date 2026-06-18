"use client";

import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const channels = [
  { icon: "📧", label: "Email", value: "harnessersyouthnetwork@gmail.com", href: "mailto:harnessersyouthnetwork@gmail.com" },
  { icon: "📞", label: "Anthonney Mwanzah", value: "+254 113 088 424", href: "tel:+254113088424" },
  { icon: "📞", label: "Victoria Phelicia", value: "+254 706 220 585", href: "tel:+254706220585" },
  { icon: "📍", label: "Address", value: "P.O. Box 1824 - 80100, Kengeleni Road, Mombasa, Kenya", href: null },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ChatWithUs />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have a question about membership, partnerships, or our programs? Reach out — a committee member will respond as soon as possible."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Channels */}
          <div>
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">Reach Us Directly</p>
            <h2 className="text-3xl font-black text-[#1E3A4A] mb-8">Talk to the Team</h2>
            <div className="space-y-4">
              {channels.map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <div className="text-[#1E3A4A] font-bold text-sm">{label}</div>
                    {href ? (
                      <a href={href} className="text-slate-500 text-sm hover:text-[#29b6c8] transition-colors">{value}</a>
                    ) : (
                      <p className="text-slate-500 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simple message form (static, non-functional placeholder) */}
          <div>
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">Send a Message</p>
            <h2 className="text-3xl font-black text-[#1E3A4A] mb-8">We&apos;d Love to Hear From You</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm text-[#1E3A4A] outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm text-[#1E3A4A] outline-none transition-colors"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm text-[#1E3A4A] outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-black py-4 rounded-lg text-sm uppercase tracking-widest transition-colors"
              >
                Send Message
              </button>
              <p className="text-slate-400 text-xs text-center">
                Prefer email? Reach us directly at{" "}
                <a href="mailto:harnessersyouthnetwork@gmail.com" className="text-[#29b6c8] hover:underline">
                  harnessersyouthnetwork@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
