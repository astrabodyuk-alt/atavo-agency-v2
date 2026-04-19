import Link from "next/link";
import { Globe, LayoutDashboard, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">Our Services</span>
              <h1 className="font-display font-light text-5xl md:text-6xl text-ink mt-3 mb-4">Three crafts, one studio.</h1>
              <p className="text-taupe max-w-xl leading-relaxed">
                We pick the right tool for the job. Sometimes that is a crisp marketing site. Sometimes a full SaaS. Often both, plus the automations that make them run themselves.
              </p>
            </div>

            <div className="flex flex-col gap-16">
              {[
                {
                  icon: <Globe size={32} className="text-champagne" />,
                  title: "Websites",
                  desc: "Bespoke, fast, conversion-tuned marketing sites. Built on Next.js, deployed on Vercel, tested on real devices. Delivered in 10 days. We do not use templates or page builders. Everything is crafted from scratch to fit your business, your buyer, and your positioning.",
                  tags: ["Next.js", "Vercel", "Tailwind CSS", "Mobile-first"],
                },
                {
                  icon: <LayoutDashboard size={32} className="text-champagne" />,
                  title: "SaaS platforms",
                  desc: "Dashboards, booking systems, internal tools, CRMs. Supabase + Next.js + Stripe. We ship MVPs your users actually open twice. Authentication, database, payments, and a UI that makes sense on day one.",
                  tags: ["Supabase", "Stripe", "Next.js", "TypeScript"],
                },
                {
                  icon: <Zap size={32} className="text-champagne" />,
                  title: "Automation",
                  desc: "Make.com, n8n, custom workflows. Turn the 20 hours of admin a week into zero. We connect the tools you already pay for. CRM sync, invoice generation, onboarding sequences, reporting.",
                  tags: ["Make.com", "n8n", "Zapier", "Custom APIs"],
                },
              ].map((service) => (
                <div key={service.title} className="grid md:grid-cols-2 gap-12 items-start py-12 border-t border-linen">
                  <div>
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="font-display text-3xl text-ink mb-4">{service.title}</h2>
                    <p className="text-taupe leading-relaxed mb-6">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="bg-linen text-taupe text-xs px-3 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-panel rounded-lg p-8">
                    <p className="font-display text-4xl text-ink mb-2">From £699</p>
                    <p className="text-taupe text-sm mb-6">Delivered in 10 days</p>
                    <Link href="/#audit" className="block text-center bg-ink text-canvas rounded-sm py-3 text-sm font-medium hover:bg-ink/90 transition-colors">
                      Book a free audit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
