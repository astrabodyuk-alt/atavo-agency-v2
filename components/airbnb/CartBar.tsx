"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronUp } from "lucide-react";
import { useCart } from "@/stores/cartStore";
import { useSearchStore } from "@/lib/searchStore";

export default function CartBar() {
  const router = useRouter();
  const { items, remove, total } = useCart();
  const { setCartMessage } = useSearchStore();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
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

  // Close drawer when cart empties
  useEffect(() => {
    if (items.length === 0) setOpen(false);
  }, [items.length]);

  if (items.length === 0) return null;

  const cartCount = items.length;
  const cartTotal = total();

  function handleGetQuote() {
    const moduleList = items
      .map((i) => `• ${i.title} (from £${i.priceFrom.toLocaleString("en-GB")})`)
      .join("\n");
    const msg = `Hi Atavo,\n\nI've selected ${cartCount} module${cartCount !== 1 ? "s" : ""} for my build:\n\n${moduleList}\n\nEstimated total: £${cartTotal.toLocaleString("en-GB")}\n\nPlease could you send me a quote?`;
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
        <div className="overflow-y-auto max-h-[70vh] px-5 md:px-10 pt-6 pb-2">
          <p className="font-display font-light text-[#1F1A16] text-xl mb-5">
            Your selection
          </p>

          <ul className="flex flex-col divide-y divide-[#E4DACC]">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1F1A16] truncate">{item.title}</p>
                  <p className="text-xs text-[#8A7B6C] mt-0.5">
                    From £{item.priceFrom.toLocaleString("en-GB")}
                  </p>
                </div>
                <button
                  onClick={() => remove(item.id)}
                  className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full hover:bg-[#E8DFD2] transition-colors"
                  aria-label={`Remove ${item.title}`}
                >
                  <X size={14} className="text-[#8A7B6C]" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline justify-between pt-4 pb-1 border-t border-[#E4DACC] mt-2">
            <span className="text-sm text-[#8A7B6C]">Estimated total</span>
            <span className="font-display font-light text-lg text-[#1F1A16]">
              From £{cartTotal.toLocaleString("en-GB")}
            </span>
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
          <p className="font-display font-light text-lg">
            From £{cartTotal.toLocaleString("en-GB")}
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
