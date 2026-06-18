"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

const stats = [
  { target: 500, suffix: "+", label: "Youths Empowered" },
  { target: 30, suffix: "+", label: "Active Projects" },
  { target: 15, suffix: "+", label: "Communities Reached" },
  { target: 80, suffix: "%", label: "Refund on Exit" },
];

function StatItem({
  target,
  suffix,
  label,
  active,
}: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(target, 2000, active);
  return (
    <div className="text-center p-8 bg-white/5 rounded-xl border border-[#B8952A]/25 backdrop-blur-sm">
      <div className="text-5xl font-black text-[#B8952A] leading-none">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm uppercase tracking-widest text-slate-300 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="pb-20 bg-gradient-to-br from-[#0D2235] to-[#1A3D5C]"
    >
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 shadow-2xl overflow-hidden">
          
          <div className="md:col-span-3 bg-[#29b6c8] text-[#1E3A4A] p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-black tracking-wider uppercase mb-4 text-[#1E3A4A]">
              LATEST NEWS
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md mb-6"> 
              We are happy to announce that we are launching two new &quot;mini projects&quot; with which we want to
              make our environment more meaningful and sustainable.
              Our Harnessers Food Garden will benefit from a &quot;Gardening Project&quot; with which we plant herbs and
              vegetables, while our ICT lab is yet to be planned for.
            </p>
            <Link  href="/blog" 
              className="text-[#f4f4f4] hover:text-[#1E3A4A] text-sm font-bold tracking-wide underline decoration-2 transition-colors"
            >
              Read more on our Blog
            </Link>
          </div>
          <div 
            className="md:col-span-2 relative p-8 md:p-12 flex flex-col justify-center items-center text-center min-h-[250px] md:min-h-[300px] bg-cover bg-center"
          >
            {/* Overlay color tint */}
            <div className="absolute inset-0 bg-[#CC5A43]/80 mix-blend-multiply" />

            {/* Interactive content */}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl font-black tracking-widest text-white uppercase leading-none mb-6">
                SUBSCRIBE<br />
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md mb-6"> 
               Subscribe to Our Newsletter
              </p>
              <Link 
                href="/#newsletter"
                className="bg-white hover:bg-gray-100 text-[#CC5A43] font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-full shadow-md transition-all transform hover:scale-105"
              >
                JOIN OUR COMMUNITY
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h1 className="text-center text-[#B8952A] text-6xl font-bold uppercase tracking-[0.15em] mb-2">
          OUR REACH
        </h1>
        <p className="text-center text-white text-sm mb-10">
          Let&apos;s Grow Together [TARGET FOR THE NEXT SIX MONTHS]
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
