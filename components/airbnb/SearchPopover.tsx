"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

export interface PopoverOption {
  value: string;
  meta?: string;
}

interface SearchPopoverProps {
  options: PopoverOption[];
  selected: string | null;
  onSelect: (value: string) => void;
  onClose: () => void;
  align?: "left" | "center" | "right";
}

export default function SearchPopover({
  options,
  selected,
  onSelect,
  onClose,
  align = "left",
}: SearchPopoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "right"
      ? "right-0"
      : "left-0";

  return (
    <div
      ref={ref}
      className={`absolute top-[calc(100%+12px)] ${alignClass} z-50 min-w-[280px] bg-[#F5F0E8] border border-[#E4DACC] rounded-2xl shadow-[0_12px_40px_rgba(31,26,22,0.18)] py-2 overflow-hidden`}
    >
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => {
              onSelect(opt.value);
              onClose();
            }}
            className={`w-full flex items-start justify-between gap-3 px-[14px] py-3 rounded-[10px] mx-1 text-left transition-colors hover:bg-[#E8DFD2] ${
              isSelected ? "bg-[#E8DFD2]" : ""
            }`}
            style={{ width: "calc(100% - 8px)" }}
          >
            <div>
              <p className="text-sm text-[#1F1A16] font-medium leading-tight">{opt.value}</p>
              {opt.meta && (
                <p className="text-[11px] text-[#8A7B6C] mt-0.5 leading-tight">{opt.meta}</p>
              )}
            </div>
            {isSelected && <Check size={15} className="text-[#C9A875] shrink-0 mt-0.5" />}
          </button>
        );
      })}
    </div>
  );
}
