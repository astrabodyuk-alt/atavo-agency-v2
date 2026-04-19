"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-light text-ink">
            Atavo<span className="text-champagne">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#audit"
              className="hidden md:inline-flex bg-ink text-canvas rounded-sm px-5 py-2.5 text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Get a free audit
            </Link>
            <button
              className="md:hidden text-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-canvas flex flex-col px-6 py-6">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="font-display text-2xl font-light text-ink" onClick={() => setMobileOpen(false)}>
              Atavo<span className="text-champagne">.</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={22} className="text-ink" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#audit"
              className="mt-4 inline-flex bg-ink text-canvas rounded-sm px-6 py-3 text-sm font-medium w-fit"
              onClick={() => setMobileOpen(false)}
            >
              Get a free audit
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
