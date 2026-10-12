import Button from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import FloatingBubbles from "@/components/sections/FloatingBubbles";

export default function FinalCTA() {
  return (
    <section
      className="section-pad bg-brand-charcoal relative overflow-hidden"
      aria-label="Get a cleaning quote"
    >
      <FloatingBubbles count={15} />
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-brand-pink/10 pointer-events-none" aria-hidden="true" />

      <div className="container-xl relative z-10 text-center">
        <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-blue mb-4">
          Ready to Get Started?
        </p>
        <h2 className="text-display-lg font-heading font-extrabold text-white mb-5 leading-tight">
          Ready to Experience the<br />
          <span className="text-brand-pink">Dream Clean Shine</span> Difference?
        </h2>
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what your space needs. We'll help you take the next step toward a cleaner,
          more comfortable environment.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/quote" size="lg">
            Request a Cleaning Quote
          </Button>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full border-2 border-white/30 text-white font-heading font-semibold text-lg hover:bg-white/10 transition-colors"
            aria-label={`Call us at ${BUSINESS.phone}`}
          >
            <Phone size={18} /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
