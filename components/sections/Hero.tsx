"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import FloatingBubbles from "@/components/sections/FloatingBubbles";
import { useState, useEffect } from "react";

const PHOTOS = [
  "/193576351_111199977835788_7236715514882148363_n.jpg",
  "/468358154_874160801539698_8034201561199308748_n.jpg",
  "/470212576_885972083691903_333170140043904055_n.jpg",
  "/471151824_886242170347736_2320801605946304729_n.jpg",
  "/471173982_890856676536777_8821864839160866793_n.jpg",
  "/472751969_903655438590234_3423601555640289586_n.jpg",
  "/473095822_903047578651020_2986316074479866709_n.jpg",
  "/473283654_903655311923580_8459094752069935572_n.jpg",
  "/473885044_909622591326852_9069517055179618664_n.jpg",
  "/558358670_10172804311715486_539484865623809195_n.jpg",
  "/white-kitchen-ushaped.jpg",
];

export default function Hero() {
  const shuffled = useState(() => [...PHOTOS].sort(() => Math.random() - 0.5))[0];
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % shuffled.length);
        setNext((n) => (n + 1) % shuffled.length);
        setFading(false);
      }, 600);
    }, 4000);
    return () => clearInterval(id);
  }, [shuffled.length]);

  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-brand-ice-blue overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background image — right half only on lg+ */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
        {/* Outgoing image — stays fully visible underneath */}
        <Image
          src={shuffled[current]}
          alt="Dream Clean Shine — professional cleaning"
          fill
          priority
          sizes="(max-width:1024px) 100vw, 55vw"
          className="object-cover object-top"
        />
        {/* Incoming image — fades in on top */}
        <Image
          src={shuffled[next]}
          alt=""
          fill
          sizes="(max-width:1024px) 100vw, 55vw"
          className="object-cover object-top"
          style={{ opacity: fading ? 1 : 0, transition: "opacity 0.6s ease" }}
        />
        {/* Mobile: solid cover; desktop: gradient fade left→transparent */}
        <div className="absolute inset-0 bg-brand-ice-blue lg:[background:linear-gradient(to_right,#EFF8FF_0%,rgba(239,248,255,0.65)_45%,transparent_100%)]" />
      </div>

      {/* Floating suds */}
      <FloatingBubbles count={70} />

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
