"use client";

import { useState } from "react";
import { X, ShoppingBag, ChevronUp, ChevronDown } from "lucide-react";
import { useCart } from "@/stores/cartStore";
import { useSearchStore } from "@/lib/searchStore";

export default function CartWidget() {
  const { items, remove, clear, totals } = useCart();
  const { setCartMessage, triggerSubmit } = useSearchStore();
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;

  const { oneOff, monthly } = totals();

  function summaryLine() {
    if (oneOff > 0 && monthly > 0)
      return `£${oneOff.toLocaleString("en-GB")} + £${monthly}/mo`;
    if (monthly > 0) return `£${monthly}/mo`;
    return `£${oneOff.toLocaleString("en-GB")}`;
  }

  function handleGetQuote() {
    const lines = items.map((i) => {
      const price =
        i.billingMode === "monthly" && i.monthlyAmount !== undefined
          ? `£${i.monthlyAmount}/mo`
          : `£${i.oneOffAmount.toLocaleString("en-GB")} one-off`;
      return `• ${i.title} — ${price}`;
    }).join("\n");

    const msg = `Services I'd like to build:\n${lines}\n\nTotal: ${summaryLine()}\n\nMy business: `;
    setCartMessage(msg);
    triggerSubmit();
    setExpanded(false);
    setTimeout(() => {
      document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {expanded && (
        <div className="w-[calc(100vw-2rem)] max-w-sm md:w-80 bg-[#1F1A16] rounded-xl shadow-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#F5F0E8]/10">
            <p className="text-[#F5F0E8] text-sm font-medium">Your build</p>
          </div>

          <ul className="px-5 py-3 flex flex-col gap-2 max-h-56 overflow-y-auto">
            {items.map((item) => {
              const price =
                item.billingMode === "monthly" && item.monthlyAmount !== undefined
                  ? `£${item.monthlyAmount}/mo`
                  : `£${item.oneOffAmount.toLocaleString("en-GB")}`;
              return (
                <li key={item.id} className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#F5F0E8] text-xs truncate">{item.title}</p>
                    <p className="text-[#8A7B6C] text-xs">{price}</p>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="shrink-0 text-[#8A7B6C] hover:text-[#F5F0E8] transition-colors p-1"
                    aria-label={`Remove ${item.title}`}
                  >
                    <X size={14} />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="px-5 py-4 border-t border-[#F5F0E8]/10">
            {oneOff > 0 && (
              <p className="text-[#C9A875] font-display font-light text-base">
                £{oneOff.toLocaleString("en-GB")} one-off
              </p>
            )}
            {monthly > 0 && (
              <p className="text-[#C9A875] font-display font-light text-base">
                + £{monthly}/mo
              </p>
            )}
            <button
              onClick={() => { clear(); setExpanded(false); }}
              className="text-[#8A7B6C] hover:text-[#F5F0E8] text-xs transition-colors mt-2"
            >
              Clear all
            </button>
          </div>

          <div className="px-5 pb-5">
            <button
              onClick={handleGetQuote}
              className="w-full bg-[#C9A875] text-[#1F1A16] rounded-sm py-3 text-sm font-medium hover:bg-[#B8996A] transition-colors min-h-[44px]"
            >
              Get your quote →
            </button>
          </div>
        </div>
      )}

      {/* Floating pill */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-2 md:gap-3 bg-[#1F1A16] text-[#F5F0E8] rounded-full px-4 md:px-5 py-3 shadow-xl hover:bg-[#1F1A16]/90 transition-colors min-h-[44px]"
      >
        <ShoppingBag size={16} className="text-[#C9A875]" />
        <span className="text-sm font-medium">{items.length}</span>
        <span className="text-[#C9A875] text-sm font-display font-light hidden sm:inline">
          {summaryLine()}
        </span>
        {expanded ? (
          <ChevronDown size={14} className="text-[#8A7B6C]" />
        ) : (
          <ChevronUp size={14} className="text-[#8A7B6C]" />
        )}
      </button>
    </div>
  );
}
