"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ListingCard, { type ListingCardProps } from "./ListingCard";
import { useSearchStore } from "@/lib/searchStore";

type Listing = ListingCardProps & { niche: string };

const ALL_LISTINGS: Listing[] = [
  // BEAUTY
  { niche: "beauty", badge: "Live", title: "Maison Claire", meta1: "Winchester · Beauty", meta2: "Live · Winchester", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800", alt: "Maison Claire beauty studio", href: "https://atavo-beauty-v2.vercel.app", isFeatured: true, rating: "5.0" },
  { niche: "beauty", badge: "Coming", title: "Spa Aetherea", meta1: "Winchester · Day spa", meta2: "In progress", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800", alt: "Spa Aetherea", href: "#" },
  { niche: "beauty", badge: "Coming", title: "Cerise Beauty", meta1: "Hampshire · Beauty", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800", alt: "Cerise Beauty", href: "#" },

  // FOOD
  { niche: "food", badge: "Coming", title: "Quinn House", meta1: "Winchester · Restaurant", meta2: "In progress", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800", alt: "Quinn House restaurant", href: "#" },
  { niche: "food", badge: "Coming", title: "The Alresford Kitchen", meta1: "Hampshire · Café", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", alt: "The Alresford Kitchen", href: "#" },
  { niche: "food", badge: "Coming", title: "Plum & Oak", meta1: "Hampshire · Bakery", meta2: "In progress", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800", alt: "Plum and Oak bakery", href: "#" },

  // BEVERAGE
  { niche: "beverage", badge: "Coming", title: "Cellar Mill", meta1: "Romsey · Wine cellar", meta2: "In progress", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800", alt: "Cellar Mill wine", href: "#" },
  { niche: "beverage", badge: "Coming", title: "Velvet Bar", meta1: "Winchester · Cocktail bar", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800", alt: "Velvet Bar", href: "#" },
  { niche: "beverage", badge: "Coming", title: "Press Juice", meta1: "Hampshire · Juice bar", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1622597467836-f3e6707e1191?w=800", alt: "Press Juice bar", href: "#" },

  // CRAFT
  { niche: "craft", badge: "Coming", title: "Atelier Rowan", meta1: "Romsey · Florist", meta2: "In progress", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1487530811015-780c5c89d034?w=800", alt: "Atelier Rowan florist", href: "#" },
  { niche: "craft", badge: "Coming", title: "The Romsey Florist", meta1: "Romsey · Florist", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1490750967868-88df5691cc89?w=800", alt: "The Romsey Florist", href: "#" },
  { niche: "craft", badge: "Coming", title: "Oakwood Joinery", meta1: "Hampshire · Joiner", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800", alt: "Oakwood Joinery", href: "#" },

  // TRADES
  { niche: "trades", badge: "Coming", title: "Linfield Plumbing", meta1: "Winchester · Plumbing", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", alt: "Linfield Plumbing", href: "#" },
  { niche: "trades", badge: "Coming", title: "Bright Volt", meta1: "Hampshire · Electrician", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800", alt: "Bright Volt electrical", href: "#" },
  { niche: "trades", badge: "Coming", title: "Henson Building", meta1: "Hampshire · Builder", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", alt: "Henson Building", href: "#" },

  // HOSPITALITY
  { niche: "hospitality", badge: "Coming", title: "Whitfield Hotel", meta1: "Winchester · Hotel", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", alt: "Whitfield Hotel", href: "#" },
  { niche: "hospitality", badge: "Coming", title: "The Mill House", meta1: "Hampshire · B&B", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", alt: "The Mill House B&B", href: "#" },
  { niche: "hospitality", badge: "Coming", title: "Meadow Inn", meta1: "Hampshire · Inn", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800", alt: "Meadow Inn", href: "#" },

  // ECOMMERCE
  { niche: "ecommerce", badge: "Coming", title: "Preston Goods", meta1: "Winchester · Homeware", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800", alt: "Preston Goods", href: "#" },
  { niche: "ecommerce", badge: "Coming", title: "Linen & Sage", meta1: "Hampshire · Lifestyle", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800", alt: "Linen and Sage", href: "#" },
  { niche: "ecommerce", badge: "Coming", title: "Oak Lane Homewares", meta1: "Hampshire · Home", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800", alt: "Oak Lane Homewares", href: "#" },

  // STUDIO
  { niche: "studio", badge: "Coming", title: "Studio Crestwood", meta1: "Winchester · Photography", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800", alt: "Studio Crestwood", href: "#" },
  { niche: "studio", badge: "Coming", title: "Maison Lumière", meta1: "Hampshire · Photo studio", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=800", alt: "Maison Lumiere Studio", href: "#" },
  { niche: "studio", badge: "Coming", title: "The Frame Studio", meta1: "Hampshire · Yoga studio", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800", alt: "The Frame Studio", href: "#" },

  // RETAIL
  { niche: "retail", badge: "Coming", title: "Blackwood Boutique", meta1: "Winchester · Fashion", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800", alt: "Blackwood Boutique", href: "#" },
  { niche: "retail", badge: "Coming", title: "The Curated Corner", meta1: "Hampshire · Gifts", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800", alt: "The Curated Corner", href: "#" },
  { niche: "retail", badge: "Coming", title: "Sage & Stone", meta1: "Hampshire · Interiors", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800", alt: "Sage and Stone", href: "#" },

  // WELLNESS
  { niche: "wellness", badge: "Coming", title: "River Flow Yoga", meta1: "Winchester · Yoga", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800", alt: "River Flow Yoga", href: "#" },
  { niche: "wellness", badge: "Coming", title: "Calm & Carry", meta1: "Hampshire · Wellbeing", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800", alt: "Calm and Carry", href: "#" },
  { niche: "wellness", badge: "Coming", title: "Whitefield Pilates", meta1: "Hampshire · Pilates", meta2: "Coming soon", price: "£1,500", priceLabel: "website", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800", alt: "Whitefield Pilates", href: "#" },
];

const NICHE_LABELS: Record<string, string> = {
  beauty: "Beauty", food: "Food", trades: "Trades", beverage: "Beverage",
  hospitality: "Hospitality", ecommerce: "E-commerce", craft: "Craft",
  studio: "Studio", retail: "Retail", wellness: "Wellness",
};

// Default view: one card per niche (the first one from each), capped at 8
const DEFAULT_LISTINGS = Object.values(
  ALL_LISTINGS.reduce<Record<string, Listing>>((acc, l) => {
    if (!acc[l.niche]) acc[l.niche] = l;
    return acc;
  }, {})
).slice(0, 8);

export default function ListingGrid() {
  const { selectedNiche, setSelectedNiche } = useSearchStore();

  const filtered = selectedNiche
    ? ALL_LISTINGS.filter((l) => l.niche === selectedNiche)
    : DEFAULT_LISTINGS;

  return (
    <section className="py-12 px-10">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-light text-[#1F1A16] text-3xl">Selected work</h2>
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow" aria-label="Previous">
            <ChevronLeft size={16} className="text-[#1F1A16]" />
          </button>
          <button className="h-10 w-10 rounded-full border border-[#E4DACC] bg-[#F5F0E8] shadow-sm hover:shadow-md flex items-center justify-center transition-shadow" aria-label="Next">
            <ChevronRight size={16} className="text-[#1F1A16]" />
          </button>
        </div>
      </div>

      {/* Active filter indicator */}
      {selectedNiche && (
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-[#8A7B6C]">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""} in{" "}
            <span className="text-[#1F1A16] font-medium">{NICHE_LABELS[selectedNiche]}</span>
          </span>
          <button
            onClick={() => setSelectedNiche(null)}
            className="flex items-center gap-1 text-xs text-[#8A7B6C] hover:text-[#1F1A16] border border-[#E4DACC] rounded-full px-2.5 py-1 transition-colors"
          >
            <X size={11} />
            Clear filter
          </button>
        </div>
      )}

      {/* 4-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((listing) => {
          const { niche: _niche, ...cardProps } = listing;
          return <ListingCard key={`${listing.niche}-${listing.title}`} {...cardProps} />;
        })}
      </div>
    </section>
  );
}
