"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  label: string;
  children: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Who We Are",
    children: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    label: "What We Do",
    children: [
      { label: "Programs", href: "/programs" },
      { label: "Current Projects", href: "/current-projects" },
      { label: "Impact", href: "/impact" },
      { label: "Funds Management", href: "/funds-management" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    label: "Get Engaged",
    children: [
      { label: "Join Us", href: "/join" },
      { label: "Donate", href: "/donate" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

function DropdownMenu({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className="text-[#7ecfcf] hover:text-white text-sm font-medium tracking-wide transition-colors py-1"
      >
        {item.label}
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-0 mt-1 w-52 bg-[#1A3D5C] border border-white/10 rounded-lg shadow-2xl shadow-black/40 overflow-hidden z-50"
        >
          {item.children.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-white/75 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A4A] border-b-4 border-[#29b6c8]">
      <div className="flex items-stretch h-[68px]">
        <div className="flex flex-col justify-center flex-shrink-0 px-8">
          <Link href="/" className="flex flex-col items-center group">
            {/* Logo Graphic on top */}
            <div className="w-[32px] h-[24px] relative mb-0.5">
              <Image
                src="/images/harnesserslogo.png"
                alt="Harnessers Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
               
            {/* Brand Text below logo */}
            <div className="flex flex-col items-center leading-none">
              <span className="text-sm font-black tracking-tight">
                <span className="text-[#29b6c8]">H</span>
                <span className="text-white">arness</span>
                <span className="text-[#29b6c8]">ers</span>
              </span>
              <span className="text-white/70 text-[9px] tracking-[0.05em] font-medium mt-0.5">
                Self-Help Group
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item) => (
            <DropdownMenu key={item.label} item={item} />
          ))}
        </div>

        {/* DONATE button — full height */}
        <div className="hidden md:flex flex-shrink-0 items-stretch">
          <Link
            href="/donate"
            className="flex items-center px-12 bg-[#F5C518] hover:bg-[#e0b310] text-[#1E3A4A] font-black text-sm tracking-[0.15em] uppercase transition-colors h-full"
          >
            DONATE
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center ml-auto px-6">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1A3444] border-t border-white/10">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/8">
              <button
                onClick={() =>
                  setMobileExpanded(
                    mobileExpanded === item.label ? null : item.label
                  )
                }
                className="w-full flex items-center justify-between px-6 py-4 text-[#7ecfcf] font-medium text-sm"
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    mobileExpanded === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpanded === item.label && (
                <div className="bg-[#162e3e] pb-2">
                  {item.children.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-10 py-3 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/donate"
            className="block text-center bg-[#F5C518] text-[#1E3A4A] font-black text-sm tracking-widest uppercase px-6 py-4 m-4 rounded-lg"
          >
            DONATE
          </Link>
        </div>
      )}
    </nav>
  );
}