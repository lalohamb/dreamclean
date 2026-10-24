import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getSettings } from "@/lib/settings";
import PricingClient from "./PricingClient";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Explore Dream Clean Shine cleaning service pricing. Compare Light Sleeper and Heavy Dreamer tiers, cleaning packages, and request a personalized quote.",
  path: "/pricing",
});

export default function PricingPage() {
  const { calendlyUrl } = getSettings();
  return <PricingClient calendlyUrl={calendlyUrl} />;
}
