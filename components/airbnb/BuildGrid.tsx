"use client";

import { SERVICES, type Niche, type Service } from "@/data/services";
import { useSearchStore } from "@/lib/searchStore";
import ServiceCard from "./ServiceCard";

function matchesNiche(service: Service, niche: Niche): boolean {
  return Array.isArray(service.niche)
    ? service.niche.includes(niche)
    : service.niche === niche;
}

export default function BuildGrid({ nicheKey }: { nicheKey: string }) {
  const { billingMode, setBillingMode } = useSearchStore();
  const filtered = SERVICES.filter((s) => matchesNiche(s, nicheKey as Niche));

  return (
    <div>
      {/* Billing mode toggle */}
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex rounded-full border border-[#E4DACC] bg-white p-1">
          <button
            onClick={() => setBillingMode("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              billingMode === "monthly"
                ? "bg-[#1F1A16] text-[#F5F0E8]"
                : "text-[#8A7B6C] hover:text-[#1F1A16]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingMode("oneoff")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              billingMode === "oneoff"
                ? "bg-[#1F1A16] text-[#F5F0E8]"
                : "text-[#8A7B6C] hover:text-[#1F1A16]"
            }`}
          >
            One-off
          </button>
        </div>
        <span className="text-xs text-[#8A7B6C]">
          Switch to see pricing by month or upfront payment
        </span>
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
