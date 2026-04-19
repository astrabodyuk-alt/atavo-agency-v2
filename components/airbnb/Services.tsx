import Link from "next/link";
import { Globe, LayoutDashboard, Zap, Search, Check } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Websites.",
    tagline: "Built to pour the right glass.",
    body: "Bespoke sites in the voice of your business. Google Business profile, local SEO on your postcode, three revisions. Delivered in 10 days.",
    price: "From £1,500",
    featured: false,
    badge: null,
  },
  {
    icon: LayoutDashboard,
    title: "SaaS.",
    tagline: "A quiet assistant that never forgets.",
    body: "WhatsApp and email auto-reply. Birthday and loyalty automations. Private event routing. The engine that keeps them coming back.",
    price: "From £3,000",
    featured: false,
    badge: null,
  },
  {
    icon: Zap,
    title: "Automation.",
    tagline: "Your Make.com workshop.",
    body: "Book + notify + nudge. Connect your CRM, your calendar, your inbox. Automations that save four to six hours a week.",
    price: "From £900",
    featured: false,
    badge: null,
  },
  {
    icon: Search,
    title: "Audits.",
    tagline: "A deep reading, before anything.",
    body: "Your Google visibility, your site measured against your top three, your GMB profile line by line. One quiet upgrade for this week.",
    price: "Free · 72h",
    featured: true,
    badge: "Start here",
  },
];

const bullets = [
  "Google visibility in your postcode",
  "Site vs. your top 3 competitors",
  "GMB profile review, line by line",
  "One action for this week",
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-10 bg-[#E8DFD2]">
      <span className="uppercase tracking-widest text-xs text-[#C9A875] font-medium">What we build</span>
      <h2 className="font-display font-light text-[#1F1A16] text-4xl md:text-5xl mt-3 mb-3">
        Four disciplines, one hand.
      </h2>
      <p className="text-[#8A7B6C] text-base mb-12 max-w-xl">
        We work across websites, SaaS, automation and audits — always for the same kind of business: quiet, premium, local.
      </p>

      {/* 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`rounded-xl p-8 flex flex-col relative ${
                card.featured
                  ? "bg-[#F5F0E8] border-2 border-[#C9A875]"
                  : "bg-[#F5F0E8] border border-[#E4DACC]"
              }`}
            >
              {card.badge && (
                <span className="absolute top-6 right-6 bg-[#C9A875] text-[#1F1A16] text-xs font-semibold px-2.5 py-1 rounded-md">
                  {card.badge}
                </span>
              )}

              <div className="h-12 w-12 rounded-full bg-[#E8DFD2] flex items-center justify-center mb-5">
                <Icon size={20} className="text-[#1F1A16]" />
              </div>

              <h3 className="font-display font-light text-[#1F1A16] text-2xl mb-1">{card.title}</h3>
              <p className="text-[#C9A875] text-sm font-medium mb-4 italic">{card.tagline}</p>
              <p className="text-[#8A7B6C] text-sm leading-relaxed mb-6 flex-1">{card.body}</p>

              {/* Bullets only on the Audit card */}
              {card.featured && (
                <ul className="flex flex-col gap-2 mb-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#8A7B6C]">
                      <Check size={14} className="text-[#C9A875] mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E4DACC]">
                <span className="font-display font-light text-[#1F1A16] text-xl">{card.price}</span>
                <Link
                  href="#audit"
                  className="text-xs font-medium text-[#8A7B6C] hover:text-[#1F1A16] transition-colors"
                >
                  {card.featured ? "Send AUDIT in DM →" : "Book a call →"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section-level CTA */}
      <div className="flex items-center gap-4">
        <Link
          href="#audit"
          className="inline-flex items-center bg-[#1F1A16] text-[#F5F0E8] rounded-sm px-6 py-3 text-sm font-medium hover:bg-[#1F1A16]/90 transition-colors"
        >
          Send AUDIT in DM
        </Link>
        <span className="text-[#8A7B6C] text-sm">Free · delivered in 72 hours</span>
      </div>
    </section>
  );
}
