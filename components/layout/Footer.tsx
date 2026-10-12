import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import FacebookIcon from "@/components/ui/FacebookIcon";
import { BUSINESS, SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Dream Clean Shine home">
              <Image src="/logo.png" alt="Dream Clean Shine logo" width={52} height={52} className="rounded-full" />
              <span className="font-heading font-bold text-lg leading-tight">
                Dream Clean<br />
                <span className="text-brand-blue text-sm font-semibold">Shine</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {BUSINESS.tagline}<br />
              Family-owned cleaning services in {BUSINESS.location}.
            </p>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-white transition-colors"
              aria-label="Dream Clean Shine on Facebook"
            >
              <FacebookIcon size={16} /> Follow us on Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-sm text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2" role="list">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  aria-label={`Call ${BUSINESS.phone}`}
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                {/* [NEEDS BUSINESS CONFIRMATION] Exact address/service area */}
                {BUSINESS.serviceArea}
              </li>
            </ul>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-full bg-brand-pink text-white text-sm font-semibold hover:bg-[#d4206f] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS.name} LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
