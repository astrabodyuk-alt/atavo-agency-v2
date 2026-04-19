"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/stores/cartStore";
import { useSearchStore } from "@/lib/searchStore";

export default function CartBar() {
  const router = useRouter();
  const { items, total } = useCart();
  const { setCartMessage } = useSearchStore();

  if (items.length === 0) return null;

  const cartCount = items.length;
  const cartTotal = total();

  function handleGetQuote() {
    const moduleList = items
      .map((i) => `• ${i.title} (from £${i.priceFrom.toLocaleString("en-GB")})`)
      .join("\n");
    const msg = `Hi Atavo,\n\nI've selected ${cartCount} module${cartCount !== 1 ? "s" : ""} for my build:\n\n${moduleList}\n\nEstimated total: £${cartTotal.toLocaleString("en-GB")}\n\nPlease could you send me a quote?`;
    setCartMessage(msg);
    router.push("/");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1F1A16] text-[#F5F0E8] px-5 md:px-10 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[#C9A875]">
            {cartCount} module{cartCount !== 1 ? "s" : ""} selected
          </p>
          <p className="font-display font-light text-lg">
            From £{cartTotal.toLocaleString("en-GB")}
          </p>
        </div>
        <button
          onClick={handleGetQuote}
          className="bg-[#C9A875] text-[#1F1A16] rounded-full px-6 py-3 text-sm font-medium hover:bg-[#d4b488] transition-colors"
        >
          Get your quote →
        </button>
      </div>
    </div>
  );
}
