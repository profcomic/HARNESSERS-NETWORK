"use client";

import Link from "next/link";

type StepItem = {
  number: number;
  title: string;
  description: string;
  href: string;
};

const steps: StepItem[] = [
  {
    number: 1,
    title: "ELIGIBILITY & ORIENTATION",
    description:
      "New members are introduced to our core values, ensuring readiness to serve our objectives. Open to any youth who is mentally stable, of good character, and verified by at least 5 active group members upon standard registration fee clearance.",
    href: "/join",
  },
  {
    number: 2,
    title: "PROJECTS & SKILLS TRAINING",
    description:
      "Members are equipped through targeted classes, workshops, and lectures. We focus heavily on educating the community on socio-economic life skills, implementing local capital investment plans, and active environmental protection advocacy.",
    href: "/programs",
  },
  {
    number: 3,
    title: "INCOME GENERATION",
    description:
      "We design and execute sustainable, income-generating projects directly for our members. By fostering actionable skills and true self-sufficiency, we empower youth all-roundedly to uplift households and transform entire local communities.",
    href: "/current-projects",
  },
];

export default function HowWeDoIt() {
  return (
    <section className="w-full flex flex-col">
      {/* Top Header Bar Container */}
      <div className="w-full bg-[#eaeaea] py-8 md:py-12 border-b border-gray-200 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-[0.15em] text-[#1E3A4A] uppercase">
          HOW WE DO IT
        </h2>
      </div>

      {/* Main Scenery Content Container */}
      <div
        className="w-full bg-cover bg-center relative py-16 md:py-24 px-6 flex items-center justify-center min-h-[550px]"
        style={{
          backgroundImage: "url('/images/howwedoit-bg.png')", 
        }}
      >
        {/* Subtle overlay layer to make text and cards pop over the landscape background */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {/* Step Cards Grid */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-sm shadow-2xl shadow-black/20 p-8 md:p-10 flex flex-col items-center text-center justify-between border border-gray-100 min-h-[420px]"
            >
              {/* Top Card Elements */}
              <div className="w-full flex flex-col items-center">
                {/* Number Badge circle layout */}
                <div className="w-12 h-12 rounded-full bg-[#f4f4f4] border border-gray-200 flex items-center justify-center text-xl font-bold text-[#CC5A43] mb-6 shadow-sm">
                  {step.number}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-black tracking-widest text-[#1E3A4A] uppercase mb-4">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal max-w-xs mb-8">
                  {step.description}
                </p>
              </div>

              {/* Bottom Learn More Action Button */}
              <Link
                href={step.href}
                className="bg-[#009cb4] hover:bg-[#1E3A4A] text-white text-xs font-bold tracking-wider uppercase px-8 py-3 rounded-sm transition-colors mt-auto shadow-sm"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}