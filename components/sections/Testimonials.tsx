import { Star } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import FacebookIcon from "@/components/ui/FacebookIcon";

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-brand-ice-blue" id="reviews">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Facebook Reviews"
          heading={"100% Recommended\nBy Our Clients"}
          sub="Real words from real clients in Michigan City and surrounding communities."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-3xl p-7 shadow-card flex flex-col gap-4"
            >
              <StarRow />
              <p className="text-slate-600 leading-relaxed flex-1">"{r.body}"</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div>
                  <p className="font-heading font-bold text-brand-charcoal text-sm">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.date}</p>
                </div>
                <FacebookIcon size={18} className="text-brand-blue opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Facebook reviews page */}
        <div className="text-center">
          <a
            href={`${BUSINESS.facebook}/reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:text-brand-pink transition-colors"
          >
            <FacebookIcon size={16} className="text-brand-blue" />
            See all reviews on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
