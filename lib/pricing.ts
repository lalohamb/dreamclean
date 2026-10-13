// ─── Pricing Data Model ────────────────────────────────────────────────────
// Single source of truth for all published prices.
// All monetary values stored in cents to avoid floating-point errors.

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}

// ─── Service Categories & Tiers ───────────────────────────────────────────

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceCents: number;
  priceLabel: string;   // e.g. "per visit", "per project"
  highlight: boolean;
  items: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
  tiers: [PricingTier, PricingTier, PricingTier];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "residential",
    label: "Residential",
    icon: "Home",
    tiers: [
      {
        id: "residential-fresh-start",
        name: "Fresh Start",
        tagline: "Standard maintenance cleaning",
        priceCents: 17000,
        priceLabel: "starting at",
        highlight: false,
        items: [
          "Dusting accessible surfaces",
          "Kitchen counters & exterior appliances",
          "Bathroom cleaning and sanitizing",
          "Vacuuming and mopping floors",
          "Trash removal",
        ],
      },
      {
        id: "residential-deep-shine",
        name: "Deep Shine",
        tagline: "Detailed deep cleaning",
        priceCents: 0,
        priceLabel: "custom quote",
        highlight: true,
        items: [
          "Everything in Fresh Start",
          "Extra attention to buildup and grime",
          "Baseboards and reachable detail work",
          "Detailed bathroom and kitchen cleaning",
          "Doors, switches and high-touch areas",
        ],
      },
      {
        id: "residential-move",
        name: "Move-In / Move-Out",
        tagline: "Empty-home cleaning",
        priceCents: 35000,
        priceLabel: "starting at",
        highlight: false,
        items: [
          "Detailed cleaning of empty rooms",
          "Cabinets and drawers, inside and out",
          "Bathrooms and kitchen detailing",
          "Floors, baseboards and accessible surfaces",
          "Final presentation-ready touch-up",
        ],
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: "Building2",
    tiers: [
      {
        id: "commercial-essential",
        name: "Essential",
        tagline: "Core commercial cleaning",
        priceCents: 20000,
        priceLabel: "per visit, starting at",
        highlight: false,
        items: [
          "Trash collection and liner replacement",
          "Accessible surface dusting",
          "Floor vacuuming and mopping",
          "Restroom cleaning",
          "Basic breakroom / common-area cleaning",
        ],
      },
      {
        id: "commercial-complete",
        name: "Complete Care",
        tagline: "Comprehensive commercial",
        priceCents: 35000,
        priceLabel: "per visit, starting at",
        highlight: true,
        items: [
          "Everything in Essential",
          "Detailed restroom and breakroom care",
          "High-touch surface disinfection",
          "Glass doors and interior spot cleaning",
          "Additional rooms and common areas",
        ],
      },
      {
        id: "commercial-premium",
        name: "Premium Facility",
        tagline: "Larger facility care",
        priceCents: 50000,
        priceLabel: "per visit, starting at",
        highlight: false,
        items: [
          "Comprehensive cleaning of larger facilities",
          "Detailed floor care",
          "Multiple restrooms and common areas",
          "Expanded cleaning checklist",
          "Customized service plan and quality checks",
        ],
      },
    ],
  },
  {
    id: "offices",
    label: "Offices",
    icon: "Briefcase",
    tiers: [
      {
        id: "office-essentials",
        name: "Office Essentials",
        tagline: "Core office cleaning",
        priceCents: 12500,
        priceLabel: "per visit, starting at",
        highlight: false,
        items: [
          "Empty trash bins",
          "Dust accessible desks and surfaces",
          "Vacuum and mop floors",
          "Clean one restroom",
          "Wipe common touchpoints",
        ],
      },
      {
        id: "office-refresh",
        name: "Office Refresh",
        tagline: "Full office care",
        priceCents: 20000,
        priceLabel: "per visit, starting at",
        highlight: true,
        items: [
          "Everything in Office Essentials",
          "Clean breakroom and kitchenette",
          "Detailed restroom cleaning",
          "Spot-clean interior glass",
          "Clean conference and shared spaces",
        ],
      },
      {
        id: "office-executive",
        name: "Executive Care",
        tagline: "Premium office cleaning",
        priceCents: 30000,
        priceLabel: "per visit, starting at",
        highlight: false,
        items: [
          "Comprehensive office cleaning",
          "Multiple work areas and restrooms",
          "Detailed floors and high-touch surfaces",
          "Breakroom and conference room care",
          "Customized recurring checklist",
        ],
      },
    ],
  },
  {
    id: "organization",
    label: "Declutter & Organization",
    icon: "FolderOpen",
    tiers: [
      {
        id: "org-simple-reset",
        name: "Simple Reset",
        tagline: "One small area",
        priceCents: 10000,
        priceLabel: "per hour, starting at",
        highlight: false,
        items: [
          "Decluttering one small area",
          "Pantry, bathroom cabinet, or small closet",
          "Sorting and grouping items",
          "Basic organization and tidy-up",
        ],
      },
      {
        id: "org-whole-space",
        name: "Whole-Space",
        tagline: "Room or closet project",
        priceCents: 20000,
        priceLabel: "per project, starting at",
        highlight: true,
        items: [
          "Organize a bedroom, closet, or pantry",
          "Sort belongings into categories",
          "Create practical storage zones",
          "Arrange items for easier access",
        ],
      },
      {
        id: "org-complete-reset",
        name: "Complete Home Reset",
        tagline: "Multi-area transformation",
        priceCents: 40000,
        priceLabel: "per project, starting at",
        highlight: false,
        items: [
          "Multi-area organization",
          "Decluttering and sorting support",
          "Customized storage systems",
          "Room-by-room organization plan",
          "Final reset and walkthrough",
        ],
      },
    ],
  },
];

// ─── Add-On Services ───────────────────────────────────────────────────────

export interface AddOn {
  id: string;
  name: string;
  icon: string;
  priceCents: number;
  unit: string;
}

export const ADD_ONS: AddOn[] = [
  { id: "oven",       name: "Inside Oven",                  icon: "Flame",        priceCents: 7500,  unit: "flat" },
  { id: "fridge",     name: "Inside Refrigerator",          icon: "Refrigerator", priceCents: 4500,  unit: "flat" },
  { id: "baseboard",  name: "Baseboard Detailing",          icon: "Minus",        priceCents: 4000,  unit: "flat" },
  { id: "windows",    name: "Interior Window Cleaning",     icon: "Square",       priceCents: 5000,  unit: "flat" },
  { id: "laundry",    name: "Laundry Assistance",           icon: "WashingMachine", priceCents: 3000, unit: "flat" },
  { id: "bathroom",   name: "Extra Bathroom",               icon: "Bath",         priceCents: 2500,  unit: "per bathroom" },
  { id: "organizing", name: "Organizing Add-On",            icon: "FolderOpen",   priceCents: 10000, unit: "per hour" },
  { id: "travel",     name: "Travel Outside Service Area",  icon: "MapPin",       priceCents: 3500,  unit: "flat" },
];

// ─── Deposit & Cancellation Policy ────────────────────────────────────────

export const DEPOSIT_POLICY = {
  standardDepositCents: 5000,
  standardThresholdCents: 30000,
  largeDepositPercent: 50,
  notes: [
    "A $50 deposit is required for services totaling $300 or less.",
    "Services over $300 require a 50% deposit of the total service price.",
    "Your appointment is confirmed once your deposit is received.",
    "The remaining balance is due upon completion of service.",
  ],
};

export const CANCELLATION_POLICY = [
  "At least 24 hours' notice required for cancellations or rescheduling.",
  "One reschedule is allowed with your original deposit.",
  "Additional rescheduling requires a new deposit.",
  "Cancellations with less than 24 hours' notice — deposit is nonrefundable.",
  "No-shows — deposit is forfeited; a new deposit is required to rebook.",
  "Rescheduled appointments are not confirmed until any required deposit is received.",
];

// ─── Consultation Process ──────────────────────────────────────────────────

export const CONSULTATION_TYPES = [
  {
    id: "residential",
    icon: "Video",
    title: "Residential & Organization",
    method: "Free Video Consultation",
    description:
      "All new residential and organization clients complete a free video consultation and virtual walkthrough before booking. We'll discuss your needs, assess the space, and confirm whether it's a good fit.",
    cta: "Schedule a Video Consultation",
  },
  {
    id: "commercial",
    icon: "Building2",
    title: "Commercial Cleaning",
    method: "In-Person Walkthrough",
    description:
      "Commercial clients require an in-person walkthrough of the facility so we can properly assess the space, cleaning requirements, and scope of work before providing a quote.",
    cta: "Request a Commercial Walkthrough",
  },
];
