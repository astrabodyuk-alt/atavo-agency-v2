"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ListingCard, { type ListingCardProps } from "./ListingCard";

const listings: ListingCardProps[] = [
  {
    badge: "Guest favorite",
    title: "Maison Claire",
    meta1: "London · Beauty studio",
    meta2: "Delivered Q1 2026",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    alt: "Maison Claire beauty studio",
    href: "https://atavo-beauty-v2.vercel.app",
    isFeatured: true,
    rating: "5.0",
  },
  {
    badge: "Coming",
    title: "Spa Aetherea",
    meta1: "London · Wellness",
    meta2: "Booked for April",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    alt: "Spa Aetherea",
    href: "#",
  },
  {
    badge: "Coming",
    title: "Lush Bites",
    meta1: "Manchester · Restaurant",
    meta2: "Booked for May",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800",
    alt: "Lush Bites restaurant",
    href: "#",
  },
  {
    badge: "Coming",
    title: "Plum & Oak",
    meta1: "Bristol · Bakery",
    meta2: "Booked for May",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    alt: "Plum and Oak bakery",
    href: "#",
  },
  {
    badge: "Coming",
    title: "Henson Plumbing",
    meta1: "Reading · Trades",
    meta2: "Pipeline",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    alt: "Henson Plumbing",
    href: "#",
  },
  {
    badge: "Coming",
    title: "Bright Volt",
    meta1: "Birmingham · Electrician",
    meta2: "Pipeline",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
    alt: "Bright Volt electrical",
    href: "#",
  },
  {
    badge: "Coming",
    title: "Velvet Bar",
    meta1: "London · Cocktail",
    meta2: "Pipeline",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800",
    alt: "Velvet Bar",
    href: "#",
  },
  {
    badge: "Coming",
    title: "Press Juice",
    meta1: "Brighton · Juice bar",
    meta2: "Pipeline",
    price: "£699",
    priceLabel: "website",
    image: "https://images.unsplash.com/photo-1622597467836-f3e6707e1191?w=800",
    alt: "Press Juice bar",
    href: "#",
  },
];

export default function ListingGrid() {
  return (
    <section className="py-12 px-10">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
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

      {/* 4-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.title} {...listing} />
        ))}
      </div>
    </section>
  );
}
