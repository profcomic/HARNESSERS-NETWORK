import Image from "next/image";
import Link from "next/link";

const projectStats = [
  { value: "2026", label: "Launch Year" },
  { value: "2", label: "Active Projects" },
  { value: "100+", label: "Youth Beneficiaries Targeted" },
];

export default function SpotlightProject() {
  return (
    <section id="current-project" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Project Description */}
        <div>
          <h1 className="text-[#B8952A] text-4xl font-bold uppercase tracking-[0.15em] mb-3">
            Current Spotlight Project
          </h1>

          <h2 className="text-4xl lg:text-5xl font-black text-[#1A3D5C] leading-tight mb-6">
            Harnessers Food Garden Initiative
          </h2>

          <p className="text-slate-500 leading-relaxed mb-4">
            The Harnessers Food Garden Initiative is our flagship community
            project aimed at improving food security, promoting environmental
            stewardship, and creating practical learning opportunities for
            young people.
          </p>

          <p className="text-slate-500 leading-relaxed mb-8">
            Through sustainable farming techniques, herb cultivation, and
            vegetable production, members gain valuable agricultural skills
            while contributing to household nutrition and community resilience.
          </p>

          <div className="flex flex-wrap gap-8">
            {projectStats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-[#1A3D5C]">
                  {value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
         
        {/* Project Card */}
      <div>
        <div className="relative">
          <div className="bg-gradient-to-br from-[#1A3D5C] to-[#2E5F7A] rounded-2xl p-10 shadow-2xl shadow-[#1A3D5C]/30">
            <div className="text-5xl mb-5">🌱</div>

            <h3 className="text-white font-black text-2xl mb-4">
              Project Goal
            </h3>

            <p className="text-white/75 leading-relaxed">
              To establish a sustainable youth-led food production system that
              generates income, enhances food security, and provides hands-on
              agricultural training for members and the wider community.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[#B8952A] italic text-sm font-medium">
                &quot;Growing Food, Growing Futures&quot;
              </p>
            </div>
          </div>
           <div className="text-center mt-14">
            <Link
              href="/current-projects"
              className="inline-block bg-[#1E3A4A] hover:bg-[#29b6c8] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors"
            >
              See More Projects
            </Link>
        </div>
        </div>

          <div className="absolute -bottom-2 -right-4 w-5 h-8 rounded-full bg-[#B8952A]/15 -z-10" />
        </div>
       
      </div>
    </section>
  );
}