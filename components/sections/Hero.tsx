import Image from "next/image";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-brand-ice-blue overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background image — right half */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
          alt="Bright, sunlit modern living room — development placeholder image"
          fill
          priority
          sizes="(max-width:1024px) 100vw, 55vw"
          className="object-cover"
        />
        {/* Gradient overlay — fades photo into left content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ice-blue via-brand-ice-blue/80 to-transparent lg:via-brand-ice-blue/60" />
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 py-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-blue/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-brand-pink" />
            <span className="text-xs font-semibold font-heading text-brand-charcoal tracking-wide">
              Michigan City, Indiana
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display-xl font-heading font-extrabold text-brand-charcoal mb-6 leading-[1.08]">
            A Cleaner Space.<br />
            <span className="text-brand-pink">A Brighter Day.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
            From beautifully refreshed homes to welcoming workspaces, Dream Clean Shine delivers
            thoughtful cleaning services that help you enjoy the spaces that matter most.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button href="/quote" size="lg">
              Get My Cleaning Quote
            </Button>
            <Button href="/#services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Trust micro-copy */}
          <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
            <span className="inline-block w-5 h-px bg-brand-blue" />
            Family-owned · Michigan City, Indiana
          </p>
        </div>
      </div>
    </section>
  );
}
