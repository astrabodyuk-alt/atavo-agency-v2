"use client";

import { SERVICES, type Niche, type Service } from "@/data/services";
import ServiceCard from "./ServiceCard";

function matchesNiche(service: Service, niche: Niche): boolean {
  return Array.isArray(service.niche)
    ? service.niche.includes(niche)
    : service.niche === niche;
}

export default function BuildGrid({ nicheKey }: { nicheKey: string }) {
  const filtered = SERVICES.filter((s) => matchesNiche(s, nicheKey as Niche));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {filtered.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
