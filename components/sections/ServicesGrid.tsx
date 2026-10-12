import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingBubbles from "@/components/sections/FloatingBubbles";

export default function ServicesGrid() {
  return (
    <section id="services" className="relative section-pad bg-brand-ice-blue overflow-hidden" aria-label="Our services">
      <FloatingBubbles count={15} />
      <div className="container-xl">
        <SectionHeading
          eyebrow="What We Offer"
          heading="Thoughtful Cleaning for Every Space."
          sub="Five dedicated services designed around the spaces and schedules that matter to you."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
