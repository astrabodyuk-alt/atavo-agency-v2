"use client";

import { useRef, useState } from "react";
import { Globe, LayoutDashboard, Zap, Search, Sparkles, UtensilsCrossed, Hammer, Wine, BedDouble, ShoppingBag, Grid3X3, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { label: "Websites", icon: Globe },
  { label: "SaaS", icon: LayoutDashboard },
  { label: "Automation", icon: Zap },
  { label: "Audits", icon: Search },
  { label: "Beauty", icon: Sparkles },
  { label: "Food", icon: UtensilsCrossed },
  { label: "Trades", icon: Hammer },
  { label: "Beverage", icon: Wine },
  { label: "Hospitality", icon: BedDouble },
  { label: "E-commerce", icon: ShoppingBag },
  { label: "All", icon: Grid3X3 },
];

export default function CategoryBar() {
  const [active, setActive] = useState("Websites");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
  };

  return (
    <div className="sticky top-20 z-40 bg-[#F5F0E8] border-b border-[#E4DACC] py-4">
      <div className="relative flex items-center px-10 gap-4">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="shrink-0 h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} className="text-[#1F1A16]" />
        </button>

        {/* Category items */}
        <div
          ref={scrollRef}
          className="flex items-center gap-8 overflow-x-auto scrollbar-hide flex-1"
        >
          {categories.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`flex flex-col items-center gap-1.5 w-20 shrink-0 pb-4 -mb-4 transition-all ${
                  isActive
                    ? "text-[#1F1A16] border-b-2 border-[#1F1A16]"
                    : "text-[#8A7B6C] hover:text-[#1F1A16] border-b-2 border-transparent"
                }`}
              >
                <Icon size={24} />
                <span className="text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="shrink-0 h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} className="text-[#1F1A16]" />
        </button>

        {/* Filters button */}
        <button className="shrink-0 flex items-center gap-2 border border-[#E4DACC] rounded-full px-4 py-2 text-xs font-medium text-[#1F1A16] hover:shadow-md transition-shadow bg-[#F5F0E8]">
          <SlidersHorizontal size={14} />
          Filters
        </button>
      </div>
    </div>
  );
}
