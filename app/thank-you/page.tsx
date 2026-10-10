import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Quote Request Received",
  description: "Your cleaning quote request has been received by Dream Clean Shine.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-ice-blue px-5 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-card">
          <CheckCircle2 size={40} className="text-brand-pink" />
        </div>
        <h1 className="text-display-lg font-heading font-extrabold text-brand-charcoal mb-4">
          Request Received!
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-8">
          Thank you for reaching out to Dream Clean Shine. We've received your quote request
          and will be in touch shortly to discuss your needs.
        </p>
        <p className="text-sm text-slate-400 mb-8">
          Prefer to talk now?{" "}
          <a href={BUSINESS.phoneHref} className="text-brand-pink font-semibold hover:underline">
            Call us at {BUSINESS.phone}
          </a>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="outline" size="md">Back to Home</Button>
          <Button href="/services/residential-cleaning" size="md">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
