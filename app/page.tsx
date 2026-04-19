import Link from "next/link";
import { Check, Compass, Search, Target } from "lucide-react";
import AirbnbHeader from "@/components/airbnb/Header";
import CategoryBar from "@/components/airbnb/CategoryBar";
import HeroBanner from "@/components/airbnb/HeroBanner";
import ListingGrid from "@/components/airbnb/ListingGrid";
import InspirationRail from "@/components/airbnb/InspirationRail";
import AirbnbFooter from "@/components/airbnb/Footer";
import AuditForm from "@/components/airbnb/AuditForm";

export default function Home() {
  return (
    <>
      <AirbnbHeader />
      <CategoryBar />

      <main className="bg-[#F5F0E8]">
        {/* 2.3 — Hero Banner */}
        <HeroBanner />

        {/* 2.4 — Selected Work Grid (Airbnb listings clone) */}
        <ListingGrid />

        {/* 2.5 — Horizontal Rail "Continue exploring" */}
        <InspirationRail />

        {/* 2.6 — Method Section */}
        <section className="py-20 px-10 bg-[#E8DFD2]">
          <span className="uppercase tracking-widest text-xs text-[#C9A875] font-medium">How We Build</span>
          <h2 className="font-display font-light text-[#1F1A16] text-4xl md:text-5xl mt-3 mb-12">
            Why our sites actually sell.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                num: "01",
                title: "Business deep-dive",
                desc: "Before a pixel, we map your offer, your margins, your buyer. A site that does not know its buyer is a brochure with a URL.",
              },
              {
                icon: Search,
                num: "02",
                title: "Competitor intelligence",
                desc: "We audit the 5 businesses fighting you for the same keywords. Then we build something they cannot copy in a weekend.",
              },
              {
                icon: Target,
                num: "03",
                title: "Strategic positioning",
                desc: "Every section, every button, every photograph earns its spot. No filler. No stock-feeling hero video. Clear position, clear ask.",
              },
            ].map(({ icon: Icon, num, title, desc }) => (
              <div key={num}>
                <div className="h-12 w-12 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#1F1A16]" />
                </div>
                <h3 className="font-display font-light text-[#1F1A16] text-xl mb-2">
                  {num} {title}
                </h3>
                <p className="text-[#8A7B6C] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2.7 — Pricing */}
        <section className="py-20 px-10 bg-[#F5F0E8]">
          <span className="uppercase tracking-widest text-xs text-[#C9A875] font-medium">Pricing</span>
          <h2 className="font-display font-light text-[#1F1A16] text-4xl md:text-5xl mt-3 mb-12">
            Two ways in.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* Card A */}
            <div className="bg-[#F5F0E8] border border-[#E4DACC] rounded-xl p-8">
              <p className="uppercase tracking-wider text-xs text-[#8A7B6C] mb-4">Audit</p>
              <p className="font-display font-light text-5xl text-[#1F1A16] mb-2">£299</p>
              <p className="text-[#8A7B6C] text-sm mb-8">One-off, delivered in 72h</p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Full competitor audit (5 businesses)",
                  "On-page + technical SEO review",
                  "Conversion + UX report",
                  "Priority action list (90 days)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#8A7B6C]">
                    <Check size={16} className="text-[#C9A875] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#audit"
                className="block text-center border border-[#1F1A16] text-[#1F1A16] rounded-sm py-3 text-sm font-medium hover:bg-[#1F1A16] hover:text-[#F5F0E8] transition-colors"
              >
                Start with an audit
              </Link>
            </div>
            {/* Card B */}
            <div className="bg-[#1F1A16] text-[#F5F0E8] rounded-xl p-8 relative">
              <span className="absolute top-6 right-6 bg-[#C9A875] text-[#1F1A16] rounded-md text-xs px-2 py-1 font-semibold">
                Most popular
              </span>
              <p className="uppercase tracking-wider text-xs text-[#F5F0E8]/60 mb-4">Website</p>
              <p className="font-display font-light text-5xl text-[#F5F0E8] mb-2">£699</p>
              <p className="text-[#F5F0E8]/70 text-sm mb-8">From audit to live in 10 days</p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Bespoke design, not a template",
                  "Built on Next.js + Vercel",
                  "Mobile-first, SEO-ready, fast",
                  "90 days of post-launch support",
                  "All pages, all copy, all imagery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#F5F0E8]/70">
                    <Check size={16} className="text-[#C9A875] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#audit"
                className="block text-center bg-[#F5F0E8] text-[#1F1A16] rounded-sm py-3 text-sm font-medium hover:bg-[#E8DFD2] transition-colors"
              >
                Book a free audit first
              </Link>
            </div>
          </div>
        </section>

        {/* 2.8 — Audit Form */}
        <section id="audit" className="py-20 px-10 bg-[#E8DFD2]">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h2 className="font-display font-light text-4xl text-[#1F1A16] mb-4">
                Book your free business audit.
              </h2>
              <p className="text-[#8A7B6C] leading-relaxed mb-6">
                Three quick questions. Then a 20-minute call. Then a written audit in your inbox within 72 hours. No pitch, no obligation.
              </p>
              <p className="text-[#8A7B6C] text-sm">Available Monday to Friday &middot; UK time</p>

              {/* TODO: replace with real client quote once available */}
              <blockquote className="mt-10 border-l-2 border-[#C9A875] pl-6">
                <p className="font-display font-light text-[#1F1A16] text-xl leading-relaxed">
                  &ldquo;We moved from WordPress to Atavo and doubled our booking conversions in three weeks. The site finally looks like we deserve.&rdquo;
                </p>
                <footer className="mt-3 text-[#8A7B6C] text-xs">Beauty studio, London. Project delivered Q1 2026.</footer>
              </blockquote>
            </div>

            <div className="bg-[#F5F0E8] border border-[#E4DACC] rounded-xl p-8 shadow-sm">
              <AuditForm />
            </div>
          </div>
        </section>
      </main>

      <AirbnbFooter />
    </>
  );
}
