"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { type Service } from "@/data/services";
import { useCart } from "@/stores/cartStore";
import { useSearchStore } from "@/lib/searchStore";
type Props = { service: Service };

const badgeStyles: Record<NonNullable<Service["badge"]>, string> = {
  Essential:      "bg-[#C9A875] text-[#1F1A16]",
  "Best for SEO": "bg-[#1F1A16] text-[#C9A875]",
  "Most chosen":  "bg-[#1F1A16] text-[#F5F0E8]",
};

export default function ServiceCard({ service }: Props) {
  const { items, add, remove } = useCart();
  const { billingMode } = useSearchStore();
  const inCart = items.some((i) => i.id === service.id);
  const { Icon, pricing } = service;

  function handleAdd() {
    const isManaged = pricing.type === "managed";
    add({
      id: service.id,
      title: service.title,
      billingMode: isManaged ? billingMode : "oneoff",
      oneOffAmount: pricing.oneOff,
      monthlyAmount: isManaged ? pricing.monthly : undefined,
    });
  }

  // ─── Price block ──────────────────────────────────────────────────────────
  let primaryPrice: string;
  let priceTag: string | null = null;

  if (billingMode === "monthly") {
    if (pricing.type === "managed") {
      primaryPrice = `From £${pricing.monthly}/month`;
    } else {
      primaryPrice = `From £${pricing.oneOff.toLocaleString("en-GB")}`;
      priceTag = "One-off project";
    }
  } else {
    primaryPrice = `From £${pricing.oneOff.toLocaleString("en-GB")}`;
  }

  return (
    <article className="group flex flex-col">
      {/* Image — 4:3, rounded, hover zoom */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#E8DFD2]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Badge — top left */}
        {service.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.08em] ${badgeStyles[service.badge]}`}
          >
            {service.badge}
          </span>
        )}
        {/* In-cart — tap to remove */}
        {inCart && (
          <button
            onClick={(e) => { e.stopPropagation(); remove(service.id); }}
            className="absolute top-3 right-3 flex items-center gap-1 bg-[#C9A875] text-[#1F1A16] text-xs font-semibold px-2.5 py-1 rounded-full shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Remove from build"
          >
            Added <X size={11} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {/* Details below image */}
      <div className="pt-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-light text-[#1F1A16] text-base md:text-lg leading-tight flex items-center gap-2.5">
            <Icon
              size={18}
              strokeWidth={1.5}
              className="text-[#8A7B6C] shrink-0 translate-y-[1px]"
            />
            <span>{service.title}</span>
          </h3>
          <div className="text-right shrink-0 flex flex-col items-end">
            <span className="font-display font-light text-base text-[#1F1A16] whitespace-nowrap">
              {primaryPrice}
            </span>
            {priceTag && (
              <span className="text-xs text-[#8A7B6C] italic">{priceTag}</span>
            )}
          </div>
        </div>

        <p className="text-sm text-[#8A7B6C] leading-relaxed line-clamp-2">
          {service.description}
        </p>

        <button
          onClick={handleAdd}
          disabled={inCart}
          className={`mt-3 w-full rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
            inCart
              ? "bg-[#E4DACC] text-[#8A7B6C] cursor-not-allowed"
              : "bg-[#1F1A16] text-[#F5F0E8] hover:bg-[#2a241e]"
          }`}
        >
          {inCart ? "✓ Added to build" : "Add to build"}
        </button>
      </div>
    </article>
  );
}
