import type { Metadata } from "next";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Dream Clean Shine's cleaning services in Michigan City, Indiana — pricing, scheduling, supplies, and more.",
  path: "/faq",
  keywords: ["cleaning FAQ Michigan City", "cleaning service questions Indiana"],
});

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const CATEGORIES = [
  {
    label: "Services",
    color: "bg-brand-ice-blue border-brand-blue/20",
    accent: "text-brand-blue",
    dot: "bg-brand-blue",
    faqs: FAQS.filter((f) =>
      ["What services", "deep cleaning", "move-in", "organizing", "pets"].some((k) =>
        f.q.toLowerCase().includes(k.toLowerCase())
      )
    ),
  },
  {
    label: "Booking & Scheduling",
    color: "bg-brand-soft-pink/30 border-brand-pink/20",
    accent: "text-brand-pink",
    dot: "bg-brand-pink",
    faqs: FAQS.filter((f) =>
      ["book", "consult", "video", "schedule", "deposit", "cancel", "reschedul"].some((k) =>
        f.q.toLowerCase().includes(k.toLowerCase())
      )
    ),
  },
  {
    label: "Pricing & Policies",
    color: "bg-brand-ice-blue border-brand-blue/20",
    accent: "text-brand-blue",
    dot: "bg-brand-blue",
    faqs: FAQS.filter((f) =>
      ["cost", "price", "supplies", "insur", "areas", "travel", "zoom", "walkthrough", "required"].some((k) =>
        f.q.toLowerCase().includes(k.toLowerCase())
      )
    ),
  },
];

// Remaining FAQs not caught by categories
const categorized = new Set(CATEGORIES.flatMap((c) => c.faqs.map((f) => f.q)));
const OTHER = FAQS.filter((f) => !categorized.has(f.q));
if (OTHER.length) {
  CATEGORIES.push({
    label: "Other Questions",
    color: "bg-brand-soft-pink/30 border-brand-pink/20",
    accent: "text-brand-pink",
    dot: "bg-brand-pink",
    faqs: OTHER,
  });
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #70B9F5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F42D88 0%, transparent 40%)" }}
        />
        <div className="container-md text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <MessageCircle size={14} className="text-brand-pink" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Got Questions?</span>
          </div>
          <h1 className="text-display-xl font-heading font-extrabold text-white mb-5 leading-tight">
            We Have <span className="text-brand-pink">Answers.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Dream Clean Shine — services, booking, pricing, and more.
          </p>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="space-y-16">
            {CATEGORIES.filter((c) => c.faqs.length > 0).map((cat) => (
              <div key={cat.label}>
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-8">
                  <span className={`w-3 h-3 rounded-full shrink-0 ${cat.dot}`} />
                  <h2 className={`font-heading font-extrabold text-xl ${cat.accent}`}>{cat.label}</h2>
                  <div className="flex-1 h-px bg-slate-100" />
                </div>

                {/* FAQ cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cat.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className={`rounded-2xl border p-6 ${cat.color}`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${cat.accent}`} />
                        <p className="font-heading font-bold text-brand-charcoal leading-snug">{faq.q}</p>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed pl-7">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-3xl bg-brand-charcoal p-10 text-center">
            <h2 className="font-heading font-extrabold text-white text-2xl mb-3">
              Still have questions?
            </h2>
            <p className="text-white/60 mb-7 max-w-md mx-auto">
              We're happy to help. Reach out directly and we'll get back to you promptly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                Contact Us
              </Button>
              <Button href="/quote" size="md">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
