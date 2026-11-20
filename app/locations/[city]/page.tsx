import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle2, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";
import { buildMetadata } from "@/lib/metadata";

interface Props { params: { city: string } }

const BASE = "https://dreamcleanshine.com";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = LOCATIONS.find((l) => l.slug === params.city);
  if (!loc) return {};
  return buildMetadata({
    title: `Cleaning Services in ${loc.city}, ${loc.stateCode}`,
    description: `Professional cleaning services in ${loc.city}, ${loc.state}. Dream Clean Shine offers residential cleaning, deep cleaning, move-in/move-out, office cleaning & home organization. Serving ${loc.region}.`,
    path: `/locations/${loc.slug}`,
    keywords: [
      `cleaning services ${loc.city}`,
      `house cleaning ${loc.city} ${loc.stateCode}`,
      `maid service ${loc.city}`,
      `cleaning company ${loc.city} ${loc.state}`,
      `${loc.city} residential cleaning`,
      `${loc.city} office cleaning`,
    ],
  });
}

function LocationSchema({ loc }: { loc: typeof LOCATIONS[0] }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",      item: BASE },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
        { "@type": "ListItem", position: 3, name: `${loc.city}, ${loc.stateCode}`, item: `${BASE}/locations/${loc.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CleaningService",
      name: `Dream Clean Shine — ${loc.city}`,
      description: loc.description,
      url: `${BASE}/locations/${loc.slug}`,
      telephone: BUSINESS.phone,
      areaServed: {
        "@type": "City",
        name: loc.city,
        containedInPlace: { "@type": "State", name: loc.state },
      },
      geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
      provider: { "@type": "LocalBusiness", name: "Dream Clean Shine", url: BASE },
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function LocationPage({ params }: Props) {
  const loc = LOCATIONS.find((l) => l.slug === params.city);
  if (!loc) notFound();

  return (
    <>
      <LocationSchema loc={loc} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-charcoal overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #70B9F5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F42D88 0%, transparent 40%)" }}
        />
        <div className="container-md text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <MapPin size={13} className="text-brand-pink" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">{loc.region}</span>
          </div>
          <h1 className="text-display-xl font-heading font-extrabold text-white mb-5 leading-tight">
            Cleaning Services in<br />
            <span className="text-brand-pink">{loc.city}, {loc.stateCode}</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
            {loc.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/quote" size="lg">GET A FREE QUOTE</Button>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 text-white font-heading font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
            >
              <Phone size={16} /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-3 text-center">
            Services Available in {loc.city}
          </h2>
          <p className="text-slate-500 text-center mb-10 max-w-lg mx-auto">
            All services are subject to a free video consultation to confirm availability and provide an accurate quote.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-brand-ice-blue rounded-2xl p-6 hover:shadow-card-hover transition-shadow border border-transparent hover:border-brand-blue/20"
              >
                <h3 className="font-heading font-bold text-brand-charcoal mb-2 group-hover:text-brand-pink transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.shortDesc}</p>
                <span className="text-xs font-semibold text-brand-pink">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why DCS */}
      <section className="section-pad bg-brand-ice-blue">
        <div className="container-md">
          <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-8 text-center">
            Why {loc.city} Clients Choose Dream Clean Shine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Free video consultation before every booking",
              "Personalized quote based on your actual space",
              "Family-owned and fully insured",
              "Serving " + loc.region + " and Chicagoland",
              "Flexible scheduling to fit your life",
              "Trusted by clients across Northwest Indiana",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-2xl p-4">
                <CheckCircle2 size={18} className="text-brand-pink shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="section-pad bg-white">
        <div className="container-xl text-center">
          <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-6">
            Other Areas We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="px-5 py-2.5 rounded-full bg-brand-ice-blue border border-brand-blue/20 text-sm font-semibold text-brand-charcoal hover:border-brand-pink hover:text-brand-pink transition-colors"
              >
                {l.city}, {l.stateCode}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
