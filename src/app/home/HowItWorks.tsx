const steps = [
  {
    num: "01",
    title: "Register",
    desc: "Pay the one-time non-refundable registration fee of Ksh 1,000. You must be of good character and be known by at least 5 existing members of the organization.",
  },
  {
    num: "02",
    title: "Contribute",
    desc: "Make monthly contributions of Ksh 200 to the group fund. These pooled contributions support collective growth and enable members to access group resources and loans.",
  },
  {
    num: "03",
    title: "Grow Together",
    desc: "Attend monthly meetings, vote on key decisions, access loans, benefit from income-generating projects, and actively help shape the direction and future of the group.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#B8952A] text-xs font-bold uppercase tracking-[0.15em] mb-2">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A3D5C]">
            Your Journey With Us
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex gap-6 items-start bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-[#B8952A]/50 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A3D5C] to-[#3A6B8A] flex items-center justify-center text-[#B8952A] font-black text-sm tracking-wide">
                {num}
              </div>
              <div>
                <h3 className="text-[#1A3D5C] font-bold text-lg mb-1">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
