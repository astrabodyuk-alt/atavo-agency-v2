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
  icon: string;
  description: string;
  priceFrom: number;
  image?: string;
};

export const SERVICES: Service[] = [
  // BEAUTY
  {
    id: "beauty-website",
    niche: "beauty",
    title: "Bespoke salon website",
    icon: "🖥️",
    description:
      "Brand-led website with booking CTA, photo gallery, team bios and local SEO.",
    priceFrom: 790,
  },
  {
    id: "beauty-booking",
    niche: "beauty",
    title: "Online booking system",
    icon: "📅",
    description:
      "Custom booking with automated reminders, deposit capture, and calendar sync.",
    priceFrom: 800,
  },
  {
    id: "beauty-loyalty",
    niche: "beauty",
    title: "Loyalty & gift cards",
    icon: "🎁",
    description:
      "Digital loyalty punch card and gift voucher system that drives repeat visits.",
    priceFrom: 450,
  },
  {
    id: "beauty-birthday",
    niche: "beauty",
    title: "Birthday automation",
    icon: "🎂",
    description:
      "Automated SMS or email 7 days before each client birthday with a booking offer.",
    priceFrom: 250,
  },
  {
    id: "beauty-whatsapp",
    niche: "beauty",
    title: "WhatsApp auto-reply",
    icon: "💬",
    description:
      "Smart assistant that handles pricing, availability and booking questions 24/7.",
    priceFrom: 350,
  },
  {
    id: "beauty-reviews",
    niche: "beauty",
    title: "Review collection",
    icon: "⭐",
    description:
      "Automated Google review requests sent 48h after each visit.",
    priceFrom: 300,
  },

  // FOOD
  {
    id: "food-website",
    niche: "food",
    title: "Animated restaurant site",
    icon: "🖥️",
    description:
      "Cinematic website with menu, hours, gallery, and Google Maps integration.",
    priceFrom: 790,
  },
  {
    id: "food-reservation",
    niche: "food",
    title: "Table reservation system",
    icon: "🍽️",
    description:
      "Self-service booking with no-show deposit and automated confirmations.",
    priceFrom: 800,
  },
  {
    id: "food-qr-menu",
    niche: "food",
    title: "QR menu + ordering",
    icon: "📱",
    description:
      "Scan-to-order menu that syncs with kitchen tickets and upsells automatically.",
    priceFrom: 650,
  },
  {
    id: "food-loyalty",
    niche: "food",
    title: "Loyalty stamps",
    icon: "🎟️",
    description:
      "Digital loyalty card (10 visits = 1 free) with automated tracking.",
    priceFrom: 450,
  },
  {
    id: "food-events",
    niche: "food",
    title: "Private hire form",
    icon: "📧",
    description:
      "Inquiry form for private events with automated follow-up sequence.",
    priceFrom: 250,
  },
  {
    id: "food-reviews",
    niche: "food",
    title: "Review automation",
    icon: "⭐",
    description:
      "Trigger Google + TripAdvisor review requests after each booking.",
    priceFrom: 300,
  },

  // TRADES
  {
    id: "trades-website",
    niche: "trades",
    title: "Tradesmen website",
    icon: "🖥️",
    description:
      "Trust-first website with accreditations, before/after gallery, and lead capture form.",
    priceFrom: 790,
  },
  {
    id: "trades-quote-form",
    niche: "trades",
    title: "Instant quote form",
    icon: "🔧",
    description:
      "Smart multi-step form that qualifies leads and auto-sends a quote estimate by email.",
    priceFrom: 450,
  },
  {
    id: "trades-availability",
    niche: "trades",
    title: "Availability calendar",
    icon: "📅",
    description:
      "Live calendar showing open slots — customers book without calling.",
    priceFrom: 600,
  },
  {
    id: "trades-follow-up",
    niche: "trades",
    title: "Follow-up sequence",
    icon: "📧",
    description:
      "Automated 3-email follow-up after each quote sent — doubles conversion rate.",
    priceFrom: 300,
  },
  {
    id: "trades-reviews",
    niche: "trades",
    title: "Review automation",
    icon: "⭐",
    description:
      "Auto-request Google reviews 48h after job completion via SMS or email.",
    priceFrom: 250,
  },
  {
    id: "trades-whatsapp",
    niche: "trades",
    title: "WhatsApp enquiry bot",
    icon: "💬",
    description:
      "Handles after-hours enquiries, collects job details, and books call-backs automatically.",
    priceFrom: 350,
  },

  // BEVERAGE
  {
    id: "beverage-website",
    niche: "beverage",
    title: "Cellar & bar website",
    icon: "🖥️",
    description:
      "Atmospheric website with seasonal menus, event calendar, and online ordering.",
    priceFrom: 790,
  },
  {
    id: "beverage-ordering",
    niche: "beverage",
    title: "Online bottle shop",
    icon: "🍷",
    description:
      "E-commerce storefront for wine, spirits or craft drinks — with age verification.",
    priceFrom: 1200,
  },
  {
    id: "beverage-events",
    niche: "beverage",
    title: "Event ticketing",
    icon: "🎫",
    description:
      "Sell tickets to tastings, masterclasses and private events with automated comms.",
    priceFrom: 650,
  },
  {
    id: "beverage-loyalty",
    niche: "beverage",
    title: "Member club system",
    icon: "🎁",
    description:
      "Digital membership with exclusive access, early releases, and member-only pricing.",
    priceFrom: 800,
  },
  {
    id: "beverage-whatsapp",
    niche: "beverage",
    title: "WhatsApp auto-reply",
    icon: "💬",
    description:
      "Handles stock questions, opening hours, and event bookings around the clock.",
    priceFrom: 350,
  },
  {
    id: "beverage-reviews",
    niche: "beverage",
    title: "Review automation",
    icon: "⭐",
    description:
      "Automated review requests to Google and Vivino after every purchase.",
    priceFrom: 300,
  },

  // HOSPITALITY
  {
    id: "hospitality-website",
    niche: "hospitality",
    title: "Hotel & B&B website",
    icon: "🖥️",
    description:
      "Full property website with room showcase, direct booking, and local attractions guide.",
    priceFrom: 1490,
  },
  {
    id: "hospitality-booking",
    niche: "hospitality",
    title: "Direct booking engine",
    icon: "📅",
    description:
      "Commission-free booking widget that beats OTA rates and handles payment.",
    priceFrom: 1200,
  },
  {
    id: "hospitality-upsell",
    niche: "hospitality",
    title: "Pre-arrival upsell",
    icon: "🛎️",
    description:
      "Automated email 3 days before check-in offering upgrades, breakfast, and extras.",
    priceFrom: 450,
  },
  {
    id: "hospitality-reviews",
    niche: "hospitality",
    title: "Review automation",
    icon: "⭐",
    description:
      "Post-checkout review requests to Google, Booking.com, and TripAdvisor.",
    priceFrom: 300,
  },
  {
    id: "hospitality-whatsapp",
    niche: "hospitality",
    title: "Guest WhatsApp concierge",
    icon: "💬",
    description:
      "Answers FAQs, shares directions, and handles check-in instructions automatically.",
    priceFrom: 500,
  },
  {
    id: "hospitality-gift",
    niche: "hospitality",
    title: "Gift voucher system",
    icon: "🎁",
    description:
      "Sell and redeem digital gift vouchers — auto-fulfilled by email.",
    priceFrom: 450,
  },

  // ECOMMERCE
  {
    id: "ecommerce-website",
    niche: "ecommerce",
    title: "Bespoke shop website",
    icon: "🖥️",
    description:
      "Conversion-tuned storefront with brand story, lookbook, and fast checkout.",
    priceFrom: 1490,
  },
  {
    id: "ecommerce-abandoned",
    niche: "ecommerce",
    title: "Abandoned cart recovery",
    icon: "🛒",
    description:
      "Automated 3-step email sequence that recovers 15–25% of lost sales.",
    priceFrom: 400,
  },
  {
    id: "ecommerce-loyalty",
    niche: "ecommerce",
    title: "Loyalty programme",
    icon: "🎁",
    description:
      "Points-based rewards system that converts one-time buyers into repeat customers.",
    priceFrom: 700,
  },
  {
    id: "ecommerce-reviews",
    niche: "ecommerce",
    title: "Product review automation",
    icon: "⭐",
    description:
      "Auto-request reviews 14 days post-delivery. Displays UGC on product pages.",
    priceFrom: 350,
  },
  {
    id: "ecommerce-upsell",
    niche: "ecommerce",
    title: "Post-purchase upsell",
    icon: "📧",
    description:
      "Personalised product recommendations sent 48h after purchase.",
    priceFrom: 400,
  },
  {
    id: "ecommerce-seo",
    niche: "ecommerce",
    title: "Product SEO audit",
    icon: "🔍",
    description:
      "Full keyword + on-page audit for your product catalogue with an action plan.",
    priceFrom: 499,
  },

  // CRAFT
  {
    id: "craft-website",
    niche: "craft",
    title: "Maker portfolio website",
    icon: "🖥️",
    description:
      "Artisan website with commission flow, process gallery, and waitlist signup.",
    priceFrom: 790,
  },
  {
    id: "craft-commission",
    niche: "craft",
    title: "Commission enquiry flow",
    icon: "✏️",
    description:
      "Multi-step form that qualifies commission requests and auto-sends a pricing guide.",
    priceFrom: 450,
  },
  {
    id: "craft-waitlist",
    niche: "craft",
    title: "Waitlist & launch system",
    icon: "📧",
    description:
      "Collect interest before a drop. Auto-email when slots open. Build scarcity.",
    priceFrom: 350,
  },
  {
    id: "craft-shop",
    niche: "craft",
    title: "Small-batch online shop",
    icon: "🛒",
    description:
      "Lightweight e-commerce for limited editions — with inventory alerts.",
    priceFrom: 800,
  },
  {
    id: "craft-reviews",
    niche: "craft",
    title: "Testimonial automation",
    icon: "⭐",
    description:
      "Automated review request after delivery with a photo-sharing prompt.",
    priceFrom: 250,
  },
  {
    id: "craft-whatsapp",
    niche: "craft",
    title: "WhatsApp enquiry bot",
    icon: "💬",
    description:
      "Handles commission questions, timelines, and pricing while you're in the workshop.",
    priceFrom: 350,
  },

  // STUDIO
  {
    id: "studio-website",
    niche: "studio",
    title: "Studio portfolio site",
    icon: "🖥️",
    description:
      "Full-screen portfolio with contact form, availability calendar, and client area.",
    priceFrom: 790,
  },
  {
    id: "studio-booking",
    niche: "studio",
    title: "Session booking system",
    icon: "📅",
    description:
      "Package-based booking with deposit, brief questionnaire, and automated prep guide.",
    priceFrom: 700,
  },
  {
    id: "studio-gallery",
    niche: "studio",
    title: "Client gallery delivery",
    icon: "🖼️",
    description:
      "Password-protected online gallery with download, favourite, and share tools.",
    priceFrom: 500,
  },
  {
    id: "studio-crm",
    niche: "studio",
    title: "Client CRM & pipeline",
    icon: "📋",
    description:
      "Lightweight CRM to track leads, bookings, and follow-ups without a spreadsheet.",
    priceFrom: 650,
  },
  {
    id: "studio-reviews",
    niche: "studio",
    title: "Review automation",
    icon: "⭐",
    description:
      "Auto-request Google reviews 7 days after gallery delivery.",
    priceFrom: 250,
  },
  {
    id: "studio-referral",
    niche: "studio",
    title: "Referral programme",
    icon: "🎁",
    description:
      "Automated referral system — clients get a discount code to share with friends.",
    priceFrom: 400,
  },

  // RETAIL
  {
    id: "retail-website",
    niche: "retail",
    title: "Boutique website",
    icon: "🖥️",
    description:
      "Brand-forward site with lookbook, store locator, and new-arrival email signup.",
    priceFrom: 1490,
  },
  {
    id: "retail-ecommerce",
    niche: "retail",
    title: "Click & collect store",
    icon: "🛒",
    description:
      "Lightweight online shop with in-store pickup — perfect for small-batch retailers.",
    priceFrom: 900,
  },
  {
    id: "retail-loyalty",
    niche: "retail",
    title: "Loyalty card system",
    icon: "🎁",
    description:
      "Digital punch card that brings customers back — tracked and auto-rewarded.",
    priceFrom: 450,
  },
  {
    id: "retail-newsletter",
    niche: "retail",
    title: "New arrivals newsletter",
    icon: "📧",
    description:
      "Auto-send a curated email to your list each time new stock arrives.",
    priceFrom: 350,
  },
  {
    id: "retail-whatsapp",
    niche: "retail",
    title: "WhatsApp stock alerts",
    icon: "💬",
    description:
      "Broadcast new arrivals and limited-edition drops to opted-in customers instantly.",
    priceFrom: 350,
  },
  {
    id: "retail-reviews",
    niche: "retail",
    title: "Google review automation",
    icon: "⭐",
    description:
      "Post-purchase review requests that build your local search presence.",
    priceFrom: 250,
  },

  // WELLNESS
  {
    id: "wellness-website",
    niche: "wellness",
    title: "Wellness studio website",
    icon: "🖥️",
    description:
      "Calm, trust-first website with class schedule, instructor bios, and trial signup.",
    priceFrom: 790,
  },
  {
    id: "wellness-booking",
    niche: "wellness",
    title: "Class booking system",
    icon: "📅",
    description:
      "Drop-in and membership booking with waitlists, reminders, and cancellation handling.",
    priceFrom: 800,
  },
  {
    id: "wellness-membership",
    niche: "wellness",
    title: "Membership portal",
    icon: "🎟️",
    description:
      "Recurring membership with class credits, exclusive content, and auto-renewal.",
    priceFrom: 900,
  },
  {
    id: "wellness-nurture",
    niche: "wellness",
    title: "New client nurture flow",
    icon: "📧",
    description:
      "Automated 5-email welcome sequence that converts trial visitors into regulars.",
    priceFrom: 400,
  },
  {
    id: "wellness-reviews",
    niche: "wellness",
    title: "Review automation",
    icon: "⭐",
    description:
      "Auto-request Google reviews from clients after their 3rd session.",
    priceFrom: 250,
  },
  {
    id: "wellness-whatsapp",
    niche: "wellness",
    title: "WhatsApp class reminders",
    icon: "💬",
    description:
      "Automated 24h class reminders via WhatsApp — reduce no-shows by up to 40%.",
    priceFrom: 350,
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
