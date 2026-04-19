"use client";

import { type Service } from "@/data/services";
import { useCart } from "@/stores/cartStore";

type Props = { service: Service };

export default function ServiceCard({ service }: Props) {
  const { items, add, remove } = useCart();
  const inCart = items.some((i) => i.id === service.id);

  const toggle = () => {
    if (inCart) {
      remove(service.id);
    } else {
      add({ id: service.id, title: service.title, priceFrom: service.priceFrom });
    }
  };

  return (
    <div
      className={`rounded-xl border p-6 flex flex-col gap-4 transition-all ${
        inCart
          ? "border-[#C9A875] bg-[#C9A875]/8"
          : "border-[#E4DACC] bg-[#F5F0E8] hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl leading-none">{service.icon}</span>
        <span className="text-xs font-medium text-[#8A7B6C] bg-[#E8DFD2] rounded-full px-2.5 py-1 shrink-0">
          From £{service.priceFrom.toLocaleString()}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-display font-light text-[#1F1A16] text-lg mb-1 leading-snug">
          {service.title}
        </h3>
        <p className="text-[#8A7B6C] text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      <button
        onClick={toggle}
        className={`w-full rounded-sm py-2.5 text-sm font-medium transition-colors ${
          inCart
            ? "bg-[#C9A875] text-[#1F1A16] hover:bg-[#B8996A]"
            : "border border-[#1F1A16] text-[#1F1A16] hover:bg-[#1F1A16] hover:text-[#F5F0E8]"
        }`}
      >
        {inCart ? "Added ✓" : "Add to build"}
      </button>
    </div>
  );
}
