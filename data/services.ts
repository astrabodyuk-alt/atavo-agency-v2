import {
  Sparkles, CalendarCheck, Gift, Cake, MessageCircle, Star,
  UtensilsCrossed, CalendarClock, QrCode, Stamp, Users, TrendingUp,
  Wrench, Wine, Ticket, Crown, Bell, ShoppingCart, ShoppingBag,
  Search, PenLine, Image as ImageIcon, ClipboardList,
  BedDouble, Camera, Tag, Heart, Palette, Monitor, Mail,
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
  niche: Niche | Niche[];
  title: string;
  Icon: LucideIcon;
  description: string;
  priceFrom: number;
  image: string;
  badge?: "Essential" | "Best for SEO" | "Most popular";
};

const Q = "?w=800&q=80&auto=format&fit=crop";
const U = (id: string) => `https://images.unsplash.com/${id}${Q}`;

export const SERVICES: Service[] = [
  // ─── BEAUTY ──────────────────────────────────────────────────────────────
  {
    id: "beauty-website",
    niche: "beauty",
    title: "Bespoke salon website",
    Icon: Sparkles,
    description:
      "Brand-led website with booking CTA, photo gallery, team bios and local SEO.",
    priceFrom: 790,
    image: U("photo-1560066984-138dadb4c035"),
  },
  {
    id: "beauty-booking",
    niche: "beauty",
    title: "Online booking system",
    Icon: CalendarCheck,
    description:
      "Custom booking with automated reminders, deposit capture, and calendar sync.",
    priceFrom: 800,
    image: U("photo-1611926653458-09294b3142bf"),
    badge: "Essential",
  },
  {
    id: "beauty-loyalty",
    niche: "beauty",
    title: "Loyalty & gift cards",
    Icon: Gift,
    description:
      "Digital loyalty punch card and gift voucher system that drives repeat visits.",
    priceFrom: 450,
    image: U("photo-1607344645866-009c320b63e0"),
  },
  {
    id: "beauty-birthday",
    niche: "beauty",
    title: "Birthday automation",
    Icon: Cake,
    description:
      "Automated SMS or email 7 days before each client birthday with a booking offer.",
    priceFrom: 250,
    image: U("photo-1558636508-e0db3814bd1d"),
  },
  {
    id: "beauty-whatsapp",
    niche: "beauty",
    title: "WhatsApp auto-reply",
    Icon: MessageCircle,
    description:
      "Smart assistant that handles pricing, availability and booking questions 24/7.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
    badge: "Essential",
  },
  // ─── FOOD ─────────────────────────────────────────────────────────────────
  {
    id: "food-website",
    niche: "food",
    title: "Animated restaurant site",
    Icon: UtensilsCrossed,
    description:
      "Cinematic website with menu, hours, gallery, and Google Maps integration.",
    priceFrom: 790,
    image: U("photo-1517248135467-4c7edcad34c4"),
  },
  {
    id: "food-reservation",
    niche: "food",
    title: "Table reservation system",
    Icon: CalendarClock,
    description:
      "Self-service booking with no-show deposit and automated confirmations.",
    priceFrom: 800,
    image: U("photo-1414235077428-338989a2e8c0"),
    badge: "Essential",
  },
  {
    id: "food-qr-menu",
    niche: "food",
    title: "QR menu + ordering",
    Icon: QrCode,
    description:
      "Scan-to-order menu that syncs with kitchen tickets and upsells automatically.",
    priceFrom: 650,
    image: U("photo-1606787366850-de6330128bfc"),
  },
  {
    id: "food-loyalty",
    niche: "food",
    title: "Loyalty stamps",
    Icon: Stamp,
    description:
      "Digital loyalty card (10 visits = 1 free) with automated tracking.",
    priceFrom: 450,
    image: U("photo-1559925393-8be0ec4767c8"),
  },
  {
    id: "food-events",
    niche: "food",
    title: "Private hire form",
    Icon: Users,
    description:
      "Inquiry form for private events with automated follow-up sequence.",
    priceFrom: 250,
    image: U("photo-1519167758481-83f550bb49b3"),
  },
  {
    id: "food-reviews",
    niche: "food",
    title: "Review automation",
    Icon: Star,
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
    Icon: Monitor,
    description:
      "Trust-first website with accreditations, before/after gallery, and lead capture form.",
    priceFrom: 790,
    image: U("photo-1504307651254-35680f356dfd"),
  },
  {
    id: "trades-quote-form",
    niche: "trades",
    title: "Instant quote form",
    Icon: Wrench,
    description:
      "Smart multi-step form that qualifies leads and auto-sends a quote estimate by email.",
    priceFrom: 450,
    image: U("photo-1581092795360-fd1ca04f0952"),
  },
  {
    id: "trades-availability",
    niche: "trades",
    title: "Availability calendar",
    Icon: CalendarCheck,
    description:
      "Live calendar showing open slots — customers book without calling.",
    priceFrom: 600,
    image: U("photo-1506784365847-bbad939e9335"),
  },
  {
    id: "trades-follow-up",
    niche: "trades",
    title: "Follow-up sequence",
    Icon: Mail,
    description:
      "Automated 3-email follow-up after each quote sent — doubles conversion rate.",
    priceFrom: 300,
    image: U("photo-1563986768494-4dee2763ff3f"),
  },
  {
    id: "trades-reviews",
    niche: "trades",
    title: "Review automation",
    Icon: Star,
    description:
      "Auto-request Google reviews 48h after job completion via SMS or email.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "trades-whatsapp",
    niche: "trades",
    title: "WhatsApp enquiry bot",
    Icon: MessageCircle,
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
    Icon: Wine,
    description:
      "Atmospheric website with seasonal menus, event calendar, and online ordering.",
    priceFrom: 790,
    image: U("photo-1510812431401-41d2bd2722f3"),
  },
  {
    id: "beverage-ordering",
    niche: "beverage",
    title: "Online bottle shop",
    Icon: ShoppingBag,
    description:
      "E-commerce storefront for wine, spirits or craft drinks — with age verification.",
    priceFrom: 1200,
    image: U("photo-1547595628-c61a29f496f0"),
  },
  {
    id: "beverage-events",
    niche: "beverage",
    title: "Event ticketing",
    Icon: Ticket,
    description:
      "Sell tickets to tastings, masterclasses and private events with automated comms.",
    priceFrom: 650,
    image: U("photo-1527529482837-4698179dc6ce"),
  },
  {
    id: "beverage-loyalty",
    niche: "beverage",
    title: "Member club system",
    Icon: Crown,
    description:
      "Digital membership with exclusive access, early releases, and member-only pricing.",
    priceFrom: 800,
    image: U("photo-1543364195-bfe6e4932397"),
  },
  {
    id: "beverage-whatsapp",
    niche: "beverage",
    title: "WhatsApp auto-reply",
    Icon: MessageCircle,
    description:
      "Handles stock questions, opening hours, and event bookings around the clock.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "beverage-reviews",
    niche: "beverage",
    title: "Review automation",
    Icon: Star,
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
    Icon: BedDouble,
    description:
      "Full property website with room showcase, direct booking, and local attractions guide.",
    priceFrom: 1490,
    image: U("photo-1566073771259-6a8506099945"),
  },
  {
    id: "hospitality-booking",
    niche: "hospitality",
    title: "Direct booking engine",
    Icon: CalendarCheck,
    description:
      "Commission-free booking widget that beats OTA rates and handles payment.",
    priceFrom: 1200,
    image: U("photo-1520250497591-112f2f40a3f4"),
  },
  {
    id: "hospitality-upsell",
    niche: "hospitality",
    title: "Pre-arrival upsell",
    Icon: Bell,
    description:
      "Automated email 3 days before check-in offering upgrades, breakfast, and extras.",
    priceFrom: 450,
    image: U("photo-1551882547-ff40c63fe5fa"),
  },
  {
    id: "hospitality-reviews",
    niche: "hospitality",
    title: "Review automation",
    Icon: Star,
    description:
      "Post-checkout review requests to Google, Booking.com, and TripAdvisor.",
    priceFrom: 300,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "hospitality-whatsapp",
    niche: "hospitality",
    title: "Guest WhatsApp concierge",
    Icon: MessageCircle,
    description:
      "Answers FAQs, shares directions, and handles check-in instructions automatically.",
    priceFrom: 500,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "hospitality-gift",
    niche: "hospitality",
    title: "Gift voucher system",
    Icon: Gift,
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
    Icon: ShoppingBag,
    description:
      "Conversion-tuned storefront with brand story, lookbook, and fast checkout.",
    priceFrom: 1490,
    image: U("photo-1556228578-8c89e6adf883"),
  },
  {
    id: "ecommerce-abandoned",
    niche: "ecommerce",
    title: "Abandoned cart recovery",
    Icon: ShoppingCart,
    description:
      "Automated 3-step email sequence that recovers 15–25% of lost sales.",
    priceFrom: 400,
    image: U("photo-1561069934-eee225952461"),
  },
  {
    id: "ecommerce-loyalty",
    niche: "ecommerce",
    title: "Loyalty programme",
    Icon: Gift,
    description:
      "Points-based rewards system that converts one-time buyers into repeat customers.",
    priceFrom: 700,
    image: U("photo-1607344645866-009c320b63e0"),
  },
  {
    id: "ecommerce-reviews",
    niche: "ecommerce",
    title: "Product review automation",
    Icon: Star,
    description:
      "Auto-request reviews 14 days post-delivery. Displays UGC on product pages.",
    priceFrom: 350,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "ecommerce-upsell",
    niche: "ecommerce",
    title: "Post-purchase upsell",
    Icon: TrendingUp,
    description:
      "Personalised product recommendations sent 48h after purchase.",
    priceFrom: 400,
    image: U("photo-1563013544-824ae1b704d3"),
  },
  {
    id: "ecommerce-seo",
    niche: "ecommerce",
    title: "Product SEO audit",
    Icon: Search,
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
    Icon: Palette,
    description:
      "Artisan website with commission flow, process gallery, and waitlist signup.",
    priceFrom: 790,
    image: U("photo-1487530811015-780c5c89d034"),
  },
  {
    id: "craft-commission",
    niche: "craft",
    title: "Commission enquiry flow",
    Icon: PenLine,
    description:
      "Multi-step form that qualifies commission requests and auto-sends a pricing guide.",
    priceFrom: 450,
    image: U("photo-1452860606245-08befc0ff44b"),
  },
  {
    id: "craft-waitlist",
    niche: "craft",
    title: "Waitlist & launch system",
    Icon: Mail,
    description:
      "Collect interest before a drop. Auto-email when slots open. Build scarcity.",
    priceFrom: 350,
    image: U("photo-1516387938699-a927ef949ece"),
  },
  {
    id: "craft-shop",
    niche: "craft",
    title: "Small-batch online shop",
    Icon: ShoppingBag,
    description:
      "Lightweight e-commerce for limited editions — with inventory alerts.",
    priceFrom: 800,
    image: U("photo-1490750967868-88df5691cc89"),
  },
  {
    id: "craft-reviews",
    niche: "craft",
    title: "Testimonial automation",
    Icon: Star,
    description:
      "Automated review request after delivery with a photo-sharing prompt.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "craft-whatsapp",
    niche: "craft",
    title: "WhatsApp enquiry bot",
    Icon: MessageCircle,
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
    Icon: Camera,
    description:
      "Full-screen portfolio with contact form, availability calendar, and client area.",
    priceFrom: 790,
    image: U("photo-1542038784456-1ea8e935640e"),
  },
  {
    id: "studio-booking",
    niche: "studio",
    title: "Session booking system",
    Icon: CalendarCheck,
    description:
      "Package-based booking with deposit, brief questionnaire, and automated prep guide.",
    priceFrom: 700,
    image: U("photo-1611926653458-09294b3142bf"),
  },
  {
    id: "studio-gallery",
    niche: "studio",
    title: "Client gallery delivery",
    Icon: ImageIcon,
    description:
      "Password-protected online gallery with download, favourite, and share tools.",
    priceFrom: 500,
    image: U("photo-1555952517-2e8e729e0b44"),
  },
  {
    id: "studio-crm",
    niche: "studio",
    title: "Client CRM & pipeline",
    Icon: ClipboardList,
    description:
      "Lightweight CRM to track leads, bookings, and follow-ups without a spreadsheet.",
    priceFrom: 650,
    image: U("photo-1460925895917-afdab827c52f"),
  },
  {
    id: "studio-reviews",
    niche: "studio",
    title: "Review automation",
    Icon: Star,
    description:
      "Auto-request Google reviews 7 days after gallery delivery.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "studio-referral",
    niche: "studio",
    title: "Referral programme",
    Icon: Gift,
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
    Icon: Tag,
    description:
      "Brand-forward site with lookbook, store locator, and new-arrival email signup.",
    priceFrom: 1490,
    image: U("photo-1441984904996-e0b6ba687e04"),
  },
  {
    id: "retail-ecommerce",
    niche: "retail",
    title: "Click & collect store",
    Icon: ShoppingBag,
    description:
      "Lightweight online shop with in-store pickup — perfect for small-batch retailers.",
    priceFrom: 900,
    image: U("photo-1472851294608-062f824d29cc"),
  },
  {
    id: "retail-loyalty",
    niche: "retail",
    title: "Loyalty card system",
    Icon: Gift,
    description:
      "Digital punch card that brings customers back — tracked and auto-rewarded.",
    priceFrom: 450,
    image: U("photo-1607344645866-009c320b63e0"),
  },
  {
    id: "retail-newsletter",
    niche: "retail",
    title: "New arrivals newsletter",
    Icon: Mail,
    description:
      "Auto-send a curated email to your list each time new stock arrives.",
    priceFrom: 350,
    image: U("photo-1516387938699-a927ef949ece"),
  },
  {
    id: "retail-whatsapp",
    niche: "retail",
    title: "WhatsApp stock alerts",
    Icon: MessageCircle,
    description:
      "Broadcast new arrivals and limited-edition drops to opted-in customers instantly.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },
  {
    id: "retail-reviews",
    niche: "retail",
    title: "Google review automation",
    Icon: Star,
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
    Icon: Heart,
    description:
      "Calm, trust-first website with class schedule, instructor bios, and trial signup.",
    priceFrom: 790,
    image: U("photo-1545205597-3d9d02c29597"),
  },
  {
    id: "wellness-booking",
    niche: "wellness",
    title: "Class booking system",
    Icon: CalendarCheck,
    description:
      "Drop-in and membership booking with waitlists, reminders, and cancellation handling.",
    priceFrom: 800,
    image: U("photo-1611926653458-09294b3142bf"),
  },
  {
    id: "wellness-membership",
    niche: "wellness",
    title: "Membership portal",
    Icon: Ticket,
    description:
      "Recurring membership with class credits, exclusive content, and auto-renewal.",
    priceFrom: 900,
    image: U("photo-1518611012118-696072aa579a"),
  },
  {
    id: "wellness-nurture",
    niche: "wellness",
    title: "New client nurture flow",
    Icon: Mail,
    description:
      "Automated 5-email welcome sequence that converts trial visitors into regulars.",
    priceFrom: 400,
    image: U("photo-1516387938699-a927ef949ece"),
  },
  {
    id: "wellness-reviews",
    niche: "wellness",
    title: "Review automation",
    Icon: Star,
    description:
      "Auto-request Google reviews from clients after their 3rd session.",
    priceFrom: 250,
    image: U("photo-1556742111-a301076d9d18"),
  },
  {
    id: "wellness-whatsapp",
    niche: "wellness",
    title: "WhatsApp class reminders",
    Icon: MessageCircle,
    description:
      "Automated 24h class reminders via WhatsApp — reduce no-shows by up to 40%.",
    priceFrom: 350,
    image: U("photo-1611746872915-64382b5c76da"),
  },

  // ─── CROSS-NICHE ──────────────────────────────────────────────────────────
  {
    id: "cross-reviews-automation",
    niche: ["beauty", "food", "trades", "beverage", "hospitality", "ecommerce", "craft", "studio", "retail", "wellness"],
    title: "Google Reviews Automation",
    Icon: TrendingUp,
    description:
      "Automated review requests sent via SMS, WhatsApp & email after each visit. Custom QR code for in-store signage. Auto follow-up at day 3. More reviews = higher Google ranking = more customers.",
    priceFrom: 390,
    image: U("photo-1556742111-a301076d9d18"),
    badge: "Best for SEO",
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
