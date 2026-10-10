import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title:  "Tell Us About Your Space",
    desc:   "Fill out our simple quote request form with details about your home or workplace, the service you need, and your preferred timing.",
  },
  {
    number: "02",
    title:  "Discuss Your Cleaning Needs",
    desc:   "We'll follow up to understand your priorities, answer any questions, and confirm the details of your cleaning service.",
  },
  {
    number: "03",
    title:  "Enjoy a Fresh, Welcoming Space",
    desc:   "Sit back while we take care of the cleaning. Come home — or return to work — to a space that feels genuinely refreshed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-brand-ice-blue" aria-label="How it works">
      <div className="container-xl">
        <SectionHeading
          eyebrow="The Process"
          heading="Your Dream Clean Is\nJust Three Steps Away."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-brand-blue/30"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center mb-6 shadow-card z-10">
                <span className="font-heading font-extrabold text-2xl text-brand-pink">{step.number}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-charcoal mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
