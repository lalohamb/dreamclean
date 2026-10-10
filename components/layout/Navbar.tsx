"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight, Sparkles } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import FacebookIcon from "@/components/ui/FacebookIcon";

// Hash links (e.g. "/#services") point at homepage sections, so they never show as active.
function isActive(href: string, pathname: string) {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const menuTab = open ? undefined : -1;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_4px_24px_-8px_rgba(38,52,69,0.18)]" : ""
      }`}
    >
      {/* Brand accent stripe */}
      <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue" aria-hidden="true" />

      <nav className="container-xl flex items-center justify-between gap-4 h-[76px] lg:h-[96px]" aria-label="Main navigation">
        {/* Logo — the supplied artwork already contains the wordmark, so no extra text */}
        <Link
          href="/"
          className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
          aria-label={`${BUSINESS.name} home`}
        >
          <Image
            src="/logo-header.png"
            alt={`${BUSINESS.name} logo`}
            width={383}
            height={240}
            className="h-[66px] w-auto lg:h-[84px]"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 rounded-full bg-brand-ice-blue p-1.5" role="list">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 font-heading text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink ${
                    active
                      ? "bg-white text-brand-pink shadow-sm"
                      : "text-brand-charcoal/75 hover:bg-white/70 hover:text-brand-pink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
            aria-label={`Call us today at ${BUSINESS.phone}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft-pink text-brand-pink transition-colors group-hover:bg-brand-pink group-hover:text-white">
              <Phone size={17} />
            </span>
            <span className="hidden xl:flex flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Call us today</span>
              <span className="font-heading font-bold text-brand-charcoal transition-colors group-hover:text-brand-pink">
                {BUSINESS.phone}
              </span>
            </span>
          </a>
          <Button href="/quote" size="sm" className="py-2.5">
            <Sparkles size={15} aria-hidden="true" />
            Get a Quote
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={BUSINESS.phoneHref}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft-pink text-brand-pink"
            aria-label={`Call us at ${BUSINESS.phone}`}
          >
            <Phone size={19} />
          </a>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ice-blue text-brand-charcoal transition-colors hover:text-brand-pink"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-y-auto bg-white transition-[height] duration-300 ease-smooth ${
          open ? "h-[calc(100dvh-80px)]" : "h-0"
        }`}
      >
        <div className="border-t border-slate-100 px-5 pb-8 pt-3">
          <ul role="list" className="divide-y divide-slate-100">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    tabIndex={menuTab}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-heading text-lg font-semibold transition-colors ${
                      active ? "text-brand-pink" : "text-brand-charcoal hover:text-brand-pink"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={18} className="text-brand-blue" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-3xl bg-brand-ice-blue p-5">
            <p className="font-heading font-bold text-brand-charcoal">{BUSINESS.tagline}</p>
            <p className="mt-1 text-sm text-slate-600">Serving {BUSINESS.location}</p>
            <div className="mt-4 space-y-3">
              <Link
                href="/quote"
                onClick={close}
                tabIndex={menuTab}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-pink px-7 py-3 font-heading font-semibold text-white shadow-sm transition-colors hover:bg-[#d4206f]"
              >
                <Sparkles size={16} aria-hidden="true" />
                Get a Cleaning Quote
              </Link>
              <a
                href={BUSINESS.phoneHref}
                tabIndex={menuTab}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-heading font-semibold text-brand-charcoal shadow-sm transition-colors hover:text-brand-pink"
              >
                <Phone size={16} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </div>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuTab}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-pink"
            >
              <FacebookIcon size={15} /> Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
