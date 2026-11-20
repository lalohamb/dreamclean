import type { Metadata } from "next";
import { BUSINESS } from "./constants";

const BASE = "https://dreamcleanshine.com";

const GEO_KEYWORDS = [
  "cleaning services Michigan City Indiana",
  "house cleaning Michigan City IN",
  "maid service Northwest Indiana",
  "cleaning services Chicagoland",
  "residential cleaning La Porte Indiana",
  "office cleaning Valparaiso Indiana",
  "deep cleaning Michigan City",
  "move in move out cleaning Indiana",
  "home organization Michigan City",
  "Dream Clean Shine",
];

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE}${path}`;
  const fullTitle = `${title} | ${BUSINESS.name}`;
  const allKeywords = [...GEO_KEYWORDS, ...keywords];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    metadataBase: new URL(BASE),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${BUSINESS.name} — Professional Cleaning Services` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
    other: {
      "geo.region":    "US-IN",
      "geo.placename": "Michigan City, Indiana",
      "geo.position":  "41.7075;-86.8950",
      "ICBM":          "41.7075, -86.8950",
    },
  };
}
