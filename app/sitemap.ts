import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dreamcleanshine.com";
  const now  = new Date();

  const staticPages = [
    { url: base,                  priority: 1.0, changeFrequency: "weekly"  as const },
    { url: `${base}/services`,    priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/quote`,       priority: 0.95, changeFrequency: "monthly" as const },
    { url: `${base}/pricing`,     priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/about`,       priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/contact`,     priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/faq`,         priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/locations`,   priority: 0.8, changeFrequency: "monthly" as const },
  ].map((p) => ({ ...p, lastModified: now }));

  const servicePages = SERVICES.map((s) => ({
    url:             `${base}/services/${s.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.85,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url:             `${base}/locations/${l.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
