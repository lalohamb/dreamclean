"use client";
import { useState } from "react";
import {
  SERVICE_CATEGORIES, ADD_ONS, DEPOSIT_POLICY,
  CANCELLATION_POLICY, CONSULTATION_TYPES,
} from "@/lib/pricing";
import { EstimateProvider } from "./EstimateContext";
import { CategoryTabs, TierCard, AddOnCard, SelectedSummary } from "./PricingComponents";
import { Video, Building2, AlertCircle, CalendarCheck, XCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const CONSULT_ICONS: Record<string, React.ElementType> = { Video, Building2 };

const CATEGORY_ACCENT: Record<string, "blue" | "pink"> = {
  residential: "blue",
  commercial:  "pink",
  offices:     "blue",
  organization:"pink",
};

function ServiceSection() {
  const [activeCategory, setActiveCategory] = useState("residential");
  const category = SERVICE_CATEGORIES.find((c) => c.id === activeCategory)!;
  const accent = CATEGORY_ACCENT[activeCategory];

  return (
    <section className="section-pad bg-brand-ice-blue" id="services">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Services"
          heading={"Choose Your Service\n& Cleaning Tier"}
          sub="Select a service category, then pick the tier that fits your space and budget."
          center
        />

        <div className="mb-10">
          <CategoryTabs
            categories={SERVICE_CATEGORIES}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {category.tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} categoryId={category.id} accent={accent} />
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-400 italic text-center">
          All prices are starting rates. Final pricing depends on property size, condition, and scope of work.
        </p>
      </div>
    </section>
  );
}

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
            Explore Dream Clean Shine cleaning options, compare service tiers, and request a personalized quote.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brand-pink text-white font-heading font-semibold px-8 py-3.5 hover:bg-[#d4206f] transition-colors shadow-sm"
          >
            Explore Services & Pricing
          </a>
        </div>
      </section>

      {/* ── Service Categories & Tiers ───────────────────────────────────── */}
      <ServiceSection />

      {/* ── Add-Ons + Summary ────────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="addons">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Add-On Services"
                heading={"Customize Your Clean"}
                sub="Select any extras to include in your quote request."
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {ADD_ONS.map((addOn) => (
                  <AddOnCard key={addOn.id} addOn={addOn} />
                ))}
              </div>
            </div>
            <div>
              <SelectedSummary />
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation Process ─────────────────────────────────────────── */}
      <section className="section-pad bg-brand-ice-blue" id="consultation">
        <div className="container-xl">
          <SectionHeading
            eyebrow="How to Get Started"
            heading={"Every Quote Starts\nWith a Conversation"}
            sub="We take the time to understand your space before providing a quote."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSULTATION_TYPES.map((ct) => {
              const Icon = CONSULT_ICONS[ct.icon] ?? Video;
              return (
                <div key={ct.id} className="bg-white rounded-3xl p-8 shadow-card flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-soft-pink flex items-center justify-center">
                    <Icon size={22} className="text-brand-pink" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-1">{ct.method}</p>
                    <h3 className="font-heading font-bold text-xl text-brand-charcoal mb-3">{ct.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{ct.description}</p>
                  </div>
                  <a
                    href="/quote"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-pink text-brand-pink font-heading font-semibold px-6 py-2.5 text-sm hover:bg-brand-soft-pink transition-colors"
                  >
                    {ct.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Deposit & Cancellation Policy ────────────────────────────────── */}
      <section className="section-pad bg-white" id="policy">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Booking Policies"
            heading={"Deposits &\nCancellations"}
            sub="Clear, fair policies so you always know what to expect."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Deposit */}
            <div className="bg-brand-ice-blue rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <CalendarCheck size={20} className="text-brand-blue" />
                </div>
                <h3 className="font-heading font-bold text-brand-charcoal text-lg">Deposit Requirements</h3>
              </div>
              <ul className="space-y-3">
                {DEPOSIT_POLICY.notes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <AlertCircle size={14} className="text-brand-blue shrink-0 mt-0.5" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation */}
            <div className="bg-brand-soft-pink/40 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center">
                  <XCircle size={20} className="text-brand-pink" />
                </div>
                <h3 className="font-heading font-bold text-brand-charcoal text-lg">Cancellation & Rescheduling</h3>
              </div>
              <ul className="space-y-3">
                {CANCELLATION_POLICY.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <AlertCircle size={14} className="text-brand-pink shrink-0 mt-0.5" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────────────────── */}
      <section className="py-10 bg-brand-ice-blue border-t border-slate-100">
        <div className="container-md text-center">
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
            All prices shown are starting rates. Final pricing depends on property size, condition, frequency, and requested services.
            Contact us at <a href={BUSINESS.phoneHref} className="underline hover:text-brand-pink transition-colors">{BUSINESS.phone}</a> or{" "}
            <a href="/quote" className="underline hover:text-brand-pink transition-colors">request a quote online</a>.
          </p>
        </div>
      </section>
    </EstimateProvider>
  );
}
