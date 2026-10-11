// ─── Pricing Data Model ────────────────────────────────────────────────────
// Single source of truth for all published prices.
// All monetary values stored in cents to avoid floating-point errors.
// Fields marked needsConfirmation must not be used in automated calculations.

export type Tier = "light" | "heavy";
export type Category = "addon" | "package" | "session" | "commercial";

export interface TierPrice {
  priceCents: number;
  unit: string;         // e.g. "per room", "up to 2 loads"
  limit?: string;       // published weight/quantity limit
}

export interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  icon: string;         // lucide icon name
  light: TierPrice | null;
  heavy: TierPrice | null;
  needsConfirmation?: string;
}

export interface CleaningPackage {
  id: string;
  name: string;         // Dream / Clean / Shine
  tagline: string;
  priceCents: number;
  visits: string;       // published visit description
  style: string;        // "Deluxe Style"
  highlight: boolean;   // true = visually featured card
  needsConfirmation?: string;
}

export interface SessionRate {
  priceCents: number;
  description: string;
  notes: string[];
  needsConfirmation?: string;
}

export interface CommercialRate {
  sessionPriceCents: number;
  additionalHourlyPriceCents: number;
  sessionDescription: string;
  needsConfirmation: string;
}

// ─── Published Session Rate ────────────────────────────────────────────────

export const DAILY_RATE: SessionRate = {
  priceCents: 13000,
  description: "Standard daily cleaning session",
  notes: [
    "2-hour cleaning session",
    "30-minute grace period included",
    "Trash removal included",
  ],
  needsConfirmation:
    "Flyer states both '2-hour session with 30-min grace period' and '2 hours includes the grace period' — exact session duration requires business confirmation.",
};

// ─── Add-On Services ───────────────────────────────────────────────────────

export const SERVICE_ADDONS: ServiceAddon[] = [
  {
    id: "oven-stove",
    name: "Oven & Stove",
    description: "Deep clean of oven interior, stovetop, and surrounding surfaces.",
    icon: "Flame",
    light: { priceCents: 3500, unit: "flat" },
    heavy: { priceCents: 5000, unit: "flat" },
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Full bathroom clean including toilet, sink, tub/shower, and floors.",
    icon: "Bath",
    light: { priceCents: 3000, unit: "per bathroom" },
    heavy: { priceCents: 4500, unit: "per bathroom" },
  },
  {
    id: "fridge",
    name: "Refrigerator",
    description: "Interior and exterior fridge clean, shelves wiped, and deodorized.",
    icon: "Refrigerator",
    light: { priceCents: 3000, unit: "flat" },
    heavy: { priceCents: 3000, unit: "flat" },
  },
  {
    id: "cabinets-closets",
    name: "Cabinets / Closets",
    description: "Interior and exterior cabinet or closet organization and wipe-down.",
    icon: "LayoutGrid",
    light: { priceCents: 3500, unit: "per room" },
    heavy: { priceCents: 6500, unit: "up to 2 rooms" },
  },
  {
    id: "decluttering",
    name: "Decluttering / Organization",
    description: "Drawers, dressers, bookshelves, and similar organization tasks.",
    icon: "FolderOpen",
    light: { priceCents: 4500, unit: "per room" },
    heavy: { priceCents: 8000, unit: "up to 2 rooms or garages" },
  },
  {
    id: "laundry",
    name: "Laundry — Wash, Dry & Fold",
    description: "Full laundry service including washing, drying, and folding.",
    icon: "WashingMachine",
    light: { priceCents: 4000, unit: "up to 2 loads", limit: "15 lb max" },
    heavy: { priceCents: 7000, unit: "up to 4 loads", limit: "35 lb max" },
    needsConfirmation:
      "Additional load ($25 / 7 lb) is listed under Light Sleeper only. Confirm whether it applies to Heavy Dreamer before enabling add-on load calculations.",
  },
];

export const ADDITIONAL_LAUNDRY_LOAD: TierPrice = {
  priceCents: 2500,
  unit: "per additional load",
  limit: "7 lb per load",
};

// ─── Cleaning Packages ─────────────────────────────────────────────────────

export const PACKAGES: CleaningPackage[] = [
  {
    id: "dream",
    name: "Dream",
    tagline: "A great start.",
    priceCents: 23000,
    visits: "2 visits a week",
    style: "Deluxe Style",
    highlight: false,
    needsConfirmation: "Billing period (weekly / bi-weekly / monthly) not confirmed.",
  },
  {
    id: "clean",
    name: "Clean",
    tagline: "Most popular choice.",
    priceCents: 35000,
    visits: "3 visits / bi-weekly",
    style: "Deluxe Style",
    highlight: true,
    needsConfirmation: "Billing period not confirmed.",
  },
  {
    id: "shine",
    name: "Shine",
    tagline: "Full coverage.",
    priceCents: 47000,
    visits: "5 visits / monthly",
    style: "Deluxe Style",
    highlight: false,
    needsConfirmation: "Billing period not confirmed.",
  },
];

// ─── Commercial ────────────────────────────────────────────────────────────

export const COMMERCIAL: CommercialRate = {
  sessionPriceCents: 16000,
  additionalHourlyPriceCents: 8000,
  sessionDescription: "Commercial cleaning session",
  needsConfirmation:
    "Relationship between $160 session rate and $80/hr additional rate is not defined. Does the session cover 1 hour, 2 hours, or a flat visit? Confirm before enabling overtime calculations.",
};

// ─── Helpers ───────────────────────────────────────────────────────────────

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}
