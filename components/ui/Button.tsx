import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface LinkButtonProps {
  children:   ReactNode;
  variant?:   Variant;
  size?:      Size;
  href:       string;
  external?:  boolean;
  className?: string;
  // onClick is intentionally omitted — use a native <button> for click handlers
}

interface NativeButtonProps {
  children:   ReactNode;
  variant?:   Variant;
  size?:      Size;
  href?:      never;
  external?:  never;
  className?: string;
  type?:      "button" | "submit" | "reset";
  disabled?:  boolean;
  onClick?:   () => void;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:   "bg-brand-pink text-white hover:bg-[#d4206f] active:scale-[0.98] shadow-sm hover:shadow-md",
  secondary: "bg-brand-blue text-white hover:bg-[#4fa3e8] active:scale-[0.98] shadow-sm hover:shadow-md",
  outline:   "border-2 border-brand-pink text-brand-pink hover:bg-brand-soft-pink active:scale-[0.98]",
  ghost:     "text-brand-charcoal hover:text-brand-pink hover:bg-brand-ice-blue",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-5 py-2",
  md: "text-base px-7 py-3",
  lg: "text-lg px-9 py-4",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    return props.external ? (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={cls}
    >
      {children}
    </button>
  );
}
