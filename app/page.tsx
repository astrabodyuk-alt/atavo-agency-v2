import Link from "next/link";
import { Check } from "lucide-react";
import AirbnbHeader from "@/components/airbnb/Header";
import CategoryBar from "@/components/airbnb/CategoryBar";
import HeroBanner from "@/components/airbnb/HeroBanner";
import Services from "@/components/airbnb/Services";
import AirbnbFooter from "@/components/airbnb/Footer";
import AuditForm from "@/components/airbnb/AuditForm";
import CartWidget from "@/components/airbnb/CartWidget";

const pricingCards = [
  {
    label: "Essential",
    title: "Landing page",
    price: "£790",
    subPrice: "one-time",
    featured: false,
    badge: null,
    items: [
      { text: "Full Business Intelligence Report (£499 value · included)", anchor: true },
      { text: "One focused landing page", anchor: false },
      { text: "Google Business Profile setup", anchor: false },
      { text: "Local SEO baseline", anchor: false },
      { text: "One round of revisions", anchor: false },
    ],
    cta: "Book a call",
  },
  {
    label: "Studio",
    title: "Full website",
    price: "£1,490",
    subPrice: "one-time",
    featured: true,
    badge: "Most chosen",
    items: [
      { text: "Full Business Intelligence Report (£499 value · included)", anchor: true },
      { text: "Bespoke site in the voice of your business", anchor: false },
      { text: "Copywriting, design and SEO included", anchor: false },
      { text: "Google Business Profile optimised", anchor: false },
      { text: "Three rounds of revisions", anchor: false },
    ],
    cta: "Book a call",
  },
  {
    label: "Atelier",
    title: "Website + SaaS / automation",
    price: "From £3,500",
    subPrice: "Bespoke quote",
    featured: false,
    badge: "Best value",
    items: [
      { text: "Full Business Intelligence Report (£499 value · included)", anchor: true },
      { text: "Everything in Studio", anchor: false },
      { text: "WhatsApp / email auto-reply assistant", anchor: false },
      { text: "Birthday and loyalty automations", anchor: false },
      { text: "Three months of quiet maintenance", anchor: false },
    ],
    cta: "Book a call",
  },
];

export default function Home() {
  return (
    <>
      <AirbnbHeader />
      <CategoryBar />

      <main className="bg-[#F5F0E8]">
        {/* Hero */}
        <HeroBanner />

        {/* Services — 2x2 discipline cards */}
        <Services />

        {/* About — The Studio */}
        <section id="about" className="py-12 md:py-20 px-5 md:px-10 bg-[#F5F0E8]">
          <div className="max-w-2xl">
            <span className="uppercase tracking-widest text-xs text-[#C9A875] font-medium">The Studio</span>
            <p className="text-[#8A7B6C] text-sm mt-3 mb-6 tracking-wide">
              Slow atelier &middot; Winchester &middot; Hampshire
            </p>
            <h2 className="font-display font-light text-[#1F1A16] text-4xl md:text-5xl leading-[1.1] mb-8">
              One quiet workshop for businesses that want to grow.
            </h2>
            <p className="text-[#8A7B6C] leading-relaxed text-base mb-6">
              Atavo is a small digital studio in Hampshire. We build websites, SaaS and automations for a handful of businesses each quarter — beauty houses, restaurants, cellars, craftsmen, trades. Before we build, we audit. Before we ship, we read. Three clients a month. No more.
            </p>
            <p className="text-[#8A7B6C] text-sm font-medium mt-8">— Nigel, Winchester</p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 md:py-20 px-5 md:px-10 bg-[#E8DFD2]">
          <span className="uppercase tracking-widest text-xs text-[#C9A875] font-medium">Pricing</span>
          <h2 className="font-display font-light text-[#1F1A16] text-4xl md:text-5xl mt-3 mb-4">
            Three ways in.
          </h2>

          {/* Value anchor line */}
          <p className="italic text-[#8A7B6C] text-sm mb-12 max-w-xl">
            Every paid tier includes our Full Business Intelligence Report — a £499 value, included.
          </p>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-8">
            {pricingCards.map((card) => (
              <div
                key={card.label}
                className={`rounded-xl p-8 flex flex-col relative ${
                  card.featured
                    ? "bg-[#1F1A16] text-[#F5F0E8] border-2 border-[#1F1A16]"
                    : "bg-[#F5F0E8] border border-[#E4DACC]"
                }`}
              >
                {card.badge && (
                  <span className="absolute top-5 right-5 bg-[#C9A875] text-[#1F1A16] text-xs font-semibold px-2 py-1 rounded-md">
                    {card.badge}
                  </span>
                )}

                <p className={`uppercase tracking-wider text-xs mb-3 ${card.featured ? "text-[#F5F0E8]/50" : "text-[#8A7B6C]"}`}>
                  {card.label}
                </p>
                <p className={`font-display font-light text-xl mb-1 ${card.featured ? "text-[#F5F0E8]" : "text-[#1F1A16]"}`}>
                  {card.title}
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className={`font-display font-light text-3xl ${card.featured ? "text-[#F5F0E8]" : "text-[#1F1A16]"}`}>
                    {card.price}
                  </span>
                  <span className={`text-xs ${card.featured ? "text-[#F5F0E8]/50" : "text-[#8A7B6C]"}`}>
                    {card.subPrice}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {card.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm">
                      <Check
                        size={15}
                        className="text-[#C9A875] mt-0.5 shrink-0"
                      />
                      {item.anchor ? (
                        <span className={`font-medium ${card.featured ? "text-[#C9A875]" : "text-[#1F1A16]"}`}>
                          {item.text}
                        </span>
                      ) : (
                        <span className={card.featured ? "text-[#F5F0E8]/70" : "text-[#8A7B6C]"}>
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#audit"
                  className={`block text-center rounded-sm py-3 text-sm font-medium transition-colors ${
                    card.featured
                      ? "bg-[#C9A875] text-[#1F1A16] hover:bg-[#B8996A]"
                      : "border border-[#1F1A16] text-[#1F1A16] hover:bg-[#1F1A16] hover:text-[#F5F0E8]"
                  }`}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Just the audit? */}
          <div className="max-w-5xl bg-[#F5F0E8] border border-[#E4DACC] rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-display font-light text-[#1F1A16] text-xl mb-1">
                Just want the audit?
              </p>
              <p className="text-[#1F1A16] font-medium text-sm mb-2">
                Full Business Intelligence Report &middot; £499
              </p>
              <p className="text-[#8A7B6C] text-sm max-w-lg">
                Complete SEO audit, competitor analysis, 90-day action plan. If you commission a website within 30 days, the £499 is deducted from your total.
              </p>
            </div>
            <Link
              href="#audit"
              className="shrink-0 inline-flex items-center border border-[#1F1A16] text-[#1F1A16] rounded-sm px-6 py-3 text-sm font-medium hover:bg-[#1F1A16] hover:text-[#F5F0E8] transition-colors whitespace-nowrap"
            >
              Order the audit
            </Link>
          </div>

          {/* Footnotes */}
          <div className="mt-6 flex flex-col gap-1.5 max-w-lg">
            <p className="text-[#8A7B6C] text-xs">
              Rush delivery available on request — adds £200–£500 depending on scope. Discuss during your call.
            </p>
          </div>
        </section>

        {/* Audit Form */}
        <section id="audit" className="py-12 md:py-20 px-5 md:px-10 bg-[#F5F0E8]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl">
            <div>
              <h2 className="font-display font-light text-4xl text-[#1F1A16] mb-4">
                Start with a free quick scan.
              </h2>
              <p className="text-[#8A7B6C] leading-relaxed mb-3">
                Tell us about your business. We send back 3–5 concrete wins on your current site, via email. No call required. No pitch.
              </p>
              <p className="text-[#8A7B6C] text-xs italic mb-6">
                Free Quick Scan &middot; 3–5 wins on your current site, delivered in 72h.
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

            <div className="bg-[#E8DFD2] border border-[#E4DACC] rounded-xl p-8 shadow-sm">
              <AuditForm />
            </div>
          </div>
        </section>
      </main>

      <AirbnbFooter />
      <CartWidget />
    </>
  );
}
