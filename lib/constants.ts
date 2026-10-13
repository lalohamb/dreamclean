// ─── Business Constants ────────────────────────────────────────────────────
// Single source of truth. Update here; changes propagate site-wide.

export const BUSINESS = {
  name:      "Dream Clean Shine",
  tagline:   "Where Clean Meets Shine.",
  phone:     "(773) 440-0381",
  phoneHref: "tel:+17734400381",
  location:  "Michigan City, Indiana",
  serviceArea: "Michigan City, Northwest Indiana, and select Chicagoland areas",
  facebook:  "https://www.facebook.com/Dreamcleanshine",
  email:     "", // [NEEDS BUSINESS CONFIRMATION]
  hours: "9 AM – 5 PM",
} as const;

// ─── Navigation ────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/#services" },
  { label: "Why Choose Us",href: "/#why-us" },
  { label: "Pricing",      href: "/pricing" },
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
    image:    "/01_TaskRabbit-Cleaner_072__1_.webp",
    imageAlt: "Professional cleaner at work — Dream Clean Shine residential cleaning",
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
    image:    "/office.webp",
    imageAlt: "Clean professional office space — Dream Clean Shine office cleaning",
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
    heroHeadline: "A Fresh Start For Every Move.",
    heroSub: "Thorough move-in and move-out cleaning that helps you leave on good terms or arrive to a spotless new home.",
    image:    "/Move-In-Move-Out-Cleaning-1080x554.webp",
    imageAlt: "Freshly cleaned home ready for move-in — Dream Clean Shine move-in/move-out cleaning",
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
    image:    "/InHomeOrg@2x.jpg",
    imageAlt: "Neatly organized home space — Dream Clean Shine home organization service",
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
  {
    slug:  "commercial-cleaning",
    title: "Commercial Cleaning",
    shortDesc: "Professional cleaning for offices, facilities, and business properties of all sizes.",
    heroHeadline: "A Cleaner Business\nMakes a Better Impression.",
    heroSub: "Customized commercial cleaning that keeps your facility presentable, sanitary, and ready for business — every visit.",
    image:    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    imageAlt: "Clean, professional office space — development placeholder",
    icon:     "Building2",
    audience: "Business owners, office managers, and facility managers",
    benefits: [
      "A professional environment that impresses clients and staff",
      "Customized cleaning plan for your facility",
      "Consistent, reliable service on your schedule",
      "Insured and professional cleaning team",
      "Scalable service from small offices to large facilities",
    ],
    checklist: [
      {
        area: "General Areas",
        items: [
          "Trash collection and liner replacement",
          "Accessible surface dusting",
          "Floor vacuuming and mopping",
          "High-touch surface disinfection",
          "Interior glass and door spot cleaning",
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
      {
        area: "Breakroom / Common Areas",
        items: [
          "Countertops and tables wiped",
          "Appliance exteriors cleaned",
          "Sink cleaned",
          "Floors mopped",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get a commercial cleaning quote?",
        a: "Commercial clients require an in-person walkthrough so we can assess the facility and provide an accurate quote. Contact us to schedule.",
      },
      {
        q: "Do you offer recurring commercial cleaning contracts?",
        a: "Yes. We provide customized recurring service agreements for commercial properties. A walkthrough and written scope of work are required.",
      },
      {
        q: "Are you insured for commercial properties?",
        a: "Yes, Dream Clean Shine LLC is insured, giving commercial clients added peace of mind.",
      },
    ],
  },
];

// ─── Reviews ───────────────────────────────────────────────────────────────

export const REVIEWS = [
  {
    name: "Kenya R. Ransom",
    date: "April 22, 2025",
    body: "Dream Clean Shine came into my house and got my whole life together within hours. She was professional, personable, and on time. My house looks like a completely different place — she even gave me tips on how to manage while she's away. I highly recommend using Jo-Jo because of them I can breathe better! Thank you for blessing my home.",
  },
  {
    name: "Talise Goodwin",
    date: "October 5, 2023",
    body: "I love how JoJo cleans and declutters. She is the best. She has done an amazing job cleaning my home.",
  },
  {
    name: "Carita Wise",
    date: "June 5, 2023",
    body: "I've used Dream Clean Shine several times and I was never disappointed with the results. Jovanka was on time, professional, and passionate about getting the job done. We can't do everything ourselves, so you can outsource some of your duties. Dream Clean Shine is a great choice to lighten your load.",
  },
  {
    name: "Amanda Phillips",
    date: "June 5, 2021",
    body: "Dream Clean Shine is on time and prompt! I love how thorough she is as well as professional. She's also fast and quiet. Thank you for it all!",
  },
] as const;

// ─── FAQ Page ──────────────────────────────────────────────────────────────

export const FAQS = [
  {
    q: "What services does DCS offer?",
    a: "We offer residential cleaning, commercial cleaning, office cleaning, and home organization services.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Michigan City, Northwest Indiana, and select Chicagoland areas. Travel fees may apply.",
  },
  {
    q: "How do I book a cleaning?",
    a: "Contact us to schedule a video consultation so we can discuss your needs and provide a customized quote.",
  },
  {
    q: "Do you provide cleaning supplies?",
    a: "Yes, standard cleaning supplies are included. Specialty products or additional materials may cost extra.",
  },
  {
    q: "How much do your services cost?",
    a: "Our services have starting prices, but final pricing depends on the size, condition, and specific needs of your space.",
  },
  {
    q: "Do I need a deposit to book?",
    a: "Yes. A $50 deposit is required for services totaling $300 or less. Services over $300 require a 50% deposit of the total service price. Your appointment is confirmed once your deposit is received.",
  },
  {
    q: "Do you offer recurring cleaning?",
    a: "Yes! We offer recurring cleaning options to help keep your space consistently clean and comfortable.",
  },
  {
    q: "Do you offer commercial and office cleaning contracts?",
    a: "Yes, we provide customized commercial and office cleaning services. A walkthrough is required to determine pricing and service needs.",
  },
  {
    q: "Do you offer deep cleaning and move-in/move-out cleaning?",
    a: "Yes! We offer detailed deep cleaning and move-in/move-out services based on your property\u2019s needs.",
  },
  {
    q: "Do you provide organizing supplies?",
    a: "Organization supplies, storage bins, and specialty materials are available at an additional cost unless included in your customized quote.",
  },
  {
    q: "Are you insured?",
    a: "Yes, Dream Clean Shine LLC is insured, giving our clients added peace of mind.",
  },
  {
    q: "How can I request a quote?",
    a: "Contact us through our website to discuss your service needs and receive a personalized estimate.",
  },
  {
    q: "Do you clean homes with pets?",
    a: "Yes! We welcome furry family members. An additional pet fee may apply depending on the amount of pet hair and cleaning required.",
  },
  {
    q: "Do I need a video consultation before booking?",
    a: "Yes! All new clients are required to complete a free video consultation before booking. This allows us to discuss your cleaning or organization needs, assess the scope of the job, and determine whether it\u2019s a good fit for Dream Clean Shine LLC. After the consultation, we\u2019ll provide a customized quote and discuss next steps.",
  },
  {
    q: "Is the video consultation free?",
    a: "Absolutely! Your video consultation is completely free, and there is no obligation to book our services.",
  },
];
