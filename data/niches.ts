import {
  Sparkles, UtensilsCrossed, Hammer, Wine, BedDouble,
  ShoppingBag, Palette, Camera, Tag, Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Niche } from "./services";

export type NicheEntry = {
  key: Niche;
  label: string;
  Icon: LucideIcon;
  cta: string;
};

export const NICHES: NicheEntry[] = [
  { key: "beauty",      label: "Beauty",      Icon: Sparkles,        cta: "Build your beauty studio" },
  { key: "food",        label: "Food",        Icon: UtensilsCrossed, cta: "Build your restaurant brand" },
  { key: "trades",      label: "Trades",      Icon: Hammer,          cta: "Build your trade business" },
  { key: "beverage",    label: "Beverage",    Icon: Wine,            cta: "Build your beverage brand" },
  { key: "hospitality", label: "Hospitality", Icon: BedDouble,       cta: "Build your hospitality brand" },
  { key: "ecommerce",   label: "E-commerce",  Icon: ShoppingBag,     cta: "Build your online store" },
  { key: "craft",       label: "Craft",       Icon: Palette,         cta: "Build your craft studio" },
  { key: "studio",      label: "Studio",      Icon: Camera,          cta: "Build your creative studio" },
  { key: "retail",      label: "Retail",      Icon: Tag,             cta: "Build your retail shop" },
  { key: "wellness",    label: "Wellness",    Icon: Heart,           cta: "Build your wellness practice" },
];
