import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "A beauty studio, reimagined.",
    sub: "From placeholder WordPress to a feed-worthy booking site in ten days.",
    badge: "Website · 10 days",
    href: "https://atavo-beauty-v2.vercel.app",
    linkLabel: "View live →",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    alt: "Beauty studio London",
    coming: false,
  },
  {
    title: "A restaurant, rebuilt from scratch.",
    sub: "Food vertical. Coming Q2 2026.",
    badge: "Coming",
    href: "#",
    linkLabel: "Coming soon",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    alt: "Restaurant",
    coming: true,
  },
  {
    title: "A trades business, made credible.",
    sub: "Construction vertical. Coming Q3 2026.",
    badge: "Coming",
    href: "#",
    linkLabel: "Coming soon",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    alt: "Trades",
    coming: true,
  },
  {
    title: "A bar with a proper website.",
    sub: "Beverage vertical. Coming Q4 2026.",
    badge: "Coming",
    href: "#",
    linkLabel: "Coming soon",
    img: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800",
    alt: "Bar",
    coming: true,
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="uppercase tracking-widest text-xs text-champagne font-medium">Selected Work</span>
              <h1 className="font-display font-light text-5xl md:text-6xl text-ink mt-3">Recent builds.</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div key={p.title} className={`bg-panel rounded-lg overflow-hidden ${p.coming ? "opacity-70" : ""}`}>
                  <div className="aspect-[4/3] relative bg-linen">
                    <Image src={p.img} alt={p.alt} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block rounded-md text-xs px-2 py-1 mb-3 ${p.coming ? "bg-taupe/20 text-taupe" : "bg-champagne/20 text-ink"}`}>
                      {p.badge}
                    </span>
                    <h3 className="font-display text-2xl text-ink mb-2">{p.title}</h3>
                    <p className="text-taupe text-sm mb-4">{p.sub}</p>
                    {p.coming ? (
                      <span className="text-taupe text-sm">{p.linkLabel}</span>
                    ) : (
                      <Link href={p.href} target="_blank" className="text-ink text-sm hover:text-champagne transition-colors">{p.linkLabel}</Link>
                    )}
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
