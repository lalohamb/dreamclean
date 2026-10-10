// ─── Business Constants ────────────────────────────────────────────────────
// Single source of truth. Update here; changes propagate site-wide.

export const BUSINESS = {
  name:      "Dream Clean Shine",
  tagline:   "Dream Clean. Stay Clean.",
  phone:     "(773) 440-0381",
  phoneHref: "tel:+17734400381",
  location:  "Michigan City, Indiana",
  // [NEEDS BUSINESS CONFIRMATION] Exact service territory before publishing
  serviceArea: "Michigan City, Indiana and surrounding communities",
  facebook:  "https://www.facebook.com/Dreamcleanshine",
  email:     "", // [NEEDS BUSINESS CONFIRMATION]
  // [NEEDS BUSINESS CONFIRMATION] Hours before publishing
  hours:     null as null | string,
} as const;

// ─── Navigation ────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/#services" },
  { label: "Why Choose Us",href: "/#why-us" },
  { label: "Contact",      href: "/contact" },
] as const;

// ─── Services ──────────────────────────────────────────────────────────────

export type Service = {
  slug:        string;
  title:       string;
  shortDesc:   string;
  heroHeadline:string;
  heroSub:     string;
  image:       string; // Unsplash placeholder — replace before launch
  imageAlt:    string;
  icon:        string; // lucide icon name
  audience:    string;
  benefits:    string[];
  checklist:   { area: string; items: string[] }[];
  faqs:        { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug:  "residential-cleaning",
    title: "Residential Cleaning",
    shortDesc: "Come home to comfort, freshness, and a space that feels cared for.",
    heroHeadline: "Come Home to Clean.\nCome Home to Comfort.",
    heroSub: "Regular residential cleaning that keeps your home welcoming, fresh, and ready for the moments that matter.",
    image:    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    imageAlt: "Bright, spotless modern living room with natural light — development placeholder",
    icon:     "Home",
    audience: "Homeowners, renters, and busy families",
    benefits: [
      "More free time for the things you love",
      "A consistently welcoming home environment",
      "Reduced cleaning workload and stress",
      "Personalized attention to your priorities",
      "Reliable, recurring service on your schedule",
    ],
    checklist: [
      {
        area: "Kitchen",
        items: [
          "Countertops and backsplash wiped down",
          "Exterior of appliances cleaned",
          "Sink scrubbed and polished",
          "Cabinet fronts wiped",
          "Floor swept and mopped",
        ],
      },
      {
        area: "Bathrooms",
        items: [
          "Toilet cleaned and sanitized",
          "Sink and vanity scrubbed",
          "Shower and tub cleaned",
          "Mirrors polished",
          "Floor mopped",
        ],
      },
      {
        area: "Bedrooms",
        items: [
          "Surfaces dusted",
          "Floors vacuumed or swept",
          "Mirrors wiped",
          "Trash emptied",
        ],
      },
      {
        area: "Common Areas",
        items: [
          "Surfaces and furniture dusted",
          "Floors vacuumed or swept and mopped",
          "Trash emptied",
          "Glass surfaces wiped",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should I schedule residential cleaning?",
        a: "Most clients choose weekly or bi-weekly service. We're happy to discuss what works best for your home and lifestyle.",
      },
      {
        q: "Do I need to be home during the cleaning?",
        a: "Not necessarily. Many clients provide access instructions. We'll discuss the arrangement that works best for you.",
      },
      {
        q: "Do you bring your own cleaning supplies?",
        // [NEEDS BUSINESS CONFIRMATION]
        a: "Please contact us to discuss supplies. We'll confirm what we bring and whether any preferences need to be accommodated.",
      },
    ],
  },
  {
    slug:  "office-cleaning",
    title: "Office Cleaning",
    shortDesc: "Help your business make a clean, professional impression.",
    heroHeadline: "A Cleaner Workplace\nMakes a Better Impression.",
    heroSub: "Professional office cleaning that keeps your workspace presentable, comfortable, and ready for business.",
    image:    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    imageAlt: "Clean, modern open-plan office with natural light — development placeholder",
    icon:     "Building2",
    audience: "Office managers, small businesses, and commercial property managers",
    benefits: [
      "A professional first impression for clients and visitors",
      "A more comfortable environment for your team",
      "Cleaning tailored to your workspace and schedule",
      "Consistent results without managing it yourself",
      "Flexible service arrangements",
    ],
    checklist: [
      {
        area: "Workspaces",
        items: [
          "Desks and surfaces dusted and wiped",
          "Keyboards and phones sanitized",
          "Trash emptied and liners replaced",
          "Floors vacuumed or swept",
        ],
      },
      {
        area: "Common Areas & Kitchenette",
        items: [
          "Countertops and tables wiped",
          "Sink cleaned",
          "Appliance exteriors wiped",
          "Floors mopped",
        ],
      },
      {
        area: "Restrooms",
        items: [
          "Toilets cleaned and sanitized",
          "Sinks and counters scrubbed",
          "Mirrors polished",
          "Floors mopped",
          "Supplies restocked where provided",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you clean outside of business hours?",
        // [NEEDS BUSINESS CONFIRMATION]
        a: "Scheduling flexibility is something we're happy to discuss. Contact us to explore options that work for your business.",
      },
      {
        q: "Do you offer recurring commercial cleaning?",
        a: "Yes. We can discuss a recurring arrangement suited to your office's needs and traffic.",
      },
    ],
  },
  {
    slug:  "deep-cleaning",
    title: "Deep Cleaning",
    shortDesc: "Give overlooked details and hard-working spaces the extra attention they deserve.",
    heroHeadline: "Every Corner.\nEvery Detail.",
    heroSub: "A thorough deep clean that goes beyond the surface — ideal for seasonal refreshes, first-time cleans, or spaces that need extra attention.",
    image:    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    imageAlt: "Sparkling clean kitchen after a deep clean — development placeholder",
    icon:     "Sparkles",
    audience: "Homeowners, renters, and businesses needing a thorough reset",
    benefits: [
      "A truly fresh start for your space",
      "Attention to areas often missed in routine cleaning",
      "Ideal before or after major events",
      "A strong foundation for ongoing maintenance cleaning",
      "Detailed, methodical approach",
    ],
    checklist: [
      {
        area: "Kitchen",
        items: [
          "Interior of appliances cleaned",
          "Cabinet interiors wiped",
          "Grout and tile scrubbed",
          "Range hood cleaned",
          "Baseboards wiped",
        ],
      },
      {
        area: "Bathrooms",
        items: [
          "Grout scrubbed",
          "Fixtures descaled",
          "Behind and around toilet cleaned",
          "Exhaust fan wiped",
          "Baseboards cleaned",
        ],
      },
      {
        area: "Throughout",
        items: [
          "Baseboards and trim wiped",
          "Light switches and door handles sanitized",
          "Window sills cleaned",
          "Ceiling fans dusted",
          "Behind and under furniture where accessible",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a deep clean take?",
        a: "It depends on the size and condition of the space. We'll give you a better estimate after discussing your specific needs.",
      },
      {
        q: "Should I schedule a deep clean before regular service?",
        a: "Many clients start with a deep clean to establish a clean baseline, then move to regular maintenance. We're happy to recommend an approach.",
      },
    ],
  },
  {
    slug:  "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    shortDesc: "Start fresh in your new space or prepare your previous property for its next chapter.",
    heroHeadline: "A Fresh Start\nFor Every Move.",
    heroSub: "Thorough move-in and move-out cleaning that helps you leave on good terms or arrive to a spotless new home.",
    image:    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Empty, freshly cleaned bright home ready for new occupants — development placeholder",
    icon:     "PackageOpen",
    audience: "Renters, homeowners, landlords, and property managers",
    benefits: [
      "Protect your security deposit with a thorough clean",
      "Arrive to a fresh, welcoming new home",
      "Save time during an already busy moving period",
      "Help landlords prepare properties for new tenants",
      "Detailed cleaning of every room",
    ],
    checklist: [
      {
        area: "Throughout",
        items: [
          "All rooms swept, vacuumed, and mopped",
          "Baseboards, trim, and doors wiped",
          "Light switches and outlets wiped",
          "Window sills and tracks cleaned",
          "Closets cleaned out and wiped",
        ],
      },
      {
        area: "Kitchen",
        items: [
          "Interior and exterior of all appliances",
          "Cabinet interiors and exteriors",
          "Countertops and backsplash",
          "Sink scrubbed",
        ],
      },
      {
        area: "Bathrooms",
        items: [
          "Toilet, sink, and tub/shower fully cleaned",
          "Grout scrubbed",
          "Mirrors polished",
          "Floors mopped",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I book move-out cleaning before or after moving my belongings?",
        a: "After your belongings are out is ideal — it allows for a more thorough clean of the entire space.",
      },
      {
        q: "Can you help with both move-out and move-in at different properties?",
        a: "Yes. Contact us to discuss scheduling both services.",
      },
    ],
  },
  {
    slug:  "home-organization",
    title: "Home Organization",
    shortDesc: "Bring greater order, simplicity, and functionality to your everyday spaces.",
    heroHeadline: "A More Organized\nHome. A Calmer Day.",
    heroSub: "Thoughtful home organization that helps you reclaim your space and enjoy a more functional, comfortable environment.",
    image:    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    imageAlt: "Neatly organized kitchen pantry with clean shelving — development placeholder",
    icon:     "LayoutGrid",
    audience: "Homeowners, renters, and busy families seeking more order",
    benefits: [
      "A more functional and enjoyable living space",
      "Less time searching for things",
      "Reduced clutter and visual stress",
      "Personalized organization suited to your lifestyle",
      "A foundation for easier ongoing cleaning",
    ],
    checklist: [
      {
        area: "Common Areas",
        items: [
          "Declutter and organize surfaces",
          "Sort and arrange storage areas",
          "Establish logical item groupings",
        ],
      },
      {
        area: "Kitchen",
        items: [
          "Organize pantry and cabinets",
          "Sort and arrange countertop items",
          "Consolidate and label where helpful",
        ],
      },
      {
        area: "Bedrooms & Closets",
        items: [
          "Organize closet space",
          "Sort clothing and storage",
          "Arrange bedroom surfaces",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to be present during home organization?",
        a: "We recommend being available, especially for the first session, so we can understand your preferences and priorities.",
      },
      {
        q: "Can organization be combined with a cleaning service?",
        a: "Yes. Many clients combine organization with a deep clean for a complete refresh. Contact us to discuss.",
      },
    ],
  },
];

// ─── FAQ Page ──────────────────────────────────────────────────────────────

export const FAQS = [
  {
    q: "How do I request a cleaning quote?",
    a: "Use our online quote request form or call us directly at (773) 440-0381. We'll follow up to discuss your needs.",
  },
  {
    q: "What types of cleaning do you offer?",
    a: "We offer residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and home organization.",
  },
  {
    q: "Do you clean homes and offices?",
    a: "Yes. We serve both residential and commercial clients in Michigan City, Indiana and surrounding communities.",
  },
  {
    q: "How much does cleaning cost?",
    // [NEEDS BUSINESS CONFIRMATION]
    a: "Pricing depends on the type of service, property size, and specific needs. Contact us for a personalized quote.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    // [NEEDS BUSINESS CONFIRMATION]
    a: "Please contact us to discuss supplies. We'll confirm what we bring and whether any preferences need to be accommodated.",
  },
  {
    q: "Can I schedule recurring cleaning?",
    a: "Yes. We offer recurring service arrangements. Contact us to discuss a schedule that works for you.",
  },
  {
    q: "What areas do you serve?",
    // [NEEDS BUSINESS CONFIRMATION] Confirm exact service territory before publishing
    a: "We are based in Michigan City, Indiana and serve surrounding communities. Contact us to confirm service availability in your area.",
  },
  {
    q: "How do I reschedule an appointment?",
    // [NEEDS BUSINESS CONFIRMATION]
    a: "Please call us at (773) 440-0381 to reschedule. We ask for as much advance notice as possible.",
  },
];
