"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitQuote, type FormState } from "./actions";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";

const initial: FormState = { status: "idle", message: "" };

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-xs text-red-500">{errors[0]}</p>;
}

function inputCls(hasError?: boolean) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition ${
    hasError ? "border-red-400 focus:ring-red-300" : "border-slate-200 focus:border-brand-blue"
  }`;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-pink text-white font-heading font-semibold text-base hover:bg-[#d4206f] transition-colors disabled:opacity-60 disabled:pointer-events-none"
    >
      {pending ? (
        <><Loader2 size={18} className="animate-spin" /> Sending…</>
      ) : (
        "Submit Quote Request"
      )}
    </button>
  );
}

export default function QuoteForm({ preselect }: { preselect?: string }) {
  const [state, action] = useFormState(submitQuote, initial);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status !== "idle") {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div ref={topRef} className="bg-white rounded-3xl shadow-card p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-brand-charcoal mb-3">
          Request Received!
        </h2>
        <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We'll review your request and be in touch shortly.
        </p>
      </div>
    );
  }

  const fe = state.fieldErrors ?? {};

  return (
    <div ref={topRef}>
      {state.status === "error" && !Object.keys(fe).length && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
          {state.message}
        </div>
      )}

      <form action={action} noValidate className="bg-white rounded-3xl shadow-card p-8 space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Full Name <span className="text-brand-pink">*</span>
            </label>
            <input id="fullName" name="fullName" type="text" autoComplete="name" placeholder="Jane Smith" className={inputCls(!!fe.fullName)} aria-describedby={fe.fullName ? "fullName-err" : undefined} />
            <FieldError errors={fe.fullName} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Email Address <span className="text-brand-pink">*</span>
            </label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" className={inputCls(!!fe.email)} />
            <FieldError errors={fe.email} />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
            Phone Number <span className="text-brand-pink">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" className={inputCls(!!fe.phone)} />
          <FieldError errors={fe.phone} />
        </div>

        {/* Service + Property type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Service Needed <span className="text-brand-pink">*</span>
            </label>
            <select id="service" name="service" defaultValue={preselect ?? ""} className={inputCls(!!fe.service)}>
              <option value="" disabled>Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </select>
            <FieldError errors={fe.service} />
          </div>
          <div>
            <label htmlFor="propertyType" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Property Type <span className="text-brand-pink">*</span>
            </label>
            <select id="propertyType" name="propertyType" defaultValue="" className={inputCls(!!fe.propertyType)}>
              <option value="" disabled>Select…</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
            <FieldError errors={fe.propertyType} />
          </div>
        </div>

        {/* City + Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              City / Location <span className="text-brand-pink">*</span>
            </label>
            <input id="city" name="city" type="text" placeholder="Michigan City, IN" className={inputCls(!!fe.city)} />
            <FieldError errors={fe.city} />
          </div>
          <div>
            <label htmlFor="propertySize" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Approx. Property Size
            </label>
            <select id="propertySize" name="propertySize" defaultValue="" className={inputCls()}>
              <option value="">Not sure / prefer not to say</option>
              <option value="under-1000">Under 1,000 sq ft</option>
              <option value="1000-1500">1,000 – 1,500 sq ft</option>
              <option value="1500-2500">1,500 – 2,500 sq ft</option>
              <option value="2500-4000">2,500 – 4,000 sq ft</option>
              <option value="over-4000">Over 4,000 sq ft</option>
            </select>
          </div>
        </div>

        {/* Bedrooms + Bathrooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Bedrooms
            </label>
            <select id="bedrooms" name="bedrooms" defaultValue="" className={inputCls()}>
              <option value="">Select…</option>
              {["Studio","1","2","3","4","5","6+"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="bathrooms" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Bathrooms
            </label>
            <select id="bathrooms" name="bathrooms" defaultValue="" className={inputCls()}>
              <option value="">Select…</option>
              {["1","1.5","2","2.5","3","3.5","4+"].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>

        {/* Date + Frequency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              Preferred Date
            </label>
            <input id="preferredDate" name="preferredDate" type="date" className={inputCls()} />
          </div>
          <div>
            <label htmlFor="frequency" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
              One-Time or Recurring?
            </label>
            <select id="frequency" name="frequency" defaultValue="" className={inputCls()}>
              <option value="">Select…</option>
              <option value="one-time">One-Time</option>
              <option value="recurring">Recurring</option>
              <option value="unsure">Not Sure Yet</option>
            </select>
          </div>
        </div>

        {/* Priorities */}
        <div>
          <label htmlFor="priorities" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
            Cleaning Priorities
          </label>
          <input id="priorities" name="priorities" type="text" placeholder="e.g. Kitchen, bathrooms, pet hair…" className={inputCls()} />
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-semibold text-brand-charcoal mb-1.5">
            Additional Comments
          </label>
          <textarea id="comments" name="comments" rows={4} placeholder="Anything else we should know about your space or needs…" className={`${inputCls()} resize-none`} />
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" name="consent" value="true" className="mt-1 accent-brand-pink" />
            <span className="text-sm text-slate-500 leading-relaxed">
              I understand that submitting this form is a quote request, not a confirmed booking.
              Dream Clean Shine will contact me to discuss my needs.
            </span>
          </label>
          <FieldError errors={fe.consent} />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
