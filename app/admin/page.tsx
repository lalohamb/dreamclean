"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarCheck, Mail, BarChart2, CreditCard, Search,
  Save, CheckCircle2, LogOut, ChevronDown, AlertCircle, Loader2,
} from "lucide-react";

type Settings = {
  calendlyUrl: string;
  resendApiKey: string;
  resendFromEmail: string;
  quoteToEmail: string;
  mailerliteApiKey: string;
  mailerliteGroupId: string;
  googleSiteVerification: string;
  googleSearchConsoleUrl: string;
  stripePublishableKey: string;
  stripeSecretKey: string;
  stripeWebhookSecret: string;
};

const EMPTY: Settings = {
  calendlyUrl: "",
  resendApiKey: "",
  resendFromEmail: "",
  quoteToEmail: "",
  mailerliteApiKey: "",
  mailerliteGroupId: "",
  googleSiteVerification: "",
  googleSearchConsoleUrl: "",
  stripePublishableKey: "",
  stripeSecretKey: "",
  stripeWebhookSecret: "",
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

// ─── Section wrapper ──────────────────────────────────────────────────────

function Section({
  icon, title, description, color, children, defaultOpen = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading font-bold text-brand-charcoal text-sm">{title}</p>
          <p className="text-xs text-slate-400 truncate">{description}</p>
        </div>
        <ChevronDown
          size={16}
          className={`text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-5 space-y-4 border-t border-slate-100 pt-4">{children}</div>}
    </div>
  );
}

// ─── Field ────────────────────────────────────────────────────────────────

function Field({
  label, hint, id, type = "text", value, onChange, placeholder,
}: {
  label: string; hint?: string; id: string; type?: string;
  value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-brand-charcoal mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono"
      />
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────

function StatusBadge({ value, label }: { value: string; label: string }) {
  const filled = value && value !== "••••••••";
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
      filled ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-400"
    }`}>
      {filled ? <CheckCircle2 size={11} /> : <AlertCircle size={11} />}
      {filled ? `${label} set` : `${label} missing`}
    </span>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const router = useRouter();
  const [form, setForm] = useState<Settings>(EMPTY);
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((d) => { setForm((f) => ({ ...f, ...d })); setLoading(false); });
  }, []);

  function set(key: keyof Settings) {
    return (v: string) => setForm((f) => ({ ...f, [key]: v }));
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setError("");
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const updated = await res.json();
      setForm((f) => ({ ...f, ...updated }));
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      const d = await res.json();
      setError(d.error ?? "Failed to save.");
      setStatus("error");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-ice-blue flex items-center justify-center">
        <Loader2 size={28} className="animate-spin text-brand-pink" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-ice-blue p-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-heading font-extrabold text-brand-charcoal text-2xl">Admin Dashboard</h1>
            <p className="text-xs text-slate-400 mt-0.5">Dream Clean Shine</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-pink transition-colors"
          >
            <LogOut size={13} /> Logout
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-3">

          {/* Calendly */}
          <Section
            icon={<CalendarCheck size={18} className="text-brand-pink" />}
            title="Calendly"
            description="Booking URL shown on the pricing page"
            color="bg-brand-soft-pink"
            defaultOpen
          >
            <StatusBadge value={form.calendlyUrl} label="URL" />
            <Field
              id="calendlyUrl" label="Booking URL"
              hint="Must start with https://calendly.com/"
              value={form.calendlyUrl} onChange={set("calendlyUrl")}
              placeholder="https://calendly.com/your-link"
            />
          </Section>

          {/* Resend */}
          <Section
            icon={<Mail size={18} className="text-brand-blue" />}
            title="Resend — Email"
            description="Transactional email for quote form submissions"
            color="bg-brand-ice-blue"
          >
            <div className="flex gap-2 flex-wrap">
              <StatusBadge value={form.resendApiKey} label="API key" />
              <StatusBadge value={form.quoteToEmail} label="To email" />
            </div>
            <Field
              id="resendApiKey" label="Resend API Key" type="password"
              hint="Obtain from resend.com → API Keys"
              value={form.resendApiKey} onChange={set("resendApiKey")}
              placeholder="re_xxxxxxxxxxxx"
            />
            <Field
              id="resendFromEmail" label="From Email"
              hint="Must be a verified domain in Resend"
              value={form.resendFromEmail} onChange={set("resendFromEmail")}
              placeholder="hello@dreamcleanshine.com"
            />
            <Field
              id="quoteToEmail" label="Quote Destination Email"
              hint="Where quote requests are delivered"
              value={form.quoteToEmail} onChange={set("quoteToEmail")}
              placeholder="owner@dreamcleanshine.com"
            />
          </Section>

          {/* MailerLite */}
          <Section
            icon={<Mail size={18} className="text-purple-500" />}
            title="MailerLite — Email Marketing"
            description="Newsletter and subscriber list management"
            color="bg-purple-50"
          >
            <div className="flex gap-2 flex-wrap">
              <StatusBadge value={form.mailerliteApiKey} label="API key" />
              <StatusBadge value={form.mailerliteGroupId} label="Group ID" />
            </div>
            <Field
              id="mailerliteApiKey" label="MailerLite API Key" type="password"
              hint="Obtain from MailerLite → Integrations → API"
              value={form.mailerliteApiKey} onChange={set("mailerliteApiKey")}
              placeholder="eyJ0eXAiOiJKV1Qi..."
            />
            <Field
              id="mailerliteGroupId" label="Subscriber Group ID"
              hint="The group new subscribers are added to"
              value={form.mailerliteGroupId} onChange={set("mailerliteGroupId")}
              placeholder="123456789"
            />
          </Section>

          {/* Google SEO */}
          <Section
            icon={<Search size={18} className="text-blue-500" />}
            title="Google — SEO & Search Console"
            description="Site verification and Search Console integration"
            color="bg-blue-50"
          >
            <div className="flex gap-2 flex-wrap">
              <StatusBadge value={form.googleSiteVerification} label="Verification" />
              <StatusBadge value={form.googleSearchConsoleUrl} label="Console URL" />
            </div>
            <Field
              id="googleSiteVerification" label="Google Site Verification Token"
              hint="From Google Search Console → Verify → HTML tag method"
              value={form.googleSiteVerification} onChange={set("googleSiteVerification")}
              placeholder="google-site-verification=xxxxxxxx"
            />
            <Field
              id="googleSearchConsoleUrl" label="Search Console Property URL"
              hint="The property URL registered in Google Search Console"
              value={form.googleSearchConsoleUrl} onChange={set("googleSearchConsoleUrl")}
              placeholder="https://dreamcleanshine.com"
            />
            {form.googleSiteVerification && (
              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-500 font-mono break-all">
                {`<meta name="google-site-verification" content="${form.googleSiteVerification}" />`}
              </div>
            )}
          </Section>

          {/* Stripe */}
          <Section
            icon={<CreditCard size={18} className="text-indigo-500" />}
            title="Stripe — Payments"
            description="Deposit collection and payment processing"
            color="bg-indigo-50"
          >
            <div className="flex gap-2 flex-wrap">
              <StatusBadge value={form.stripePublishableKey} label="Publishable key" />
              <StatusBadge value={form.stripeSecretKey} label="Secret key" />
              <StatusBadge value={form.stripeWebhookSecret} label="Webhook secret" />
            </div>
            <Field
              id="stripePublishableKey" label="Publishable Key"
              hint="Safe to expose — used on the client side"
              value={form.stripePublishableKey} onChange={set("stripePublishableKey")}
              placeholder="pk_live_xxxxxxxxxxxx"
            />
            <Field
              id="stripeSecretKey" label="Secret Key" type="password"
              hint="Never expose this publicly — server side only"
              value={form.stripeSecretKey} onChange={set("stripeSecretKey")}
              placeholder="sk_live_xxxxxxxxxxxx"
            />
            <Field
              id="stripeWebhookSecret" label="Webhook Signing Secret" type="password"
              hint="From Stripe Dashboard → Webhooks → your endpoint"
              value={form.stripeWebhookSecret} onChange={set("stripeWebhookSecret")}
              placeholder="whsec_xxxxxxxxxxxx"
            />
          </Section>

          {/* Analytics placeholder */}
          <Section
            icon={<BarChart2 size={18} className="text-orange-500" />}
            title="Google Analytics"
            description="Coming soon — GA4 measurement ID"
            color="bg-orange-50"
          >
            <p className="text-xs text-slate-400 italic">GA4 integration coming in a future update.</p>
          </Section>

          {/* Save */}
          {error && (
            <p className="text-sm text-red-500 flex items-center gap-1.5">
              <AlertCircle size={14} /> {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "saving"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink text-white font-heading font-semibold py-3.5 text-sm hover:bg-[#d4206f] transition-colors disabled:opacity-60 shadow-sm"
          >
            {status === "saved" ? (
              <><CheckCircle2 size={16} /> All Settings Saved!</>
            ) : status === "saving" ? (
              <><Loader2 size={16} className="animate-spin" /> Saving…</>
            ) : (
              <><Save size={16} /> Save All Settings</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
