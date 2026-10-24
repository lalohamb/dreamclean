import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import FacebookIcon from "@/components/ui/FacebookIcon";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import FloatingBubbles from "@/components/sections/FloatingBubbles";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Dream Clean Shine in Michigan City, Indiana. Call us, message us on Facebook, or fill out our contact form to get started.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-brand-ice-blue overflow-hidden">
        <FloatingBubbles />
        <div className="container-md text-center relative z-10">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
            Get In Touch
          </p>
          <h1 className="text-display-xl font-heading font-extrabold text-brand-charcoal mb-5 leading-tight">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Have a question or ready to get started? Reach out by phone, Facebook, or the form below.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white pb-28 lg:pb-20">
        <div className="container-xl">
          <div className="max-w-lg mx-auto">

            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal">
                Contact Information
              </h2>

              <a
                href={BUSINESS.phoneHref}
                className="flex items-start gap-4 p-6 rounded-2xl bg-brand-ice-blue hover:bg-brand-soft-pink/40 transition-colors group"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Phone size={20} className="text-brand-pink" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Phone</p>
                  <p className="font-heading font-bold text-brand-charcoal group-hover:text-brand-pink transition-colors">
                    {BUSINESS.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Click to call</p>
                </div>
              </a>

              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-2xl bg-brand-ice-blue hover:bg-brand-soft-pink/40 transition-colors group"
                aria-label="Dream Clean Shine on Facebook"
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                  <FacebookIcon size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Facebook</p>
                  <p className="font-heading font-bold text-brand-charcoal group-hover:text-brand-pink transition-colors">
                    Dream Clean Shine
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Message us on Facebook</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-brand-ice-blue">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                  <MapPin size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Service Area</p>
                  {/* [NEEDS BUSINESS CONFIRMATION] Exact territory */}
                  <p className="font-heading font-bold text-brand-charcoal">{BUSINESS.serviceArea}</p>
                </div>
              </div>

              {/* Hours placeholder */}
           {/*    <div className="p-5 rounded-2xl border border-dashed border-slate-200 text-sm text-slate-400 italic">
                Business hours will be listed here once confirmed.
              </div>

              <Button href="/quote" size="lg" className="w-full sm:w-auto">
                Request a FREE Cleaning Quote
              </Button> */}
            </div>

            {/* Simple contact form — redirects to quote for full form */}
          {/*   <div className="bg-brand-ice-blue rounded-3xl p-8">
              <h2 className="text-xl font-heading font-bold text-brand-charcoal mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                For a full quote request with all the details, use our{" "}
                <a href="/quote" className="text-brand-pink font-semibold hover:underline">
                  quote form
                </a>
                . Or send us a quick message below.
              </p>
              <form className="space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-semibold text-brand-charcoal mb-1.5">Name</label>
                  <input id="c-name" name="name" type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-semibold text-brand-charcoal mb-1.5">Email</label>
                  <input id="c-email" name="email" type="email" placeholder="your@email.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-sm font-semibold text-brand-charcoal mb-1.5">Message</label>
                  <textarea id="c-msg" name="message" rows={5} placeholder="How can we help?" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none" />
                </div>
                <p className="text-xs text-slate-400 italic">
                  [Contact form submission handler — configure email provider before launch]
                </p>
                <Button href="/quote" size="md" className="w-full">
                  Use Full Quote Form Instead
                </Button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
