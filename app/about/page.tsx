import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/metadata";
import { Heart, Shield, Star, Users } from "lucide-react";
import RandomPhoto from "@/components/ui/RandomPhoto";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Dream Clean Shine is a family-owned cleaning service in Michigan City, Indiana. Learn about our values, our approach, and our commitment to every space we clean.",
  path: "/about",
});

const values = [
  { icon: Heart,  title: "Family-Owned",          desc: "We bring the same care to your space that we'd give our own home." },
  { icon: Shield, title: "Respect for Your Space", desc: "Your property is treated with care, discretion, and professionalism." },
  { icon: Star,   title: "Attention to Detail",    desc: "We focus on the details that make a space feel genuinely clean." },
  { icon: Users,  title: "Customer-First",         desc: "Your priorities guide every cleaning visit." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-ice-blue">
        <div className="container-md text-center">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
            About Dream Clean Shine
          </p>
          <h1 className="text-display-xl font-heading font-extrabold text-brand-charcoal mb-6 leading-tight">
            More Than Clean.<br />
            <span className="text-brand-pink">It's the Care Behind Every Detail.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We're a family-owned cleaning service based in Michigan City, Indiana — and we take
            genuine pride in every space we clean.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-card-hover">
              <RandomPhoto />
            </div>
            <div>
              <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-5">
                Who We Are
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Dream Clean Shine was founded on a straightforward belief: every home and workplace
                deserves to feel genuinely clean, not just presentable. We're a family-owned business,
                and that means something to us. When we walk into your space, we bring the same
                attention and care we'd give our own.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                Our mission is to help families and businesses enjoy cleaner, more comfortable spaces
                through thoughtful cleaning services, attention to detail, and professional care.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We serve Michigan City, Indiana and surrounding communities, and we're proud to be
                part of the neighborhoods we clean.
              </p>
              <Button href="/quote" size="md">Request a Cleaning Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-brand-ice-blue">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
              Our Values
            </p>
            <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-card text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-soft-pink flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-brand-pink" />
                </div>
                <h3 className="font-heading font-bold text-brand-charcoal mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner photo placeholder */}
      <section className="section-pad bg-white">
        <div className="container-md text-center">
          <div className="bg-brand-ice-blue rounded-3xl p-10 border border-brand-blue/20">
            <div className="w-24 h-24 rounded-full bg-brand-soft-pink mx-auto mb-5 flex items-center justify-center">
              <Users size={36} className="text-brand-pink" />
            </div>
            <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-3">
              Meet the Team
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-2">
              We'd love to introduce ourselves properly. A personal photo and story from the
              Dream Clean Shine team will be added here soon.
            </p>
            <p className="text-xs text-slate-400 italic">
              [Owner photo and biography — pending business submission]
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
