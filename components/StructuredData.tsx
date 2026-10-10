import { BUSINESS } from "@/lib/constants";

// LocalBusiness structured data for Dream Clean Shine.
// [NEEDS BUSINESS CONFIRMATION] address, geo, openingHours before publishing.
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: BUSINESS.name,
    description:
      "Dream Clean Shine provides professional residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and home organization in Michigan City, Indiana.",
    url: "https://dreamcleanshine.com",
    telephone: BUSINESS.phone,
    sameAs: [BUSINESS.facebook],
    address: {
      "@type": "PostalAddress",
      // [NEEDS BUSINESS CONFIRMATION]
      addressLocality: "Michigan City",
      addressRegion: "IN",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Michigan City",
      containedInPlace: { "@type": "State", name: "Indiana" },
    },
    // Do not add aggregateRating until real reviews are available
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
