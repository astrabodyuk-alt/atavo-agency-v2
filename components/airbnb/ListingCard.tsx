import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

export interface ListingCardProps {
  badge: string;
  title: string;
  meta1: string;
  meta2: string;
  price: string;
  priceLabel: string;
  image: string;
  alt: string;
  href: string;
  isFeatured?: boolean;
  rating?: string;
}

export default function ListingCard({
  badge,
  title,
  meta1,
  meta2,
  price,
  priceLabel,
  image,
  alt,
  href,
  isFeatured = false,
  rating = "New",
}: ListingCardProps) {
  return (
    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} className="group block">
      {/* Image container — 1:1 aspect ratio, rounded-xl */}
      <div className="listing-image relative aspect-square rounded-xl overflow-hidden mb-3">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* Badge top-left */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block bg-[#F5F0E8] text-[#1F1A16] text-xs font-semibold rounded-full px-3 py-1 shadow-md ${
              isFeatured ? "bg-[#F5F0E8]" : ""
            }`}
          >
            {badge}
          </span>
        </div>
        {/* Heart top-right */}
        <button
          className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
          onClick={(e) => e.preventDefault()}
          aria-label="Save"
        >
          <Heart
            size={20}
            className="stroke-[#F5F0E8] fill-[#1F1A16]/40 drop-shadow-md"
          />
        </button>
      </div>

      {/* Info below image */}
      <div className="space-y-0.5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[#1F1A16] truncate">{title}</p>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <Star size={12} className="fill-[#1F1A16] stroke-none" />
            <span className="text-xs text-[#1F1A16]">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-[#8A7B6C]">{meta1}</p>
        <p className="text-sm text-[#8A7B6C]">{meta2}</p>
        <p className="text-sm text-[#1F1A16] pt-0.5">
          <span className="font-semibold">{price}</span>{" "}
          <span className="underline">{priceLabel}</span>
        </p>
      </div>
    </Link>
  );
}
