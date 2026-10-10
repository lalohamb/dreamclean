import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/constants";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold text-brand-charcoal mb-2 group-hover:text-brand-pink transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {service.shortDesc}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-pink hover:gap-3 transition-all duration-200"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
