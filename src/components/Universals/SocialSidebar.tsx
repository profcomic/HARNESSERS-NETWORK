"use client";

import Link from "next/link";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/Harnessersyouthsnetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    color: "text-[#1E3A4A]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/harnessersyouthsnetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "text-[#29b6c8]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/Harnessersyouthsnetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
    color: "text-[#1E3A4A]",
  },
  {
    label: "X",
    href: "https://x.com/Harnessersyouthsnetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-[#1E3A4A]",
  },
];

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
      {/* Social icons panel */}
      <div className="bg-[#F5C518] flex flex-col items-center gap-5 px-3.5 py-5 shadow-lg">
        {socials.map(({ label, href, icon, color }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${color} hover:opacity-60 transition-opacity`}
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
