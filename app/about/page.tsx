import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Image from "next/image";
import FinalCTA from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/metadata";
import { Heart, Shield, Star, Users, Cross } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet JoJo, owner of Dream Clean Shine LLC — a faith-driven, family-owned cleaning service in Michigan City, Indiana. Learn about our vision, values, and commitment to every space we clean.",
  path: "/about",
});

const values = [
  { icon: Heart,  title: "Family-Owned",           desc: "We bring the same care to your space that we'd give our own home." },
  { icon: Cross,  title: "Faith & Integrity",       desc: "Our faith inspires us to serve with integrity, excellence, and care." },
  { icon: Shield, title: "Respect for Your Space",  desc: "Your property is treated with care, discretion, and professionalism." },
  { icon: Star,   title: "Attention to Detail",     desc: "We focus on the details that make a space feel genuinely clean." },
  { icon: Users,  title: "Customer-First",          desc: "Your priorities guide every cleaning visit." },
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
            A faith-driven, family-owned cleaning service based in Michigan City, Indiana —
            transforming spaces and serving others with excellence.
          </p>
        </div>
      </section>

      {/* Meet JoJo */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/558358670_10172804311715486_539484865623809195_n.jpg"
                alt="JoJo — owner of Dream Clean Shine LLC"
                width={1366}
                height={2048}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="w-full h-auto object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-pink mb-3">
                Meet the Owner
              </p>
              <h2 className="text-display-md font-heading font-extrabold text-brand-charcoal mb-5">
                Hi, I'm JoJo.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                I'm the owner of Dream Clean Shine LLC! I'm passionate about transforming spaces,
                bringing peace, and serving others with excellence. For me, it's more than cleaning —
                it's making a difference, one space at a time.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                Dream Clean Shine was founded on a straightforward belief: every home and workplace
                deserves to feel genuinely clean, not just presentable. When we walk into your space,
                we bring the same attention and care we'd give our own.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We serve Michigan City, Northwest Indiana, and select Chicagoland areas — and we're
                proud to be part of the communities we clean.
              </p>
              <Button href="/quote" size="md">Request a Cleaning Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-pad bg-brand-charcoal">
        <div className="container-md text-center">
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Our Vision
          </p>
          <h2 className="text-display-md font-heading font-extrabold text-white mb-6 leading-tight">
            Transforming Every Space<br />
            <span className="text-brand-pink">We're Trusted With.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-6">
            At Dream Clean Shine LLC, our vision is to transform every space we're trusted with,
            bringing peace, comfort, and a renewed sense of joy to every home and business we touch.
          </p>
          <p className="text-base text-white/50 leading-relaxed max-w-xl mx-auto italic">
            "Our faith inspires us to serve with integrity, excellence, and care. We believe in
            honoring God through our work and treating every client and space with respect."
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* Sign-off */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="container-md text-center">
          <p className="font-heading font-bold text-brand-charcoal text-lg">
            Dream Clean Shine LLC —{" "}
            <span className="text-brand-pink">Where Clean Meets Shine!</span>
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
