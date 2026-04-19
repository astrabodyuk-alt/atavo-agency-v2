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
      {/* Billing mode toggle + Klarna badge */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
        <div className="inline-flex rounded-full border border-[#E4DACC] bg-white p-1 self-start">
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

        {/* Global Klarna message */}
        <div className="flex items-center gap-2 text-xs text-[#8A7B6C]">
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-sm text-[#1F1A16] text-[10px] font-bold shrink-0"
            style={{ backgroundColor: "#FFB3C7" }}
            aria-hidden="true"
          >
            K
          </span>
          <span>Split any build project in 3 with Klarna — 0% interest</span>
        </div>
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
