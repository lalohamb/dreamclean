import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dreamcleanshine.com";
  const now  = new Date();

  const static_pages = [
    { url: base,            priority: 1.0 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/quote`, priority: 0.9 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/faq`,   priority: 0.6 },
  ].map((p) => ({ ...p, lastModified: now, changeFrequency: "monthly" as const }));

  const service_pages = SERVICES.map((s) => ({
    url:             `${base}/services/${s.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.85,
  }));

  return [...static_pages, ...service_pages];
}
