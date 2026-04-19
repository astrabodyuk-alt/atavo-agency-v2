"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronUp } from "lucide-react";
import { useCart } from "@/stores/cartStore";
import { useSearchStore } from "@/lib/searchStore";

function formatSplit(oneOff: number, monthly: number): string {
  if (oneOff > 0 && monthly > 0) {
    return `£${oneOff.toLocaleString("en-GB")} one-off + £${monthly}/mo`;
  }
  if (monthly > 0) return `£${monthly}/mo`;
  return `£${oneOff.toLocaleString("en-GB")} one-off`;
}

export default function CartBar() {
  const router = useRouter();
  const { items, remove, totals } = useCart();
  const { setCartMessage } = useSearchStore();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (items.length === 0) setOpen(false);
  }, [items.length]);

  if (items.length === 0) return null;

  const { oneOff, monthly } = totals();
  const cartCount = items.length;

  function handleGetQuote() {
    const moduleList = items.map((i) => {
      const price =
        i.billingMode === "monthly" && i.monthlyAmount !== undefined
          ? `£${i.monthlyAmount}/mo`
          : `£${i.oneOffAmount.toLocaleString("en-GB")} one-off`;
      return `• ${i.title} — ${price}`;
    }).join("\n");

    const priceSummary = formatSplit(oneOff, monthly);
    const msg = `Hi Atavo,\n\nI've selected ${cartCount} module${cartCount !== 1 ? "s" : ""} for my build:\n\n${moduleList}\n\nTotal: ${priceSummary}\n\nPlease could you send me a quote?`;

    setCartMessage(msg);
    setOpen(false);
    router.push("/");
  }

  return (
    <div ref={drawerRef} className="fixed bottom-0 left-0 right-0 z-50">
      {/* Drawer panel */}
      <div
        className={`bg-[#F5F0E8] border-t border-[#E4DACC] overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-y-auto max-h-[calc(70vh-120px)] px-5 md:px-10 pt-6 pb-2">
          <p className="font-display font-light text-[#1F1A16] text-xl mb-5">
            Your selection
          </p>

          <ul className="flex flex-col divide-y divide-[#E4DACC]">
            {items.map((item) => {
              const priceLabel =
                item.billingMode === "monthly" && item.monthlyAmount !== undefined
                  ? `£${item.monthlyAmount}/mo`
                  : `£${item.oneOffAmount.toLocaleString("en-GB")} one-off`;
              return (
                <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1F1A16] truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#8A7B6C] mt-0.5">{priceLabel}</p>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full hover:bg-[#E8DFD2] transition-colors"
                    aria-label={`Remove ${item.title}`}
                  >
                    <X size={14} className="text-[#8A7B6C]" />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Split total */}
          <div className="flex items-start justify-between pt-4 pb-1 border-t border-[#E4DACC] mt-2 gap-4">
            <span className="text-sm text-[#8A7B6C]">Estimated total</span>
            <div className="text-right">
              {oneOff > 0 && (
                <p className="font-display font-light text-base text-[#1F1A16]">
                  £{oneOff.toLocaleString("en-GB")} one-off
                </p>
              )}
              {monthly > 0 && (
                <p className="font-display font-light text-base text-[#1F1A16]">
                  + £{monthly}/mo
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10 pb-6 pt-3">
          <button
            onClick={handleGetQuote}
            className="w-full bg-[#1F1A16] text-[#F5F0E8] rounded-sm py-3 text-sm font-medium hover:bg-[#1F1A16]/90 transition-colors"
          >
            Get your quote →
          </button>
          <button
            onClick={() => setOpen(false)}
            className="w-full text-center text-sm text-[#8A7B6C] hover:text-[#1F1A16] transition-colors mt-3"
          >
            Continue browsing
          </button>
        </div>
      </div>

      {/* Sticky bar — tap to toggle drawer */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-[#1F1A16] text-[#F5F0E8] px-5 md:px-10 py-4 flex items-center justify-between gap-4"
      >
        <div className="text-left">
          <p className="text-[11px] uppercase tracking-wider text-[#C9A875]">
            {cartCount} module{cartCount !== 1 ? "s" : ""} selected
          </p>
          <p className="font-display font-light text-base">
            {formatSplit(oneOff, monthly)}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#C9A875]">
          <span>{open ? "Close" : "View selection"}</span>
          <ChevronUp
            size={16}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
    </div>
  );
}
