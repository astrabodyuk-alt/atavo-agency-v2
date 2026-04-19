import {
  Monitor,
  Calendar,
  Gift,
  Cake,
  MessageCircle,
  Star,
  UtensilsCrossed,
  QrCode,
  Ticket,
  Mail,
  Wrench,
  Wine,
  Crown,
  Bell,
  ShoppingCart,
  Search,
  PenLine,
  ShoppingBag,
  Image as ImageIcon,
  ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type { LucideIcon };

export type Niche =
  | "beauty"
  | "food"
  | "trades"
  | "beverage"
  | "hospitality"
  | "ecommerce"
  | "craft"
  | "studio"
  | "retail"
  | "wellness";

export type Service = {
  id: string;
  niche: Niche;
  title: string;
  icon: LucideIcon;
  description: string;
  priceFrom: number;
  image: string;
};

const Q = "?w=800&q=80&auto=format&fit=crop";
const U = (id: string) => `https://images.unsplash.com/${id}${Q}`;

export const SERVICES: Service[] = [
  // ─── BEAUTY ──────────────────────────────────────────────────────────────
  {
    id: "beauty-website",
    niche: "beauty",
    title: "Bespoke salon website",
    icon: Monitor,
    description:
      "Brand-led website with booking CTA, photo gallery, team bios and local SEO.",
    priceFrom: 790,
    image: U("photo-1560066984-138dadb4c035"),
  },
  {
    id: "beauty-booking",
    niche: "beauty",
    title: "Online booking system",
    icon: Calendar,
    description:
      "Custom booking with automated reminders, deposit capture, and calendar sync.",
    priceFrom: 800,
    image: U("photo-1611926653458-09294b3142bf"),
  },
  {
    id: "beauty-loyalty",
    niche: "beauty",
    title: "Loyalty & gift cards",
    icon: Gift,
    description:
      "Digital loyalty punch card and gift voucher system that drives repeat visits.",
    priceFrom: 450,
    image: U("photo-1607344645866-009c320b63e0"),
  },
  {
    id: "beauty-birthday",
    niche: "beauty",
    title: "Birthday automation",
    icon: Cake,
    description:
      "Automated SMS or email 7 days before each client birthday with a booking offer.",
    priceFrom: 250,
    image: U("photo-1558636508-e0db3814bd1d"),
  },
  {
    id: "beauty-whatsapp",
    niche: "beauty",
    title: "WhatsApp auto-reply",
    icon: MessageCircle,
    description:
      "Smart assistant that handles pricing, availability and booking questions 24/7.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "beauty-reviews",
    niche: "beauty",
    title: "Review collection",
    icon: Star,
    description:
      "Automated Google review requests sent 48h after each visit.",
    priceFrom: 300,
    image: U("photo-1556742111-a301076d9d18"),
  },

  // ─── FOOD ─────────────────────────────────────────────────────────────────
  {
    id: "food-website",
    niche: "food",
    title: "Animated restaurant site",
    icon: Monitor,
    description:
      "Cinematic website with menu, hours, gallery, and Google Maps integration.",
    priceFrom: 790,
    image: U("photo-1517248135467-4c7edcad34c4"),
  },
  {
    id: "food-reservation",
    niche: "food",
    title: "Table reservation system",
    icon: UtensilsCrossed,
    description:
      "Self-service booking with no-show deposit and automated confirmations.",
    priceFrom: 800,
    image: U("photo-1414235077428-338989a2e8c0"),
  },
  {
    id: "food-qr-menu",
    niche: "food",
    title: "QR menu + ordering",
    icon: QrCode,
    description:
      "Scan-to-order menu that syncs with kitchen tickets and upsells automatically.",
    priceFrom: 650,
    image: U("photo-1606787366850-de6330128bfc"),
  },
  {
    id: "food-loyalty",
    niche: "food",
    title: "Loyalty stamps",
    icon: Ticket,
    description:
      "Digital loyalty card (10 visits = 1 free) with automated tracking.",
    priceFrom: 450,
    image: U("photo-1559925393-8be0ec4767c8"),
  },
  {
    id: "food-events",
    niche: "food",
    title: "Private hire form",
    icon: Mail,
    description:
      "Inquiry form for private events with automated follow-up sequence.",
    priceFrom: 250,
    image: U("photo-1519167758481-83f550bb49b3"),
  },
  {
    id: "food-reviews",
    niche: "food",
    title: "Review automation",
    icon: Star,
    description:
      "Trigger Google + TripAdvisor review requests after each booking.",
    priceFrom: 300,
    image: U("photo-1551434678-e076c223a692"),
  },

  // ─── TRADES ───────────────────────────────────────────────────────────────
  {
    id: "trades-website",
    niche: "trades",
    title: "Tradesmen website",
    icon: Monitor,
    description:
      "Trust-first website with accreditations, before/after gallery, and lead capture form.",
    priceFrom: 790,
    image: U("photo-1504307651254-35680f356dfd"),
  },
  {
    id: "trades-quote-form",
    niche: "trades",
    title: "Instant quote form",
    icon: Wrench,
    description:
      "Smart multi-step form that qualifies leads and auto-sends a quote estimate by email.",
    priceFrom: 450,
    image: U("photo-1581092795360-fd1ca04f0952"),
  },
  {
    id: "trades-availability",
    niche: "trades",
    title: "Availability calendar",
    icon: Calendar,
    description:
      "Live calendar showing open slots — customers book without calling.",
    priceFrom: 600,
    image: U("photo-1506784365847-bbad939e9335"),
  },
  {
    id: "trades-follow-up",
    niche: "trades",
    title: "Follow-up sequence",
    icon: Mail,
    description:
      "Automated 3-email follow-up after each quote sent — doubles conversion rate.",
    priceFrom: 300,
    image: U("photo-1563986768494-4dee2763ff3f"),
  },
  {
    id: "trades-reviews",
    niche: "trades",
    title: "Review automation",
    icon: Star,
    description:
      "Auto-request Google reviews 48h after job completion via SMS or email.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "trades-whatsapp",
    niche: "trades",
    title: "WhatsApp enquiry bot",
    icon: MessageCircle,
    description:
      "Handles after-hours enquiries, collects job details, and books call-backs automatically.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },

  // ─── BEVERAGE ─────────────────────────────────────────────────────────────
  {
    id: "beverage-website",
    niche: "beverage",
    title: "Cellar & bar website",
    icon: Monitor,
    description:
      "Atmospheric website with seasonal menus, event calendar, and online ordering.",
    priceFrom: 790,
    image: U("photo-1510812431401-41d2bd2722f3"),
  },
  {
    id: "beverage-ordering",
    niche: "beverage",
    title: "Online bottle shop",
    icon: Wine,
    description:
      "E-commerce storefront for wine, spirits or craft drinks — with age verification.",
    priceFrom: 1200,
    image: U("photo-1547595628-c61a29f496f0"),
  },
  {
    id: "beverage-events",
    niche: "beverage",
    title: "Event ticketing",
    icon: Ticket,
    description:
      "Sell tickets to tastings, masterclasses and private events with automated comms.",
    priceFrom: 650,
    image: U("photo-1527529482837-4698179dc6ce"),
  },
  {
    id: "beverage-loyalty",
    niche: "beverage",
    title: "Member club system",
    icon: Crown,
    description:
      "Digital membership with exclusive access, early releases, and member-only pricing.",
    priceFrom: 800,
    image: U("photo-1543364195-bfe6e4932397"),
  },
  {
    id: "beverage-whatsapp",
    niche: "beverage",
    title: "WhatsApp auto-reply",
    icon: MessageCircle,
    description:
      "Handles stock questions, opening hours, and event bookings around the clock.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "beverage-reviews",
    niche: "beverage",
    title: "Review automation",
    icon: Star,
    description:
      "Automated review requests to Google and Vivino after every purchase.",
    priceFrom: 300,
    image: U("photo-1556742111-a301076d9d18"),
  },

  // ─── HOSPITALITY ──────────────────────────────────────────────────────────
  {
    id: "hospitality-website",
    niche: "hospitality",
    title: "Hotel & B&B website",
    icon: Monitor,
    description:
      "Full property website with room showcase, direct booking, and local attractions guide.",
    priceFrom: 1490,
    image: U("photo-1566073771259-6a8506099945"),
  },
  {
    id: "hospitality-booking",
    niche: "hospitality",
    title: "Direct booking engine",
    icon: Calendar,
    description:
      "Commission-free booking widget that beats OTA rates and handles payment.",
    priceFrom: 1200,
    image: U("photo-1520250497591-112f2f40a3f4"),
  },
  {
    id: "hospitality-upsell",
    niche: "hospitality",
    title: "Pre-arrival upsell",
    icon: Bell,
    description:
      "Automated email 3 days before check-in offering upgrades, breakfast, and extras.",
    priceFrom: 450,
    image: U("photo-1551882547-ff40c63fe5fa"),
  },
  {
    id: "hospitality-reviews",
    niche: "hospitality",
    title: "Review automation",
    icon: Star,
    description:
      "Post-checkout review requests to Google, Booking.com, and TripAdvisor.",
    priceFrom: 300,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "hospitality-whatsapp",
    niche: "hospitality",
    title: "Guest WhatsApp concierge",
    icon: MessageCircle,
    description:
      "Answers FAQs, shares directions, and handles check-in instructions automatically.",
    priceFrom: 500,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "hospitality-gift",
    niche: "hospitality",
    title: "Gift voucher system",
    icon: Gift,
    description:
      "Sell and redeem digital gift vouchers — auto-fulfilled by email.",
    priceFrom: 450,
    image: U("photo-1607344645866-009c320b63e0"),
  },

  // ─── ECOMMERCE ────────────────────────────────────────────────────────────
  {
    id: "ecommerce-website",
    niche: "ecommerce",
    title: "Bespoke shop website",
    icon: Monitor,
    description:
      "Conversion-tuned storefront with brand story, lookbook, and fast checkout.",
    priceFrom: 1490,
    image: U("photo-1556228578-8c89e6adf883"),
  },
  {
    id: "ecommerce-abandoned",
    niche: "ecommerce",
    title: "Abandoned cart recovery",
    icon: ShoppingCart,
    description:
      "Automated 3-step email sequence that recovers 15–25% of lost sales.",
    priceFrom: 400,
    image: U("photo-1561069934-eee225952461"),
  },
  {
    id: "ecommerce-loyalty",
    niche: "ecommerce",
    title: "Loyalty programme",
    icon: Gift,
    description:
      "Points-based rewards system that converts one-time buyers into repeat customers.",
    priceFrom: 700,
    image: U("photo-1607344645866-009c320b63e0"),
  },
  {
    id: "ecommerce-reviews",
    niche: "ecommerce",
    title: "Product review automation",
    icon: Star,
    description:
      "Auto-request reviews 14 days post-delivery. Displays UGC on product pages.",
    priceFrom: 350,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "ecommerce-upsell",
    niche: "ecommerce",
    title: "Post-purchase upsell",
    icon: Mail,
    description:
      "Personalised product recommendations sent 48h after purchase.",
    priceFrom: 400,
    image: U("photo-1563013544-824ae1b704d3"),
  },
  {
    id: "ecommerce-seo",
    niche: "ecommerce",
    title: "Product SEO audit",
    icon: Search,
    description:
      "Full keyword + on-page audit for your product catalogue with an action plan.",
    priceFrom: 499,
    image: U("photo-1460925895917-afdab827c52f"),
  },

  // ─── CRAFT ────────────────────────────────────────────────────────────────
  {
    id: "craft-website",
    niche: "craft",
    title: "Maker portfolio website",
    icon: Monitor,
    description:
      "Artisan website with commission flow, process gallery, and waitlist signup.",
    priceFrom: 790,
    image: U("photo-1487530811015-780c5c89d034"),
  },
  {
    id: "craft-commission",
    niche: "craft",
    title: "Commission enquiry flow",
    icon: PenLine,
    description:
      "Multi-step form that qualifies commission requests and auto-sends a pricing guide.",
    priceFrom: 450,
    image: U("photo-1452860606245-08befc0ff44b"),
  },
  {
    id: "craft-waitlist",
    niche: "craft",
    title: "Waitlist & launch system",
    icon: Mail,
    description:
      "Collect interest before a drop. Auto-email when slots open. Build scarcity.",
    priceFrom: 350,
    image: U("photo-1516387938699-a927ef949ece"),
  },
  {
    id: "craft-shop",
    niche: "craft",
    title: "Small-batch online shop",
    icon: ShoppingBag,
    description:
      "Lightweight e-commerce for limited editions — with inventory alerts.",
    priceFrom: 800,
    image: U("photo-1490750967868-88df5691cc89"),
  },
  {
    id: "craft-reviews",
    niche: "craft",
    title: "Testimonial automation",
    icon: Star,
    description:
      "Automated review request after delivery with a photo-sharing prompt.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "craft-whatsapp",
    niche: "craft",
    title: "WhatsApp enquiry bot",
    icon: MessageCircle,
    description:
      "Handles commission questions, timelines, and pricing while you're in the workshop.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },

  // ─── STUDIO ───────────────────────────────────────────────────────────────
  {
    id: "studio-website",
    niche: "studio",
    title: "Studio portfolio site",
    icon: Monitor,
    description:
      "Full-screen portfolio with contact form, availability calendar, and client area.",
    priceFrom: 790,
    image: U("photo-1542038784456-1ea8e935640e"),
  },
  {
    id: "studio-booking",
    niche: "studio",
    title: "Session booking system",
    icon: Calendar,
    description:
      "Package-based booking with deposit, brief questionnaire, and automated prep guide.",
    priceFrom: 700,
    image: U("photo-1611926653458-09294b3142bf"),
  },
  {
    id: "studio-gallery",
    niche: "studio",
    title: "Client gallery delivery",
    icon: ImageIcon,
    description:
      "Password-protected online gallery with download, favourite, and share tools.",
    priceFrom: 500,
    image: U("photo-1555952517-2e8e729e0b44"),
  },
  {
    id: "studio-crm",
    niche: "studio",
    title: "Client CRM & pipeline",
    icon: ClipboardList,
    description:
      "Lightweight CRM to track leads, bookings, and follow-ups without a spreadsheet.",
    priceFrom: 650,
    image: U("photo-1460925895917-afdab827c52f"),
  },
  {
    id: "studio-reviews",
    niche: "studio",
    title: "Review automation",
    icon: Star,
    description:
      "Auto-request Google reviews 7 days after gallery delivery.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "studio-referral",
    niche: "studio",
    title: "Referral programme",
    icon: Gift,
    description:
      "Automated referral system — clients get a discount code to share with friends.",
    priceFrom: 400,
    image: U("photo-1607344645866-009c320b63e0"),
  },

  // ─── RETAIL ───────────────────────────────────────────────────────────────
  {
    id: "retail-website",
    niche: "retail",
    title: "Boutique website",
    icon: Monitor,
    description:
      "Brand-forward site with lookbook, store locator, and new-arrival email signup.",
    priceFrom: 1490,
    image: U("photo-1441984904996-e0b6ba687e04"),
  },
  {
    id: "retail-ecommerce",
    niche: "retail",
    title: "Click & collect store",
    icon: ShoppingBag,
    description:
      "Lightweight online shop with in-store pickup — perfect for small-batch retailers.",
    priceFrom: 900,
    image: U("photo-1472851294608-062f824d29cc"),
  },
  {
    id: "retail-loyalty",
    niche: "retail",
    title: "Loyalty card system",
    icon: Gift,
    description:
      "Digital punch card that brings customers back — tracked and auto-rewarded.",
    priceFrom: 450,
    image: U("photo-1607344645866-009c320b63e0"),
  },
  {
    id: "retail-newsletter",
    niche: "retail",
    title: "New arrivals newsletter",
    icon: Mail,
    description:
      "Auto-send a curated email to your list each time new stock arrives.",
    priceFrom: 350,
    image: U("photo-1516387938699-a927ef949ece"),
  },
  {
    id: "retail-whatsapp",
    niche: "retail",
    title: "WhatsApp stock alerts",
    icon: MessageCircle,
    description:
      "Broadcast new arrivals and limited-edition drops to opted-in customers instantly.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "retail-reviews",
    niche: "retail",
    title: "Google review automation",
    icon: Star,
    description:
      "Post-purchase review requests that build your local search presence.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },

  // ─── WELLNESS ─────────────────────────────────────────────────────────────
  {
    id: "wellness-website",
    niche: "wellness",
    title: "Wellness studio website",
    icon: Monitor,
    description:
      "Calm, trust-first website with class schedule, instructor bios, and trial signup.",
    priceFrom: 790,
    image: U("photo-1545205597-3d9d02c29597"),
  },
  {
    id: "wellness-booking",
    niche: "wellness",
    title: "Class booking system",
    icon: Calendar,
    description:
      "Drop-in and membership booking with waitlists, reminders, and cancellation handling.",
    priceFrom: 800,
    image: U("photo-1611926653458-09294b3142bf"),
  },
  {
    id: "wellness-membership",
    niche: "wellness",
    title: "Membership portal",
    icon: Ticket,
    description:
      "Recurring membership with class credits, exclusive content, and auto-renewal.",
    priceFrom: 900,
    image: U("photo-1518611012118-696072aa579a"),
  },
  {
    id: "wellness-nurture",
    niche: "wellness",
    title: "New client nurture flow",
    icon: Mail,
    description:
      "Automated 5-email welcome sequence that converts trial visitors into regulars.",
    priceFrom: 400,
    image: U("photo-1516387938699-a927ef949ece"),
  },
  {
    id: "wellness-reviews",
    niche: "wellness",
    title: "Review automation",
    icon: Star,
    description:
      "Auto-request Google reviews from clients after their 3rd session.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "wellness-whatsapp",
    niche: "wellness",
    title: "WhatsApp class reminders",
    icon: MessageCircle,
    description:
      "Automated 24h class reminders via WhatsApp — reduce no-shows by up to 40%.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },
];

export const NICHE_LABELS: Record<Niche, string> = {
  beauty: "Beauty",
  food: "Food",
  trades: "Trades",
  beverage: "Beverage",
  hospitality: "Hospitality",
  ecommerce: "E-commerce",
  craft: "Craft",
  studio: "Studio",
  retail: "Retail",
  wellness: "Wellness",
};
