import { notFound } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import { NICHES } from "@/data/niches";
import BuildGrid from "@/components/airbnb/BuildGrid";
import CartBar from "@/components/airbnb/CartBar";

export function generateStaticParams() {
  return NICHES.map((n) => ({ niche: n.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>;
}) {
  const { niche: nicheKey } = await params;
  const entry = NICHES.find((n) => n.key === nicheKey);
  if (!entry) return {};
  return {
    title: `${entry.label} websites & digital tools — Atavo Agency Hampshire`,
    description: `Bespoke websites, booking systems, loyalty and review automation for ${entry.label.toLowerCase()} businesses in Hampshire. Get a quote in 72h.`,
  };
}

export default async function BuildNichePage({
  params,
}: {
  params: Promise<{ niche: string }>;
}) {
  const { niche: nicheKey } = await params;
  const entry = NICHES.find((n) => n.key === nicheKey);
  if (!entry) notFound();

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Sticky header: wordmark + niche tabs + close */}
      <header className="sticky top-0 z-40 bg-[#F5F0E8]/95 backdrop-blur-sm border-b border-[#E4DACC]/50">
        <div className="flex items-center justify-between gap-4 px-5 md:px-10 py-4">
          <Link
            href="/"
            className="font-display font-light text-xl text-[#1F1A16] hover:opacity-70 transition-opacity"
          >
            Atavo.
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E4DACC] hover:bg-[#E8DFD2] transition-colors"
            aria-label="Back to home"
          >
            <X size={18} className="text-[#1F1A16]" />
          </Link>
        </div>

        {/* Niche tabs — Server Component, icons rendered directly */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide px-5 md:px-10 pb-1">
          {NICHES.map(({ key, label, Icon }) => (
            <Link
              key={key}
              href={`/build/${key}`}
              className={`flex items-center gap-2 pb-3 whitespace-nowrap border-b-2 transition-colors shrink-0 text-sm font-medium ${
                key === entry.key
                  ? "border-[#1F1A16] text-[#1F1A16]"
                  : "border-transparent text-[#8A7B6C] hover:text-[#1F1A16]"
              }`}
            >
              <Icon size={16} strokeWidth={1.5} />
              {label}
            </Link>
          ))}
        </div>
      </header>

      {/* Page title */}
      <section className="px-5 md:px-10 pt-10 pb-6 max-w-7xl mx-auto">
        <h1 className="font-display font-light text-3xl md:text-5xl text-[#1F1A16]">
          {entry.cta}
        </h1>
        <p className="mt-3 text-[#8A7B6C] md:text-lg max-w-2xl">
          Pick the modules your {entry.label.toLowerCase()} business needs. Add to your build.
          We quote within 72 hours.
        </p>
      </section>

      {/* Service grid — Client Component, filters + renders itself */}
      <main className="px-5 md:px-10 pb-40 max-w-7xl mx-auto">
        <BuildGrid nicheKey={entry.key} />
      </main>

      {/* Sticky cart bar */}
      <CartBar />
    </div>
  );
}
