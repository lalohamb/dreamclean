interface SectionHeadingProps {
  eyebrow?: string;
  heading:  string;
  sub?:     string;
  center?:  boolean;
  light?:   boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  sub,
  center = false,
  light  = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-sm font-heading font-semibold uppercase tracking-widest mb-3 ${light ? "text-brand-blue" : "text-brand-pink"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-display-lg font-heading font-extrabold leading-tight ${light ? "text-white" : "text-brand-charcoal"}`}
        dangerouslySetInnerHTML={{ __html: heading.replace(/\n/g, "<br/>") }}
      />
      {sub && (
        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/80" : "text-slate-500"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
