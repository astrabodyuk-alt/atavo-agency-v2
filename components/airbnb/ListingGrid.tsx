"use client";

import { X } from "lucide-react";
import { SERVICES, NICHE_LABELS, type Niche } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { useSearchStore } from "@/lib/searchStore";

export default function ListingGrid() {
  const { selectedNiche, setSelectedNiche } = useSearchStore();

  const filtered = selectedNiche
    ? SERVICES.filter((s) => s.niche === selectedNiche)
    : SERVICES;

  return (
    <section className="py-12 px-10">
      {/* Section header */}
      <div className="mb-2">
        <h2 className="font-display font-light text-[#1F1A16] text-3xl mb-2">
          Build your studio
        </h2>
        <p className="text-[#8A7B6C] text-sm max-w-xl">
          Pick the modules your business needs. Add to your build. We quote in 72h.
        </p>
      </div>

      {/* Active filter indicator */}
      {selectedNiche && (
        <div className="flex items-center gap-2 mt-5 mb-2">
          <span className="text-sm text-[#8A7B6C]">
            Showing{" "}
            <span className="text-[#1F1A16] font-medium">
              {NICHE_LABELS[selectedNiche as Niche]}
            </span>{" "}
            modules
          </span>
          <button
            onClick={() => setSelectedNiche(null)}
            className="flex items-center gap-1 text-xs text-[#8A7B6C] hover:text-[#1F1A16] border border-[#E4DACC] rounded-full px-2.5 py-1 transition-colors"
          >
            <X size={11} />
            Show all
          </button>
        </div>
      )}

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
