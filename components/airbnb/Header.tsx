"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Globe, Menu, X } from "lucide-react";

export default function AirbnbHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#E4DACC] h-20">
        <div className="flex items-center justify-between h-full px-10">
          {/* Wordmark */}
          <Link href="/" className="font-display font-light text-2xl text-[#1F1A16] shrink-0">
            Atavo<span className="text-[#C9A875]">.</span>
          </Link>

          {/* Pill Search Bar */}
          <div className="hidden md:flex items-center bg-[#F5F0E8] border border-[#E4DACC] rounded-full shadow-md h-14 px-2 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center px-6">
              <div>
                <p className="text-xs font-semibold text-[#1F1A16] whitespace-nowrap">Business type</p>
                <p className="text-xs text-[#8A7B6C] whitespace-nowrap">Restaurant, studio, trades...</p>
              </div>
            </div>
            <div className="w-px h-8 bg-[#E4DACC]" />
            <div className="flex items-center px-6">
              <div>
                <p className="text-xs font-semibold text-[#1F1A16] whitespace-nowrap">Ready to launch</p>
                <p className="text-xs text-[#8A7B6C] whitespace-nowrap">Pick a date</p>
              </div>
            </div>
            <div className="w-px h-8 bg-[#E4DACC]" />
            <div className="flex items-center pl-6 pr-2 gap-3">
              <div>
                <p className="text-xs font-semibold text-[#1F1A16] whitespace-nowrap">Budget</p>
                <p className="text-xs text-[#8A7B6C] whitespace-nowrap">£299 - £5k+</p>
              </div>
              <a
                href="#audit"
                className="h-10 w-10 rounded-full bg-[#C9A875] flex items-center justify-center hover:bg-[#B8996A] transition-colors shrink-0"
              >
                <Search size={16} className="text-[#1F1A16]" />
              </a>
            </div>
          </div>

          {/* Right nav */}
          <div className="flex items-center gap-3">
            <Link href="#audit" className="hidden md:block text-sm font-medium text-[#1F1A16] hover:text-[#8A7B6C] transition-colors whitespace-nowrap px-3 py-2 rounded-full hover:bg-[#E8DFD2]">
              Atavo your business
            </Link>
            <button
              className="flex items-center gap-2 border border-[#E4DACC] rounded-full px-4 py-2.5 hover:shadow-md transition-shadow bg-[#F5F0E8]"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={18} className="text-[#1F1A16]" />
              <Globe size={18} className="text-[#8A7B6C] hidden md:block" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5F0E8] flex flex-col px-6 py-6">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="font-display text-2xl font-light text-[#1F1A16]" onClick={() => setMobileOpen(false)}>
              Atavo<span className="text-[#C9A875]">.</span>
            </Link>
            <button onClick={() => setMobileOpen(false)}>
              <X size={22} className="text-[#1F1A16]" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {[
              { label: "Work", href: "/work" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light text-[#1F1A16]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#audit"
              className="mt-4 inline-flex bg-[#1F1A16] text-[#F5F0E8] rounded-sm px-6 py-3 text-sm font-medium w-fit"
              onClick={() => setMobileOpen(false)}
            >
              Book a free audit
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
