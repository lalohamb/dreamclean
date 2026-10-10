import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { Phone } from "lucide-react";
import FacebookIcon from "@/components/ui/FacebookIcon";

export const metadata: Metadata = buildMetadata({
  title: "Request a Cleaning Quote",
  description:
    "Request a free cleaning quote from Dream Clean Shine in Michigan City, Indiana. Residential cleaning, office cleaning, deep cleaning, move-in/move-out, and home organization.",
  path: "/quote",
});

export default function QuotePage({
  searchParams,
}: {
  searchParams: { service?: string };
}) {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-brand-ice-blue">
        <div className="container-md text-center">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
            Free Quote
          </p>
          <h1 className="text-display-xl font-heading font-extrabold text-brand-charcoal mb-5 leading-tight">
            Request a Cleaning Quote
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we'll follow up to discuss your space and how we can help.
            No commitment required.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section-pad bg-white pb-28 lg:pb-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm preselect={searchParams.service} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-brand-ice-blue rounded-3xl p-7">
                <h2 className="font-heading font-bold text-brand-charcoal mb-3">Prefer to Call?</h2>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  We're happy to talk through your needs directly.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 font-heading font-bold text-brand-pink text-lg hover:text-[#d4206f] transition-colors"
                  aria-label={`Call ${BUSINESS.phone}`}
                >
                  <Phone size={18} /> {BUSINESS.phone}
                </a>
              </div>

              <div className="bg-brand-soft-pink/40 rounded-3xl p-7">
                <h2 className="font-heading font-bold text-brand-charcoal mb-3">Follow Us</h2>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:text-brand-pink transition-colors"
                  aria-label="Dream Clean Shine on Facebook"
                >
                  <FacebookIcon size={16} className="text-brand-blue" />
                  Dream Clean Shine on Facebook
                </a>
              </div>

              <div className="bg-brand-ice-blue rounded-3xl p-7 text-sm text-slate-500 leading-relaxed">
                <p className="font-semibold text-brand-charcoal mb-2">What happens next?</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>We receive your request.</li>
                  <li>We'll reach out to discuss your needs.</li>
                  <li>We'll confirm details and schedule your service.</li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
