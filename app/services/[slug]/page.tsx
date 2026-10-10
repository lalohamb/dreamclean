import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} in Michigan City, Indiana`,
    description: `${service.heroSub} Serving Michigan City, Indiana. Request a free quote from Dream Clean Shine today.`,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-brand-charcoal overflow-hidden pt-20">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="container-xl relative z-10 pb-16 pt-24">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-blue mb-3">
            {service.audience}
          </p>
          <h1
            className="text-display-xl font-heading font-extrabold text-white mb-5 leading-tight"
            dangerouslySetInnerHTML={{ __html: service.heroHeadline.replace(/\n/g, "<br/>") }}
          />
          <p className="text-lg text-white/75 max-w-xl mb-8 leading-relaxed">{service.heroSub}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={`/quote?service=${encodeURIComponent(service.title)}`} size="lg">
              Request a Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits + Checklist */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
                Why It Matters
              </p>
              <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-6">
                What You Gain
              </h2>
              <ul className="space-y-4" role="list">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-pink shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-ice-blue rounded-3xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-1">
                Proposed Scope of Work
              </p>
              <p className="text-xs text-slate-400 italic mb-5">
                [Checklist subject to business confirmation before publication]
              </p>
              {service.checklist.map((section) => (
                <div key={section.area} className="mb-5 last:mb-0">
                  <h3 className="font-heading font-bold text-brand-charcoal mb-2 text-sm uppercase tracking-wide">
                    {section.area}
                  </h3>
                  <ul className="space-y-1.5" role="list">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-brand-blue shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="section-pad bg-brand-soft-pink/30">
        <div className="container-md text-center">
          <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-4">
            How to Get Started
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto">
            Getting a quote is simple. Fill out our short request form, and we'll follow up to
            discuss your space, your priorities, and how we can help.
          </p>
          <Button href={`/quote?service=${encodeURIComponent(service.title)}`} size="lg">
            Request a {service.title} Quote
          </Button>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-md">
            <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-brand-ice-blue rounded-2xl px-6 py-5 cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-4 font-heading font-semibold text-brand-charcoal list-none">
                    {faq.q}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-brand-pink transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-slate-500 leading-relaxed text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="section-pad bg-brand-ice-blue">
        <div className="container-xl text-center">
          <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-8">
            Explore Other Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="px-5 py-2.5 rounded-full bg-white border border-brand-blue/30 text-sm font-semibold text-brand-charcoal hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
