import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Dream Clean Shine's cleaning services in Michigan City, Indiana — pricing, scheduling, supplies, and more.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brand-ice-blue">
        <div className="container-md text-center">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
            FAQ
          </p>
          <h1 className="text-display-xl font-heading font-extrabold text-brand-charcoal mb-5 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Have a question? We've answered the most common ones below. Don't see yours?{" "}
            <a href="/contact" className="text-brand-pink font-semibold hover:underline">
              Contact us directly.
            </a>
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-md">
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-brand-ice-blue rounded-2xl px-6 py-5 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 font-heading font-semibold text-brand-charcoal list-none text-base">
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

          <div className="mt-14 text-center">
            <p className="text-slate-500 mb-5">Still have questions? We're happy to help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="outline" size="md">Contact Us</Button>
              <Button href="/quote" size="md">Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
