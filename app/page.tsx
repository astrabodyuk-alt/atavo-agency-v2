import Image from "next/image";
import Link from "next/link";
import { Globe, LayoutDashboard, Zap, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 4.1 — HERO */}
        <section className="min-h-[calc(100vh-4rem)] bg-canvas flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-24 w-full">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="md:w-1/2 flex flex-col gap-6">
                <span className="uppercase tracking-widest text-xs text-champagne font-medium">
                  UK Digital Agency
                </span>
                <h1 className="font-display font-light text-ink text-5xl md:text-7xl leading-[1.05]">
                  Your competitors are online. Are you?
                </h1>
                <p className="text-taupe text-lg max-w-md leading-relaxed">
                  We build bespoke websites, SaaS platforms and automation systems that help real businesses grow. Not templates. Not AI-slop. Crafted.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#audit"
                    className="inline-flex items-center justify-center bg-ink text-canvas rounded-sm px-6 py-3 text-sm font-medium hover:bg-ink/90 transition-colors"
                  >
                    Book a free audit
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center border border-ink text-ink rounded-sm px-6 py-3 text-sm font-medium hover:bg-ink hover:text-canvas transition-colors"
                  >
                    See our work
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <div className="rounded-xl overflow-hidden aspect-[4/5] relative bg-panel">
                  <Image
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200"
                    alt="Atavo studio work"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 bg-canvas rounded-lg shadow-lg p-4">
                    <p className="font-display text-ink text-xl font-light">10 days delivery</p>
                    <p className="text-taupe text-xs mt-0.5">From audit to live site</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.2 — TRUST STRIP */}
        <section className="bg-panel py-8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="uppercase tracking-widest text-xs text-taupe text-center">
              UK based &middot; Working worldwide &middot; Trusted by restaurants, studios, trades, beauty brands and indie founders
            </p>
          </div>
        </section>

        {/* 4.3 — SERVICES */}
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">What We Do</span>
              <h2 className="font-display font-light text-4xl md:text-5xl text-ink mt-3 mb-4">Three crafts, one studio.</h2>
              <p className="text-taupe max-w-xl leading-relaxed">
                We pick the right tool for the job. Sometimes that is a crisp marketing site. Sometimes a full SaaS. Often both, plus the automations that make them run themselves.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe size={24} className="text-champagne" />,
                  title: "Websites",
                  desc: "Bespoke, fast, conversion-tuned marketing sites. Built on Next.js, deployed on Vercel, tested on real devices. Delivered in 10 days.",
                },
                {
                  icon: <LayoutDashboard size={24} className="text-champagne" />,
                  title: "SaaS platforms",
                  desc: "Dashboards, booking systems, internal tools, CRMs. Supabase + Next.js + Stripe. We ship MVPs your users actually open twice.",
                },
                {
                  icon: <Zap size={24} className="text-champagne" />,
                  title: "Automation",
                  desc: "Make.com, n8n, custom workflows. Turn the 20 hours of admin a week into zero. We connect the tools you already pay for.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-canvas border border-linen rounded-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="font-display text-2xl text-ink mb-3">{card.title}</h3>
                  <p className="text-taupe text-sm leading-relaxed mb-6">{card.desc}</p>
                  <Link href="/services" className="text-ink text-sm hover:text-champagne transition-colors">Learn more &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.4 — WHAT MAKES US DIFFERENT */}
        <section className="py-24 bg-panel">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">The Atavo Method</span>
              <h2 className="font-display font-light text-4xl md:text-5xl text-ink mt-3">Why our sites actually sell.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Business deep-dive",
                  desc: "Before a pixel, we map your offer, your margins, your buyer. A site that does not know its buyer is a brochure with a URL.",
                },
                {
                  num: "02",
                  title: "Competitor intelligence",
                  desc: "We audit the 5 businesses fighting you for the same keywords. Then we build something they cannot copy in a weekend.",
                },
                {
                  num: "03",
                  title: "Strategic positioning",
                  desc: "Every section, every button, every photograph earns its spot. No filler. No stock-feeling hero video. Clear position, clear ask.",
                },
              ].map((item) => (
                <div key={item.num}>
                  <p className="font-display text-champagne text-6xl font-light mb-4">{item.num}</p>
                  <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-taupe text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 — WORK */}
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">Selected Work</span>
              <h2 className="font-display font-light text-4xl md:text-5xl text-ink mt-3">Recent builds.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-panel rounded-lg overflow-hidden">
                <div className="aspect-[4/3] relative bg-linen">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
                    alt="Beauty studio London"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-champagne/20 text-ink rounded-md text-xs px-2 py-1 mb-3">Website &middot; 10 days</span>
                  <h3 className="font-display text-2xl text-ink mb-2">A beauty studio, reimagined.</h3>
                  <p className="text-taupe text-sm mb-4">From placeholder WordPress to a feed-worthy booking site in ten days.</p>
                  <Link href="https://atavo-beauty-v2.vercel.app" target="_blank" className="text-ink text-sm hover:text-champagne transition-colors">View live &rarr;</Link>
                </div>
              </div>

              <div className="bg-panel rounded-lg overflow-hidden opacity-70">
                <div className="aspect-[4/3] relative bg-linen">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                    alt="Restaurant coming soon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-taupe/20 text-taupe rounded-md text-xs px-2 py-1 mb-3">Coming</span>
                  <h3 className="font-display text-2xl text-ink mb-2">A restaurant, rebuilt from scratch.</h3>
                  <p className="text-taupe text-sm mb-4">Food vertical. Coming Q2 2026.</p>
                  <span className="text-taupe text-sm">Coming soon</span>
                </div>
              </div>

              <div className="bg-panel rounded-lg overflow-hidden opacity-70">
                <div className="aspect-[4/3] relative bg-linen">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                    alt="Trades coming soon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-taupe/20 text-taupe rounded-md text-xs px-2 py-1 mb-3">Coming</span>
                  <h3 className="font-display text-2xl text-ink mb-2">A trades business, made credible.</h3>
                  <p className="text-taupe text-sm mb-4">Construction vertical. Coming Q3 2026.</p>
                  <span className="text-taupe text-sm">Coming soon</span>
                </div>
              </div>

              <div className="bg-panel rounded-lg overflow-hidden opacity-70">
                <div className="aspect-[4/3] relative bg-linen">
                  <Image
                    src="https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800"
                    alt="Beverage coming soon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-taupe/20 text-taupe rounded-md text-xs px-2 py-1 mb-3">Coming</span>
                  <h3 className="font-display text-2xl text-ink mb-2">A bar with a proper website.</h3>
                  <p className="text-taupe text-sm mb-4">Beverage vertical. Coming Q4 2026.</p>
                  <span className="text-taupe text-sm">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.6 — PRICING */}
        <section className="py-24 bg-panel">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">Pricing</span>
              <h2 className="font-display font-light text-4xl md:text-5xl text-ink mt-3">Two ways in.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-canvas border border-linen rounded-lg p-8">
                <p className="uppercase tracking-wider text-xs text-taupe mb-4">Audit</p>
                <p className="font-display text-5xl text-ink mb-2">£299</p>
                <p className="text-taupe text-sm mb-8">One-off, delivered in 72h</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Full competitor audit (5 businesses)",
                    "On-page + technical SEO review",
                    "Conversion + UX report",
                    "Priority action list (90 days)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-taupe">
                      <Check size={16} className="text-champagne mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#audit" className="block text-center border border-ink text-ink rounded-sm py-3 text-sm font-medium hover:bg-ink hover:text-canvas transition-colors">
                  Start with an audit
                </Link>
              </div>

              <div className="bg-ink text-canvas border border-ink rounded-lg p-8 relative">
                <span className="absolute top-6 right-6 bg-champagne text-ink rounded-md text-xs px-2 py-1 font-medium">Most popular</span>
                <p className="uppercase tracking-wider text-xs text-canvas/60 mb-4">Website</p>
                <p className="font-display text-5xl text-canvas mb-2">£699</p>
                <p className="text-canvas/70 text-sm mb-8">From audit to live in 10 days</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Bespoke design, not a template",
                    "Built on Next.js + Vercel",
                    "Mobile-first, SEO-ready, fast",
                    "90 days of post-launch support",
                    "All pages, all copy, all imagery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas/70">
                      <Check size={16} className="text-champagne mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#audit" className="block text-center bg-canvas text-ink rounded-sm py-3 text-sm font-medium hover:bg-canvas/90 transition-colors">
                  Book a free audit first
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4.7 — TESTIMONIAL */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-6 text-center">
            {/* TODO: replace with real client quote once available */}
            <blockquote className="font-display font-light text-ink text-3xl md:text-4xl leading-relaxed mb-8">
              &ldquo;We moved from WordPress to Atavo and doubled our booking conversions in three weeks. The site finally looks like we deserve.&rdquo;
            </blockquote>
            <p className="text-taupe text-sm">Beauty studio, London. Project delivered Q1 2026.</p>
          </div>
        </section>

        {/* 4.8 — AUDIT FORM */}
        <section id="audit" className="py-24 bg-panel">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display font-light text-4xl text-ink mb-4">Book your free business audit.</h2>
                <p className="text-taupe leading-relaxed mb-6">
                  Three quick questions. Then a 20-minute call. Then a written audit in your inbox within 72 hours. No pitch, no obligation.
                </p>
                <p className="text-taupe text-sm">Available Monday to Friday &middot; UK time</p>
              </div>

              <div className="bg-canvas border border-linen rounded-lg p-8">
                <form action="/api/audit-request" method="POST" className="flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">What&apos;s your business?</label>
                    <input
                      type="text"
                      name="business"
                      placeholder="e.g. Maison Claire, beauty studio"
                      className="w-full border border-linen rounded-sm px-4 py-3 text-sm text-ink bg-canvas placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Your website (if any)</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://..."
                      className="w-full border border-linen rounded-sm px-4 py-3 text-sm text-ink bg-canvas placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">What&apos;s the one thing you&apos;d fix if you could?</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full border border-linen rounded-sm px-4 py-3 text-sm text-ink bg-canvas placeholder:text-taupe/50 focus:outline-none focus:border-champagne transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-ink text-canvas rounded-sm py-3 text-sm font-medium hover:bg-ink/90 transition-colors"
                  >
                    Send my request
                  </button>
                  <p className="text-taupe text-xs text-center">We reply within 24h. Your details stay with us.</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 4.9 — FINAL CTA */}
        <section className="py-32 bg-ink text-canvas relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,117,0.2) 0%, transparent 70%)" }}
          />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <span className="uppercase tracking-widest text-xs text-champagne font-medium">Ready?</span>
            <h2 className="font-display font-light text-5xl md:text-6xl text-canvas mt-4 mb-6">
              Let&apos;s build the site your business deserves.
            </h2>
            <p className="text-canvas/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Start with a free audit. If we are the right fit, we will ship your new site in ten days.
            </p>
            <Link
              href="#audit"
              className="inline-flex items-center bg-champagne text-ink rounded-sm px-8 py-4 text-base font-medium hover:bg-champagne/90 transition-colors"
            >
              Book my free audit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
