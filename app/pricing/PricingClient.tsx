"use client";
import { DAILY_RATE, SERVICE_ADDONS, PACKAGES, COMMERCIAL, formatPrice } from "@/lib/pricing";
import { EstimateProvider } from "./EstimateContext";
import { TierSelector, ServiceAddonCard, PackageCard, SelectedSummary } from "./PricingComponents";
import { Clock, Trash2, Building2, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PricingClient() {
  return (
    <EstimateProvider>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-brand-ice-blue">
        <div className="container-md text-center">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
            Transparent Pricing
          </p>
          <h1 className="text-display-xl font-heading font-extrabold text-brand-charcoal mb-5 leading-tight">
            Cleaning That Fits Your Space<br />
            <span className="text-brand-pink">&amp; Your Budget.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-8">
            Explore Dream Clean Shine cleaning options, compare services, and request a personalized cleaning quote.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brand-pink text-white font-heading font-semibold px-8 py-3.5 hover:bg-[#d4206f] transition-colors shadow-sm"
          >
            Build My Cleaning Request
          </a>
        </div>
      </section>

      {/* ── Daily Rate ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-md">
          <div className="rounded-3xl bg-gradient-to-br from-brand-ice-blue to-white border border-brand-blue/20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-blue mb-2">
                Standard Daily Service Rate
              </p>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl font-heading font-extrabold text-brand-charcoal">
                  {formatPrice(DAILY_RATE.priceCents)}
                </span>
                <span className="text-slate-400 text-sm mb-2">per session</span>
              </div>
              <ul className="space-y-2">
                {DAILY_RATE.notes.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-sm text-slate-600">
                    {n.includes("Trash") ? <Trash2 size={15} className="text-brand-blue shrink-0" /> : <Clock size={15} className="text-brand-blue shrink-0" />}
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 leading-relaxed">
                ⚠ Session duration details subject to business confirmation.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <p className="text-xs text-slate-400 mb-1">Available</p>
              <p className="font-heading font-bold text-brand-charcoal">9 AM – 5 PM</p>
              <p className="text-xs text-slate-400 mt-1">Residential only</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Add-On Services ──────────────────────────────────────────────── */}
      <section className="section-pad bg-brand-ice-blue" id="services">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Cleaning Options"
              heading={"Choose Your Tier"}
              sub="Select Light Sleeper for a thorough clean or Heavy Dreamer for deluxe deep cleaning."
            />
            <TierSelector />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_ADDONS.map((addon) => (
              <ServiceAddonCard key={addon.id} addon={addon} />
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-400 italic text-center">
            Tap a service to add it to your quote request. Quantities can be adjusted after selection.
          </p>
        </div>
      </section>

      {/* ── Packages + Summary ───────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="packages">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Cleaning Packages"
                heading={"Dream. Clean. Shine."}
                sub="Recurring cleaning packages — Deluxe Style. Select one to include in your quote request."
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-2">
                {PACKAGES.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
              <p className="mt-4 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 leading-relaxed">
                ⚠ Package billing periods (weekly / bi-weekly / monthly) are subject to business confirmation. Prices shown are as published.
              </p>
            </div>

            {/* Sticky summary */}
            <div>
              <SelectedSummary />
            </div>
          </div>
        </div>
      </section>

      {/* ── Commercial ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-brand-ice-blue" id="commercial">
        <div className="container-md">
          <SectionHeading
            eyebrow="Commercial Cleaning"
            heading={"Business Spaces,\nProfessional Results."}
            sub="Custom commercial cleaning for offices and business properties."
            center
          />
          <div className="rounded-3xl bg-brand-charcoal text-white p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Building2 size={22} className="text-brand-blue" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg">Commercial Session</p>
                  <p className="text-white/60 text-sm">Office &amp; business properties</p>
                </div>
              </div>
              <div className="flex items-end gap-4 mb-4">
                <div>
                  <span className="text-5xl font-heading font-extrabold text-brand-blue">
                    {formatPrice(COMMERCIAL.sessionPriceCents)}
                  </span>
                  <span className="text-white/50 text-sm ml-2">per session</span>
                </div>
                <div className="text-white/60 text-sm pb-1">
                  + {formatPrice(COMMERCIAL.additionalHourlyPriceCents)}/hr additional
                </div>
              </div>
              <p className="text-xs text-amber-300 bg-white/5 border border-amber-400/30 rounded-xl px-3 py-2 leading-relaxed">
                ⚠ {COMMERCIAL.needsConfirmation}
              </p>
            </div>
            <div className="shrink-0 text-center">
              <p className="text-white/60 text-sm mb-3">For an accurate commercial quote</p>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="flex items-center gap-2 rounded-full bg-brand-pink text-white font-heading font-semibold px-6 py-3 hover:bg-[#d4206f] transition-colors"
              >
                <Phone size={16} /> Call Us
              </a>
              <a
                href="/quote"
                className="mt-3 block text-sm text-white/60 hover:text-white transition-colors underline underline-offset-2"
              >
                Or request online →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="container-md text-center">
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
            All prices shown are published rates. Final pricing is subject to confirmation based on your specific cleaning needs, property size, and service requirements.
            This page is a development preview — quote requests are not processed in preview mode.
          </p>
        </div>
      </section>
    </EstimateProvider>
  );
}
