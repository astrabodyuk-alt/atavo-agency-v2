"use client";

import { useState } from "react";
import { X, ShoppingBag, ChevronUp, ChevronDown } from "lucide-react";
import { useCart } from "@/stores/cartStore";
import { useSearchStore } from "@/lib/searchStore";

export default function CartWidget() {
  const { items, remove, clear, total } = useCart();
  const { setCartMessage, triggerSubmit } = useSearchStore();
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;

  const handleGetQuote = () => {
    const lines = items
      .map((i) => `• ${i.title} (from £${i.priceFrom.toLocaleString()})`)
      .join("\n");

    const msg =
      `Services I'd like to build:\n${lines}\n\nEstimated total: from £${total().toLocaleString()}\n\nMy business: `;

    setCartMessage(msg);
    triggerSubmit();

    // Small delay to allow state to propagate before scrolling
    setTimeout(() => {
      document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {expanded && (
        <div className="w-80 bg-[#1F1A16] rounded-xl shadow-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#F5F0E8]/10">
            <p className="text-[#F5F0E8] text-sm font-medium">Your build</p>
          </div>

          <ul className="px-5 py-3 flex flex-col gap-2 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-[#F5F0E8] text-xs truncate">{item.title}</p>
                  <p className="text-[#8A7B6C] text-xs">
                    From £{item.priceFrom.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => remove(item.id)}
                  className="shrink-0 text-[#8A7B6C] hover:text-[#F5F0E8] transition-colors"
                  aria-label={`Remove ${item.title}`}
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>

          <div className="px-5 py-4 border-t border-[#F5F0E8]/10 flex items-center justify-between">
            <div>
              <p className="text-[#8A7B6C] text-xs">Estimated total</p>
              <p className="text-[#C9A875] font-display font-light text-lg">
                From £{total().toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => { clear(); setExpanded(false); }}
              className="text-[#8A7B6C] hover:text-[#F5F0E8] text-xs transition-colors"
            >
              Clear all
            </button>
          </div>

          <div className="px-5 pb-5">
            <button
              onClick={handleGetQuote}
              className="w-full bg-[#C9A875] text-[#1F1A16] rounded-sm py-3 text-sm font-medium hover:bg-[#B8996A] transition-colors"
            >
              Get your quote →
            </button>
          </div>
        </div>
      )}

      {/* Floating pill */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-3 bg-[#1F1A16] text-[#F5F0E8] rounded-full px-5 py-3 shadow-xl hover:bg-[#1F1A16]/90 transition-colors"
      >
        <ShoppingBag size={16} className="text-[#C9A875]" />
        <span className="text-sm font-medium">
          {items.length} module{items.length !== 1 ? "s" : ""}
        </span>
        <span className="text-[#C9A875] text-sm font-display font-light">
          From £{total().toLocaleString()}
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
