"use client";

import PageHero from "@/components/Universals/PageHero";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const channels = [
  {
    icon: "📧",
    label: "Email",
    value: "harnessersyouthnetwork@gmail.com",
    href: "mailto:harnessersyouthnetwork@gmail.com",
  },
  {
    icon: "📞",
    label: "Anthonney Mwanzah",
    value: "+254 113 088 424",
    href: "tel:+254113088424",
  },
  {
    icon: "📞",
    label: "Victoria Phelicia",
    value: "+254 706 220 585",
    href: "tel:+254706220585",
  },
  {
    icon: "📍",
    label: "Address",
    value: "P.O. Box 1824 - 80100, Kengeleni Road, Mombasa, Kenya",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have a question about membership, partnerships, volunteering, or our programs? Reach out and our team will gladly assist you."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Let's Connect
            </p>

            <h2 className="text-4xl font-black text-[#1E3A4A] mb-4">
              We'd Love To Hear From You
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto">
              Whether you're interested in becoming a member,
              partnering with us, volunteering, or supporting our
              mission, our team is ready to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact Channels */}
            <div>
              <h3 className="text-2xl font-black text-[#1E3A4A] mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {channels.map(({ icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <span className="text-2xl">{icon}</span>

                    <div>
                      <h4 className="font-bold text-[#1E3A4A] text-sm">
                        {label}
                      </h4>

                      {href ? (
                        <a
                          href={href}
                          className="text-slate-500 hover:text-[#29b6c8] transition-colors text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-500 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat Card */}
            <div>
              <div className="bg-[#1E3A4A] text-white rounded-2xl p-8 h-full shadow-xl">

                <p className="text-[#29b6c8] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  Chat With Us
                </p>

                <h3 className="text-3xl font-black mb-5">
                  Need Immediate Assistance?
                </h3>

                <p className="text-slate-300 leading-relaxed mb-8">
                  Talk directly with our team regarding membership,
                  community projects, partnerships, donations,
                  volunteering opportunities, or any other inquiries.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/254113088424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-500 hover:bg-green-600 transition-colors py-4 rounded-lg font-bold"
                  >
                    Chat on WhatsApp
                  </a>

                  <a
                    href="mailto:harnessersyouthnetwork@gmail.com"
                    className="block text-center bg-[#29b6c8] hover:bg-cyan-500 transition-colors py-4 rounded-lg font-bold"
                  >
                    Send Email
                  </a>

                  <a
                    href="tel:+254113088424"
                    className="block text-center border border-white/20 hover:bg-white/10 transition-colors py-4 rounded-lg font-bold"
                  >
                    Call Us
                  </a>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400">
                    Office Hours
                  </p>

                  <p className="font-semibold">
                    Monday – Friday
                  </p>

                  <p className="text-slate-300">
                    8:00 AM – 5:00 PM
                  </p>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-black text-[#1E3A4A] mb-6">
                Send Us A Message
              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />

                <textarea
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-black py-4 rounded-lg uppercase tracking-widest transition-colors"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}