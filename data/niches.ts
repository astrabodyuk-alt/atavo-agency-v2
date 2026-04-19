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
};

export const NICHES: NicheEntry[] = [
  { key: "beauty",      label: "Beauty",      Icon: Sparkles },
  { key: "food",        label: "Food",        Icon: UtensilsCrossed },
  { key: "trades",      label: "Trades",      Icon: Hammer },
  { key: "beverage",    label: "Beverage",    Icon: Wine },
  { key: "hospitality", label: "Hospitality", Icon: BedDouble },
  { key: "ecommerce",   label: "E-commerce",  Icon: ShoppingBag },
  { key: "craft",       label: "Craft",       Icon: Palette },
  { key: "studio",      label: "Studio",      Icon: Camera },
  { key: "retail",      label: "Retail",      Icon: Tag },
  { key: "wellness",    label: "Wellness",    Icon: Heart },
];
