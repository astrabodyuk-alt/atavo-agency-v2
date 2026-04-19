"use client";

import { useRef } from "react";
import {
  Sparkles, UtensilsCrossed, Hammer, Wine, BedDouble,
  ShoppingBag, Palette, Camera, Tag, Heart,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { useSearchStore } from "@/lib/searchStore";

const niches = [
  { key: "beauty",      label: "Beauty",      icon: Sparkles },
  { key: "food",        label: "Food",         icon: UtensilsCrossed },
  { key: "trades",      label: "Trades",       icon: Hammer },
  { key: "beverage",    label: "Beverage",     icon: Wine },
  { key: "hospitality", label: "Hospitality",  icon: BedDouble },
  { key: "ecommerce",   label: "E-commerce",   icon: ShoppingBag },
  { key: "craft",       label: "Craft",        icon: Palette },
  { key: "studio",      label: "Studio",       icon: Camera },
  { key: "retail",      label: "Retail",       icon: Tag },
  { key: "wellness",    label: "Wellness",     icon: Heart },
];

export default function CategoryBar() {
  const { selectedNiche, setSelectedNiche } = useSearchStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
  };

  const handleClick = (key: string) => {
    // Toggle: clicking the active niche clears the filter
    setSelectedNiche(selectedNiche === key ? null : key);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-20 z-40 bg-[#F5F0E8] border-b border-[#E4DACC] py-4">
      {/* Fix 1 — editorial label */}
      <div className="text-center mb-6">
        <span className="text-[11px] tracking-[0.2em] uppercase text-[#8A7B6C] font-medium">
          Choose your niche
        </span>
      </div>

      {/* Fix 2 — centered carousel */}
      <div className="relative flex items-center px-10 gap-4">
        <button
          onClick={() => scroll("left")}
          className="shrink-0 h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} className="text-[#1F1A16]" />
        </button>

        <div ref={scrollRef} className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 px-8 justify-center min-w-max mx-auto">
            {niches.map(({ key, label, icon: Icon }) => {
              const isActive = selectedNiche === key;
              return (
                <button
                  key={key}
                  onClick={() => handleClick(key)}
                  className={`flex flex-col items-center gap-1.5 w-20 shrink-0 pb-4 -mb-4 transition-all ${
                    isActive
                      ? "text-[#1F1A16] border-b-2 border-[#C9A875]"
                      : "text-[#8A7B6C] hover:text-[#1F1A16] border-b-2 border-transparent"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.5} />
                  <span className="text-xs font-medium whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="shrink-0 h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} className="text-[#1F1A16]" />
        </button>
      </div>
    </div>
  );
}
