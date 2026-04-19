"use client";

import { useRef } from "react";
import { Globe, LayoutDashboard, Zap, Search, Tag, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { name: "Websites", sub: "Bespoke build", icon: Globe },
  { name: "SaaS", sub: "Dashboards and MVPs", icon: LayoutDashboard },
  { name: "Automation", sub: "Make & n8n", icon: Zap },
  { name: "SEO Audit", sub: "Strategic read", icon: Search },
  { name: "Branding", sub: "Logo + palette", icon: Tag },
  { name: "Copy", sub: "Site + email", icon: FileText },
];

export default function InspirationRail() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-10 border-t border-[#E4DACC]">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-[#1F1A16] text-base">Continue exploring services</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} className="text-[#1F1A16]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} className="text-[#1F1A16]" />
          </button>
        </div>
      </div>

      {/* Scrolling row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {services.map(({ name, sub, icon: Icon }) => (
          <button
            key={name}
            className="w-72 flex-shrink-0 h-24 rounded-xl bg-[#E8DFD2] border border-[#E4DACC] px-5 flex items-center gap-4 hover:shadow-md transition-shadow text-left"
          >
            <div className="h-14 w-14 rounded-md bg-[#1F1A16]/5 flex items-center justify-center shrink-0">
              <Icon size={22} className="text-[#1F1A16]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1F1A16]">{name}</p>
              <p className="text-xs text-[#8A7B6C]">{sub}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
