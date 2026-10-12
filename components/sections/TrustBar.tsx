import { Heart, Star, Shield, Clock, Users, Sparkles } from "lucide-react";
import FloatingBubbles from "@/components/sections/FloatingBubbles";

const items = [
  { icon: Heart,    label: "Family-Owned Business",           desc: "Personal investment in every job." },
  { icon: Star,     label: "Personalized Cleaning",           desc: "Tailored to your space and priorities." },
  { icon: Shield,   label: "Respect for Your Property",       desc: "We treat your home like our own." },
  { icon: Sparkles, label: "Attention to Detail",             desc: "The small things make the difference." },
  { icon: Clock,    label: "Convenient Inquiries",            desc: "Easy quote requests, fast responses." },
  { icon: Users,    label: "Customer-Focused Service",        desc: "Your satisfaction guides everything we do." },
];

export default function TrustBar() {
  return (
    <section
      id="why-us"
      className="relative section-pad bg-white border-y border-slate-100 overflow-hidden"
      aria-label="Why choose Dream Clean Shine"
    >
      <FloatingBubbles count={15} />
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
            Why Choose Us
          </p>
          <h2 className="text-display-lg font-heading font-extrabold text-brand-charcoal">
            Cleaning With Care.<br />Results You Can Appreciate.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dream Clean Shine is a family-owned cleaning service built on a simple belief: every
            space deserves thoughtful, personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex gap-4 p-6 rounded-2xl bg-brand-ice-blue hover:bg-brand-soft-pink/40 transition-colors duration-300 group"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-pink transition-colors duration-300">
                <Icon size={20} className="text-brand-pink group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-brand-charcoal mb-1">{label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
