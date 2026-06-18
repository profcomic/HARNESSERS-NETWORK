"use client";
import { useState } from "react";
import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const amounts = [500, 1000, 2500, 5000, 10000];

const uses = [
  { icon: "📚", amount: "Ksh 200", impact: "Covers one month of a member's contribution, keeping them active in the group." },
  { icon: "🛠️", amount: "Ksh 1,000", impact: "Sponsors one youth's full registration and first month in Harnessers." },
  { icon: "💡", amount: "Ksh 5,000", impact: "Funds a full-day skills workshop for up to 20 youth members." },
  { icon: "🚀", amount: "Ksh 10,000", impact: "Seed-funds a community income-generating micro-project for the group." },
];

export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");

  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />
      <PageHero
        eyebrow="Get Engaged"
        title="Support Us"
        subtitle="Your donation directly empowers Kenyan youth to build skills, access capital, and transform their communities. Every shilling counts."
        crumbs={[{ label: "Donate", href: "/donate" }]}
        teal
      />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Donation form */}
          <div>
            <h1 className="text-[#29b6c8] text-2xl font-bold uppercase tracking-[0.2em] mb-3">Make a Donation</h1>
            <h2 className="text-3xl font-black text-[#1E3A4A] mb-8">Choose an Amount</h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {amounts.map((a) => (
                <button key={a} onClick={() => { setSelected(a); setCustom(""); }}
                  className={`py-3 rounded-lg font-bold text-sm border-2 transition-all ${selected === a && !custom ? "bg-[#1E3A4A] border-[#1E3A4A] text-white" : "border-slate-200 text-[#1E3A4A] hover:border-[#29b6c8]"}`}>
                  Ksh {a.toLocaleString()}
                </button>
              ))}
              <button onClick={() => setSelected(null)}
                className={`py-3 rounded-lg font-bold text-sm border-2 transition-all ${!selected && custom ? "bg-[#1E3A4A] border-[#1E3A4A] text-white" : "border-slate-200 text-[#1E3A4A] hover:border-[#29b6c8]"}`}>
                Custom
              </button>
            </div>
            {!selected && (
              <input type="number" placeholder="Enter amount (Ksh)" value={custom} onChange={(e) => setCustom(e.target.value)}
                className="w-full border-2 border-slate-200 focus:border-[#29b6c8] rounded-lg px-4 py-3 text-sm text-[#1E3A4A] outline-none mb-4 transition-colors" />
            )}
            <div className="space-y-3 mb-6">
              {[["M-Pesa", "Pay directly via M-Pesa to our registered Paybill"], ["Bank Transfer", "Direct bank transfer to our registered account"], ["SendWave", "The digital way of Sending Money from any country globally"]].map(([label, desc]) => (
                <label key={label} className="flex items-start gap-3 p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-[#29b6c8] transition-colors">
                  <input type="radio" name="method" className="mt-0.5 accent-[#29b6c8]" defaultChecked={label === "M-Pesa"} />
                  <div>
                    <div className="text-[#1E3A4A] font-bold text-sm">{label}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{desc}</div>
                  </div>
                </label>
              ))}
            </div>
            <button className="w-full bg-[#F5C518] hover:bg-[#e0b310] text-[#1E3A4A] font-black py-4 rounded-lg text-sm uppercase tracking-widest transition-colors">
              Donate Ksh {custom || (selected?.toLocaleString() ?? "—")} →
            </button>
            <p className="text-slate-400 text-xs text-center mt-3">Donations go directly to group funds. Receipts issued on request.</p>
          </div>

          {/* Impact breakdown */}
          <div>
            <h1 className="text-[#29b6c8] text-2xl font-bold uppercase tracking-[0.2em] mb-3">Your Impact</h1>
            <h2 className="text-3xl font-black text-[#1E3A4A] mb-8">What Your Gift Does</h2>
            <div className="space-y-4">
              {uses.map(({ icon, amount, impact }) => (
                <div key={amount} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <div className="text-[#1E3A4A] font-black text-base">{amount}</div>
                    <p className="text-slate-500 text-sm leading-relaxed mt-0.5">{impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
