import Link from "next/link";
import { Globe } from "lucide-react";

const columns = [
  {
    heading: "Support",
    links: [
      { label: "Help Centre", href: "#" },
      { label: "Book an audit", href: "#audit" },
      { label: "Free consultation", href: "#audit" },
      { label: "Contact us", href: "mailto:hello@atavo.co.uk" },
      { label: "Cancel a project", href: "#" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Beauty studios", href: "/work" },
      { label: "Restaurants", href: "/work" },
      { label: "Trades", href: "/work" },
      { label: "Beverage", href: "/work" },
      { label: "SaaS", href: "/work" },
      { label: "E-commerce", href: "/work" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Websites", href: "/services" },
      { label: "SaaS platforms", href: "/services" },
      { label: "Automation", href: "/services" },
      { label: "SEO audits", href: "/services" },
      { label: "Branding", href: "/services" },
      { label: "Copywriting", href: "/services" },
    ],
  },
  {
    heading: "Atavo",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Legal", href: "/legal" },
      { label: "Privacy", href: "/legal" },
      { label: "Terms", href: "/legal" },
    ],
  },
];

export default function AirbnbFooter() {
  return (
    <footer className="bg-[#E8DFD2] border-t border-[#E4DACC]">
      <div className="px-5 md:px-10 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-[#1F1A16] text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8A7B6C] hover:text-[#1F1A16] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E4DACC] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-[#8A7B6C]">
            &copy; 2026 Atavo Agency &middot; United Kingdom &middot; Registered in England and Wales
          </p>
          <button className="flex items-center gap-2 text-sm text-[#1F1A16] font-medium hover:text-[#8A7B6C] transition-colors">
            <Globe size={16} />
            English (UK) &middot; GBP
          </button>
        </div>
      </div>
    </footer>
  );
}
