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
    <div className="flex flex-col h-full bg-[#F5F0E8] rounded-2xl overflow-hidden border border-[#E4DACC] group">

      {/* Image — hauteur fixe via aspect-ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {service.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.08em] ${badgeStyles[service.badge]}`}
          >
            {service.badge}
          </span>
        )}
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

      {/* Header titre + prix — min-height pour absorber la variation One-off tag */}
      <div className="min-h-[80px] px-5 pt-5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <Icon
            size={18}
            strokeWidth={1.5}
            className="text-[#8A7B6C] shrink-0 mt-1"
          />
          <h3 className="font-display font-light text-[#1F1A16] text-base md:text-lg leading-tight">
            {service.title}
          </h3>
        </div>
        <div className="text-right shrink-0 flex flex-col items-end">
          <span className="font-display font-light text-base text-[#1F1A16] whitespace-nowrap">
            {primaryPrice}
          </span>
          {priceTag && (
            <span className="text-xs text-[#8A7B6C] italic mt-1">{priceTag}</span>
          )}
        </div>
      </div>

      {/* Description — flex-grow pour absorber l'espace restant */}
      <p className="flex-grow px-5 pt-3 text-sm text-[#8A7B6C] leading-relaxed">
        {service.description}
      </p>

      {/* Bouton — wrapper isolé, poussé en bas par flex-grow de la description */}
      <div className="px-5 pb-5 pt-5">
        <button
          onClick={handleAdd}
          disabled={inCart}
          className={`w-full py-3 rounded-full text-sm font-medium transition-all ${
            inCart
              ? "bg-[#E4DACC] text-[#8A7B6C] cursor-not-allowed"
              : "bg-[#1F1A16] text-[#F5F0E8] hover:bg-[#2a241e]"
          }`}
        >
          {inCart ? "✓ Added to build" : "Add to build"}
        </button>
      </div>

    </div>
  );
}
