"use client";

import { useState } from "react";

export default function ChatWithUs() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1A3D5C] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-bold">Chat With Us</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-xl leading-none hover:opacity-70"
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-72 overflow-y-auto">
            <div className="bg-slate-100 p-3 rounded-lg mb-3">
              👋 Welcome to Harnessers Youth SHG.
              <br />
              How can we help you today?
            </div>
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#1A3D5C]"
            />
            <button className="bg-[#F5C518] text-[#1A3D5C] px-4 py-2 rounded-md font-bold">
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          left-6
          z-50
          bg-[#1A3D5C]
          hover:bg-[#244f74]
          text-white
          px-6
          py-4
          rounded-md
          shadow-xl
          font-bold
          flex
          items-center
          gap-2
          transition-all
        "
      >
        ✨ Chat With Us
      </button>
    </>
  );
}