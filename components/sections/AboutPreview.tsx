import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white" aria-label="About Dream Clean Shine">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Content */}
          <div>
            <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
              About Us
            </p>
            <h2 className="text-display-lg font-heading font-extrabold text-brand-charcoal mb-5 leading-tight">
              Family-Owned.<br />Personally Invested.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Dream Clean Shine is a family-owned cleaning service based in Michigan City, Indiana.
              We started this business because we believe every home and workplace deserves to feel
              genuinely clean — not just surface-level tidy.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              When we clean your space, we bring the same care and attention we'd give our own home.
              That personal investment is what sets us apart, and it's something you'll notice from
              the very first visit.
            </p>
            <Button href="/about" variant="outline" size="md">
              Meet Dream Clean Shine <ArrowRight size={16} />
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-card-hover">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
              alt="Clean, welcoming home interior — development placeholder image"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
