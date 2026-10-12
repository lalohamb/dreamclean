import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Clock, Smile, Leaf, Home } from "lucide-react";
import FloatingBubbles from "@/components/sections/FloatingBubbles";

const points = [
  { icon: Clock,  text: "More personal time for the things you love" },
  { icon: Smile,  text: "A comfortable, welcoming environment every day" },
  { icon: Leaf,   text: "Less cleaning stress on your schedule" },
  { icon: Home,   text: "A home or workplace you're proud to share" },
];

export default function ValueProp() {
  return (
    <section className="relative section-pad bg-white overflow-hidden" aria-label="Value proposition">
      <FloatingBubbles count={15} />
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-card-hover order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80"
              alt="Bright, organized modern kitchen — development placeholder image"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Floating accent card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
              <p className="text-sm font-heading font-bold text-brand-charcoal">
                "Your time is valuable. Let us handle the cleaning."
              </p>
              <p className="text-xs text-slate-400 mt-1">— Dream Clean Shine</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Dream Clean Difference"
              heading="Your Time Is Valuable. Your Space Should Feel Wonderful."
              sub="Professional cleaning isn't just about a tidy room — it's about giving you back your time and the comfort of a space that feels genuinely cared for."
            />
            <ul className="space-y-4 mb-8" role="list">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-brand-soft-pink flex items-center justify-center">
                    <Icon size={17} className="text-brand-pink" />
                  </span>
                  <span className="text-slate-600 leading-relaxed pt-1">{text}</span>
                </li>
              ))}
            </ul>
            <Button href="/quote" size="lg">Request a Cleaning Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
