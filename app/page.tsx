import type { Metadata } from "next";
import Hero          from "@/components/sections/Hero";
import TrustBar      from "@/components/sections/TrustBar";
import ServicesGrid  from "@/components/sections/ServicesGrid";
import ValueProp     from "@/components/sections/ValueProp";
import HowItWorks    from "@/components/sections/HowItWorks";
import AboutPreview  from "@/components/sections/AboutPreview";
import FinalCTA      from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Professional Cleaning Services in Michigan City, Indiana",
  description:
    "Dream Clean Shine provides residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and home organization in Michigan City, Indiana. Request a free quote today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ValueProp />
      <HowItWorks />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
