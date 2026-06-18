"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A4A] text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Column 1: Contact Us */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] mb-4 text-white">
            Contact Us
          </h4>

          <address className="not-italic text-slate-400 text-sm leading-7">
            <p>P.O. Box 1824 - 80100</p>
            <p>Kengeleni Road, Mombasa-Kenya</p>

            <p className="mt-3">
              harnessersyouthnetwork@gmail.com
            </p>

            <p>+254 113 088 424</p>
            <p>+254 706 220 585</p>
          </address>
        </div>

        {/* Column 2: Connect With Us */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] mb-4 text-white">
            Connect With Us
          </h4>

          <div className="flex flex-col gap-2">
            {[
              {
                label: "Facebook",
                href: "https://facebook.com/Harnessersyouthsnetwork",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/Harnessersyouthsnetwork",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/company/harnessersyouthsnetwork",
              },
              {
                label: "X (Twitter)",
                href: "https://x.com/Harnessersyouthsnetwork",
              },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#F5C518] text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div id="newsletter">
          <h4 className="text-xs font-black uppercase tracking-[0.18em] mb-4 text-white">
            Subscribe to Our Newsletter
          </h4>

          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Stay updated on our programs, events, blogs, articles and
            community impact.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email here"
              className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#F5C518] transition-colors"
            />

            <button
              type="button"
              className="bg-[#29b6c8] hover:bg-[#1fa3b4] text-white font-bold text-xs px-4 py-2 rounded uppercase tracking-wide transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-[#29b6c8] border-t border-white/10 py-4 text-center">
        <p className="text-[#1E3A4A] text-xs tracking-widest uppercase font-semibold">
          Registered SHG · Ministry of East African Community, Labour &amp;
          Social Protection · Kenya
        </p>
      </div>
    </footer>
  );
}