import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-panel">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">Pricing</span>
              <h1 className="font-display font-light text-5xl md:text-6xl text-ink mt-3 mb-4">Two ways in.</h1>
              <p className="text-taupe max-w-xl leading-relaxed">
                Start with the audit. It stands alone as a useful document. If you like what you see, we move to the build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
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
                <Link href="/#audit" className="block text-center border border-ink text-ink rounded-sm py-3 text-sm font-medium hover:bg-ink hover:text-canvas transition-colors">
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
                <Link href="/#audit" className="block text-center bg-canvas text-ink rounded-sm py-3 text-sm font-medium hover:bg-canvas/90 transition-colors">
                  Book a free audit first
                </Link>
              </div>
            </div>

            <div className="mt-16 p-8 bg-canvas rounded-lg max-w-4xl">
              <h2 className="font-display text-2xl text-ink mb-3">Need something custom?</h2>
              <p className="text-taupe mb-6">SaaS platforms, automation systems, and multi-page builds are priced on scope. Start with a free audit and we will send a quote within 48 hours.</p>
              <Link href="/#audit" className="inline-flex bg-ink text-canvas rounded-sm px-6 py-3 text-sm font-medium hover:bg-ink/90 transition-colors">
                Book a free call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
