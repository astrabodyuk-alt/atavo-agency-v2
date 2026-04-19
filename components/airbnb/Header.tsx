"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import SearchPopover, { type PopoverOption } from "./SearchPopover";
import { useSearchStore } from "@/lib/searchStore";

const BUSINESS_TYPES: PopoverOption[] = [
  { value: "Beauty salon" },
  { value: "Restaurant / café" },
  { value: "Wine bar / cellar" },
  { value: "Craftsman (joiner, florist, decorator)" },
  { value: "Trades (builder, plumber, electrician)" },
  { value: "Studio (photo, yoga, pilates)" },
  { value: "Retail boutique" },
  { value: "Other" },
];

const TIMELINES: PopoverOption[] = [
  { value: "0–14 days", meta: "Urgent" },
  { value: "14–30 days", meta: "Standard" },
  { value: "30+ days", meta: "Planning ahead" },
];

const BUDGETS: PopoverOption[] = [
  { value: "£299 – £1.5k", meta: "Starter site" },
  { value: "£1.5k – £3k", meta: "Full site" },
  { value: "£3k – £5k", meta: "Site + SaaS" },
  { value: "£5k +", meta: "Custom build" },
];

type OpenPill = "business" | "timeline" | "budget" | null;

export default function AirbnbHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPill, setOpenPill] = useState<OpenPill>(null);
  const [toast, setToast] = useState(false);

  const { businessType, timeline, budget, setBusinessType, setTimeline, setBudget, triggerSubmit } =
    useSearchStore();

  const closePill = useCallback(() => setOpenPill(null), []);

  const togglePill = (pill: OpenPill) =>
    setOpenPill((prev) => (prev === pill ? null : pill));

  const handleSubmit = () => {
    const hasAny = businessType || timeline || budget;
    if (!hasAny) {
      setToast(true);
      setTimeout(() => setToast(false), 3500);
    }
    // Always scroll and trigger — AuditForm handles the empty case gracefully
    triggerSubmit();
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#1F1A16] text-[#F5F0E8] text-sm px-5 py-3 rounded-full shadow-xl">
          Tell us about your business above
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-[#F5F0E8]/95 backdrop-blur-md border-b border-[#E4DACC] h-20">
        <div className="flex items-center justify-between h-full px-10">
          {/* Wordmark */}
          <Link href="/" className="font-display font-light text-2xl text-[#1F1A16] shrink-0">
            Atavo<span className="text-[#C9A875]">.</span>
          </Link>

          {/* Pill Search Bar */}
          <div className="hidden md:flex items-center bg-[#F5F0E8] border border-[#E4DACC] rounded-full shadow-md h-14 px-2 hover:shadow-lg transition-shadow">

            {/* Segment 1 — Business type */}
            <div className="relative">
              <button
                onClick={() => togglePill("business")}
                className={`flex flex-col items-start px-6 py-2 rounded-full transition-colors ${
                  openPill === "business" ? "bg-[#E8DFD2]" : "hover:bg-[#E8DFD2]/60"
                }`}
              >
                <span className="text-xs font-semibold text-[#1F1A16] whitespace-nowrap">Business type</span>
                <span className={`text-xs whitespace-nowrap ${businessType ? "text-[#1F1A16] font-medium" : "text-[#8A7B6C]"}`}>
                  {businessType ?? "Restaurant, studio, trades..."}
                </span>
              </button>
              {openPill === "business" && (
                <SearchPopover
                  options={BUSINESS_TYPES}
                  selected={businessType}
                  onSelect={setBusinessType}
                  onClose={closePill}
                  align="left"
                />
              )}
            </div>

            <div className="w-px h-8 bg-[#E4DACC] shrink-0" />

            {/* Segment 2 — Timeline */}
            <div className="relative">
              <button
                onClick={() => togglePill("timeline")}
                className={`flex flex-col items-start px-6 py-2 rounded-full transition-colors ${
                  openPill === "timeline" ? "bg-[#E8DFD2]" : "hover:bg-[#E8DFD2]/60"
                }`}
              >
                <span className="text-xs font-semibold text-[#1F1A16] whitespace-nowrap">Ready to launch</span>
                <span className={`text-xs whitespace-nowrap ${timeline ? "text-[#1F1A16] font-medium" : "text-[#8A7B6C]"}`}>
                  {timeline ?? "Pick a date"}
                </span>
              </button>
              {openPill === "timeline" && (
                <SearchPopover
                  options={TIMELINES}
                  selected={timeline}
                  onSelect={setTimeline}
                  onClose={closePill}
                  align="center"
                />
              )}
            </div>

            <div className="w-px h-8 bg-[#E4DACC] shrink-0" />

            {/* Segment 3 — Budget + Submit */}
            <div className="relative flex items-center pl-6 pr-2 gap-3">
              <button
                onClick={() => togglePill("budget")}
                className={`flex flex-col items-start py-2 rounded-full transition-colors ${
                  openPill === "budget" ? "bg-[#E8DFD2] px-3 -mx-3" : "hover:bg-[#E8DFD2]/60"
                }`}
              >
                <span className="text-xs font-semibold text-[#1F1A16] whitespace-nowrap">Budget</span>
                <span className={`text-xs whitespace-nowrap ${budget ? "text-[#1F1A16] font-medium" : "text-[#8A7B6C]"}`}>
                  {budget ?? "£299 – £5k+"}
                </span>
              </button>
              {openPill === "budget" && (
                <SearchPopover
                  options={BUDGETS}
                  selected={budget}
                  onSelect={setBudget}
                  onClose={closePill}
                  align="right"
                />
              )}
              {/* Submit button */}
              <button
                onClick={handleSubmit}
                className="h-[42px] rounded-full bg-[#C9A875] hover:bg-[#B8965F] transition-colors px-[22px] shrink-0 text-xs font-semibold text-[#1F1A16] whitespace-nowrap"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right nav */}
          <div className="flex items-center gap-3">
            <Link
              href="#audit"
              className="hidden md:block text-sm font-medium text-[#1F1A16] hover:text-[#8A7B6C] transition-colors whitespace-nowrap px-3 py-2 rounded-full hover:bg-[#E8DFD2]"
            >
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

      {/* Mobile overlay — untouched */}
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
