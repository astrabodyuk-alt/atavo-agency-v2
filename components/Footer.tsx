import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-canvas py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-light mb-4">
              Atavo<span className="text-champagne">.</span>
            </div>
            <p className="text-canvas/60 text-sm leading-relaxed mb-4">
              Crafted websites, SaaS and automation. UK based, working worldwide.
            </p>
            <a href="mailto:hello@atavo.co.uk" className="text-canvas/60 text-sm hover:text-canvas transition-colors">
              hello@atavo.co.uk
            </a>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs text-canvas/40 mb-4">Work</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="https://atavo-beauty-v2.vercel.app" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Beauty demo</Link></li>
              <li><span className="text-canvas/30 text-sm">Food demo (coming)</span></li>
              <li><span className="text-canvas/30 text-sm">BTP demo (coming)</span></li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs text-canvas/40 mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/services" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Websites</Link></li>
              <li><Link href="/services" className="text-canvas/60 text-sm hover:text-canvas transition-colors">SaaS</Link></li>
              <li><Link href="/services" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Automation</Link></li>
              <li><Link href="/pricing" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Audits</Link></li>
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-widest text-xs text-canvas/40 mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/about" className="text-canvas/60 text-sm hover:text-canvas transition-colors">About</Link></li>
              <li><Link href="/pricing" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Pricing</Link></li>
              <li><Link href="#audit" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Contact</Link></li>
              <li><Link href="/legal" className="text-canvas/60 text-sm hover:text-canvas transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-canvas/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-canvas/40 text-xs">
            &copy; 2026 Atavo Agency. Registered in the UK.
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="text-canvas/40 text-xs hover:text-canvas/60 transition-colors">Privacy</Link>
            <Link href="/legal" className="text-canvas/40 text-xs hover:text-canvas/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
