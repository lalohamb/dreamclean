import type { Metadata } from "next";
import { BUSINESS } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `https://dreamcleanshine.com${path}`;
  const fullTitle = `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL("https://dreamcleanshine.com"),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
