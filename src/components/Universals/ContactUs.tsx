"use client";

import Link from "next/link";

export default function ContactUs() {
  return (
    <Link
      href="/contact"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-[#F5C518]
        hover:bg-[#e0b310]
        text-[#1E3A4A]
        font-black
        uppercase
        tracking-wider
        px-6
        py-4
        rounded-md
        shadow-lg
        transition-all
        duration-300
      "
    >
       😊
      Contact Us
    </Link>
  );
}