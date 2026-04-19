import Link from "next/link";
import { Check } from "lucide-react";
import AirbnbHeader from "@/components/airbnb/Header";
import CategoryBar from "@/components/airbnb/CategoryBar";
import HeroBanner from "@/components/airbnb/HeroBanner";
import ListingGrid from "@/components/airbnb/ListingGrid";
import Services from "@/components/airbnb/Services";
import AirbnbFooter from "@/components/airbnb/Footer";
import AuditForm from "@/components/airbnb/AuditForm";

const pricingCards = [
  {
    label: "Audit",
    price: "Free",
    duration: "72 hours",
    featured: false,
    items: [
      "Your Google visibility in your postcode",
      "Your site measured against your top three",
      "Your Google Business profile, line by line",
      "One quiet upgrade for this week",
    ],
    cta: "Send AUDIT in DM",
  },
  {
    label: "Site",
    price: "From £1,500",
    duration: "10 days",
    featured: false,
    items: [
      "Bespoke site in the voice of your business",
      "Google Business Profile setup",
      "Local SEO on your postcode",
      "Three revisions",
    ],
    cta: "Book a call",
  },
  {
    label: "Site + SaaS",
    price: "From £3,000",
    duration: "14 days",
    featured: true,
    items: [
      "Everything in Site",
      "WhatsApp / email auto-reply assistant",
      "Birthday and loyalty automations",
      "Three months of quiet maintenance",
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

        {/* Selected work — filterable by niche */}
        <div id="work">
          <ListingGrid />
        </div>

        {/* Services — 2x2 discipline cards */}
        <Services />

        {/* About — The Studio */}
        <section id="about" className="py-20 px-10 bg-[#F5F0E8]">
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

        {/* Pricing — 3 cards */}
        <section id="pricing" className="py-20 px-10 bg-[#E8DFD2]">
          <span className="uppercase tracking-widest text-xs text-[#C9A875] font-medium">Pricing</span>
          <h2 className="font-display font-light text-[#1F1A16] text-4xl md:text-5xl mt-3 mb-12">
            Three ways in.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {pricingCards.map((card) => (
              <div
                key={card.label}
                className={`rounded-xl p-8 flex flex-col relative ${
                  card.featured
                    ? "bg-[#E8DFD2] border-2 border-[#C9A875]"
                    : "bg-[#F5F0E8] border border-[#E4DACC]"
                }`}
              >
                {card.featured && (
                  <span className="absolute top-5 right-5 bg-[#C9A875] text-[#1F1A16] text-xs font-semibold px-2 py-1 rounded-md">
                    Best value
                  </span>
                )}
                <p className="uppercase tracking-wider text-xs text-[#8A7B6C] mb-4">{card.label}</p>
                <p className="font-display font-light text-4xl text-[#1F1A16] mb-1">{card.price}</p>
                <p className="text-[#8A7B6C] text-sm mb-8">{card.duration}</p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#8A7B6C]">
                      <Check size={15} className="text-[#C9A875] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#audit"
                  className={`block text-center rounded-sm py-3 text-sm font-medium transition-colors ${
                    card.featured
                      ? "bg-[#1F1A16] text-[#F5F0E8] hover:bg-[#1F1A16]/90"
                      : "border border-[#1F1A16] text-[#1F1A16] hover:bg-[#1F1A16] hover:text-[#F5F0E8]"
                  }`}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Form */}
        <section id="audit" className="py-20 px-10 bg-[#F5F0E8]">
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

            <div className="bg-[#E8DFD2] border border-[#E4DACC] rounded-xl p-8 shadow-sm">
              <AuditForm />
            </div>
          </div>
        </section>
      </main>

      <AirbnbFooter />
    </>
  );
}
