"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NICHES } from "@/data/niches";

export default function CategoryBar() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full border-b border-[#E4DACC] bg-[#F5F0E8] md:sticky md:top-20 md:z-40">
      {/* Label */}
      <div className="text-center pt-4 pb-3">
        <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#8A7B6C] font-medium">
          Choose your niche
        </span>
      </div>

      {/* Carousel row */}
      <div className="relative flex items-center pb-5 md:pb-6">
        {/* Left arrow — desktop only */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 z-10 shrink-0 h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md items-center justify-center transition-shadow"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} className="text-[#1F1A16]" />
        </button>

        {/* Scrollable niche strip */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-5 md:px-16"
          style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          <div className="flex items-center gap-5 md:gap-8 min-w-max mx-auto md:justify-center">
            {NICHES.map(({ key, label, Icon }) => (
              <button
                key={key}
                onClick={() => router.push(`/build/${key}`)}
                className="flex flex-col items-center gap-1.5 min-w-[72px] w-[72px] md:w-20 shrink-0 text-[#8A7B6C] hover:text-[#1F1A16] transition-colors"
              >
                <Icon size={22} strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right arrow — desktop only */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 z-10 shrink-0 h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md items-center justify-center transition-shadow"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} className="text-[#1F1A16]" />
        </button>
      </div>
    </div>
  );
}
