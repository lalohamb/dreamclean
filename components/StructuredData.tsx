import { BUSINESS, SERVICES } from "@/lib/constants";

const BASE = "https://dreamcleanshine.com";

const AREA_SERVED = [
  { "@type": "City", name: "Michigan City", containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "La Porte",      containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Valparaiso",    containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Portage",       containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Merrillville",  containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Hammond",       containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Gary",          containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Chicago",       containedInPlace: { "@type": "State", name: "Illinois" } },
  { "@type": "City", name: "Dyer",         containedInPlace: { "@type": "State", name: "Indiana" } },
  { "@type": "City", name: "Calumet City", containedInPlace: { "@type": "State", name: "Illinois" } },
];

export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["CleaningService", "LocalBusiness"],
    "@id": `${BASE}/#business`,
    name: BUSINESS.name,
    description:
      "Dream Clean Shine provides professional residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and home organization in Michigan City, Indiana and Chicagoland areas.",
    url: BASE,
    telephone: BUSINESS.phone,
    sameAs: [BUSINESS.facebook],
    logo: `${BASE}/logo.png`,
    image: `${BASE}/og-image.png`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Stripe",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Michigan City",
      addressRegion: "IN",
      postalCode: "46360",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.7075,
      longitude: -86.8950,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: AREA_SERVED,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        "@id": `${BASE}/services/${s.slug}/#offer`,
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDesc,
          url: `${BASE}/services/${s.slug}`,
          provider: { "@id": `${BASE}/#business` },
          areaServed: AREA_SERVED,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Kenya R. Ransom" },
        datePublished: "2025-04-22",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Dream Clean Shine came into my house and got my whole life together within hours. She was professional, personable, and on time.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carita Wise" },
        datePublished: "2023-06-05",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "I've used Dream Clean Shine several times and I was never disappointed with the results. Jovanka was on time, professional, and passionate about getting the job done.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
