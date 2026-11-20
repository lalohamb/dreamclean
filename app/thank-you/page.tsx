import type { Metadata } from "next";
import { CheckCircle2, Video, Camera, FileText, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = buildMetadata({
  title: "Quote Request Received",
  description: "Your cleaning quote request has been received by Dream Clean Shine.",
  path: "/thank-you",
});

const STEPS = [
  {
    icon: CheckCircle2,
    color: "bg-brand-soft-pink text-brand-pink",
    title: "Request received",
    desc: "We've got your details and will reach out within 1 business day to confirm your video consultation.",
  },
  {
    icon: Video,
    color: "bg-brand-ice-blue text-brand-blue",
    title: "Join the video call",
    desc: "We'll send you a link for a free video consultation via Zoom, Google Meet, or FaceTime — whichever works best for you.",
  },
  {
    icon: Camera,
    color: "bg-brand-soft-pink text-brand-pink",
    title: "Walk us through your space",
    desc: "During the call, simply walk through your home or office on camera — room by room — so we can see exactly what needs attention and tailor our approach.",
  },
  {
    icon: FileText,
    color: "bg-brand-ice-blue text-brand-blue",
    title: "Receive your personalized quote",
    desc: "Based on what we see, we'll provide a customized quote specific to your space, priorities, and schedule.",
  },
  {
    icon: CalendarCheck,
    color: "bg-brand-soft-pink text-brand-pink",
    title: "Confirm & schedule",
    desc: "Once you approve the quote, we'll collect your deposit and lock in your first cleaning appointment.",
  },
];

export default function ThankYouPage() {
  const { calendlyUrl } = getSettings();

  return (
    <section className="min-h-screen bg-brand-ice-blue px-5 pt-28 pb-20">
      <div className="max-w-xl mx-auto">

        {/* Success mark */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-5 shadow-card">
            <CheckCircle2 size={40} className="text-brand-pink" />
          </div>
          <h1 className="text-display-lg font-heading font-extrabold text-brand-charcoal mb-3">
            Request Received!
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Thank you for reaching out to Dream Clean Shine. Here's exactly what happens next.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-10">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-heading font-bold text-brand-charcoal text-sm mb-0.5">
                    <span className="text-brand-pink mr-1.5">{i + 1}.</span>{step.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tip */}
        <div className="bg-white rounded-2xl p-5 shadow-card mb-8 flex items-start gap-3">
          <Camera size={18} className="text-brand-blue shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-brand-charcoal">Tip for the video call:</span>{" "}
            Make sure your phone or camera has good lighting and enough battery. Start from the front
            door and move room by room — don't worry about tidying up first, we want to see the space as-is.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink text-white font-heading font-semibold py-3.5 text-sm hover:bg-[#d4206f] transition-colors shadow-sm"
          >
            <CalendarCheck size={16} /> Schedule My Consultation
          </a>
          <Button href="/" variant="outline" size="md" className="flex-1 justify-center">
            Back to Home
          </Button>
        </div>

        <p className="text-center text-xs text-slate-400 mt-5">
          Prefer to call?{" "}
          <a href={BUSINESS.phoneHref} className="text-brand-pink font-semibold hover:underline">
            {BUSINESS.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
