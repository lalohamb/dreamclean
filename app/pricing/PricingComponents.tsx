"use client";
import {
  Home, Building2, Briefcase, FolderOpen, Flame, Minus, Square,
  WashingMachine, Bath, MapPin, Check, Plus, Video, RefrigeratorIcon,
} from "lucide-react";
import type { ServiceCategory, PricingTier, AddOn } from "@/lib/pricing";
import { formatPrice } from "@/lib/pricing";
import { useEstimate } from "./EstimateContext";

const ICONS: Record<string, React.ElementType> = {
  Home, Building2, Briefcase, FolderOpen, Flame, Minus, Square,
  WashingMachine, Bath, MapPin, Video, Refrigerator: RefrigeratorIcon,
};

// ─── Category Tab Bar ─────────────────────────────────────────────────────

export function CategoryTabs({
  categories,
  active,
  onChange,
}: {
  categories: ServiceCategory[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" role="tablist">
      {categories.map((cat) => {
        const Icon = ICONS[cat.icon] ?? Home;
        const isActive = cat.id === active;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
              isActive
                ? "bg-brand-pink text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:border-brand-pink hover:text-brand-pink"
            }`}
          >
            <Icon size={15} />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Tier Card ────────────────────────────────────────────────────────────

export function TierCard({
  tier,
  categoryId,
  accent,
}: {
  tier: PricingTier;
  categoryId: string;
  accent: "blue" | "pink";
}) {
  const { selectedTier, setTier } = useEstimate();
  const isSelected = selectedTier?.tier.id === tier.id;
  const accentBlue = accent === "blue";

  return (
    <div
      onClick={() => setTier(categoryId, tier)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === " " && setTier(categoryId, tier)}
      className={`relative rounded-3xl border-2 p-6 cursor-pointer transition-all duration-200 flex flex-col ${
        tier.highlight ? "shadow-card-hover" : "shadow-card"
      } ${
        isSelected
          ? accentBlue
            ? "border-brand-blue bg-brand-blue text-white"
            : "border-brand-pink bg-brand-pink text-white"
          : tier.highlight
          ? accentBlue
            ? "border-brand-blue bg-white scale-[1.02]"
            : "border-brand-pink bg-white scale-[1.02]"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      {tier.highlight && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-heading font-bold px-4 py-1 rounded-full whitespace-nowrap ${
            isSelected ? "bg-white text-brand-pink" : accentBlue ? "bg-brand-blue text-white" : "bg-brand-pink text-white"
          }`}
        >
          Most Popular
        </span>
      )}

      <h3 className={`font-heading font-extrabold text-xl mb-1 ${isSelected ? "" : "text-brand-charcoal"}`}>
        {tier.name}
      </h3>
      <p className={`text-sm mb-4 ${isSelected ? "opacity-80" : "text-slate-500"}`}>{tier.tagline}</p>

      <div className="mb-5">
        {tier.priceCents > 0 ? (
          <>
            <span className={`text-3xl font-heading font-extrabold ${isSelected ? "" : accentBlue ? "text-brand-blue" : "text-brand-pink"}`}>
              {formatPrice(tier.priceCents)}+
            </span>
            <span className={`text-xs ml-1.5 ${isSelected ? "opacity-70" : "text-slate-400"}`}>{tier.priceLabel}</span>
          </>
        ) : (
          <span className={`text-lg font-heading font-semibold ${isSelected ? "" : accentBlue ? "text-brand-blue" : "text-brand-pink"}`}>
            Custom Quote
          </span>
        )}
      </div>

      <ul className="space-y-2 flex-1 mb-5">
        {tier.items.map((item) => (
          <li key={item} className={`flex items-start gap-2 text-sm ${isSelected ? "opacity-90" : "text-slate-600"}`}>
            <Check size={13} className={`shrink-0 mt-0.5 ${isSelected ? "" : accentBlue ? "text-brand-blue" : "text-brand-pink"}`} />
            {item}
          </li>
        ))}
      </ul>

      <div className={`mt-auto text-center text-xs font-semibold py-2 rounded-full border ${
        isSelected
          ? "border-white/30 text-white"
          : accentBlue
          ? "border-brand-blue text-brand-blue"
          : "border-brand-pink text-brand-pink"
      }`}>
        {isSelected ? "✓ Selected" : "Select This Tier"}
      </div>
    </div>
  );
}

// ─── Add-On Card ──────────────────────────────────────────────────────────

export function AddOnCard({ addOn }: { addOn: AddOn }) {
  const { selectedAddOns, toggleAddOn, setQty } = useEstimate();
  const isSelected = selectedAddOns.some((s) => s.addOn.id === addOn.id);
  const selectedItem = selectedAddOns.find((s) => s.addOn.id === addOn.id);
  const Icon = ICONS[addOn.icon] ?? FolderOpen;

  return (
    <div
      onClick={() => toggleAddOn(addOn)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === " " && toggleAddOn(addOn)}
      className={`relative rounded-2xl border-2 p-4 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-brand-pink bg-pink-50"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      {isSelected && (
        <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-pink flex items-center justify-center">
          <Check size={11} className="text-white" />
        </span>
      )}
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${isSelected ? "bg-pink-100" : "bg-slate-100"}`}>
        <Icon size={17} className={isSelected ? "text-brand-pink" : "text-slate-500"} />
      </div>
      <p className="font-heading font-bold text-brand-charcoal text-sm mb-1">{addOn.name}</p>
      <div className="flex items-center justify-between mt-2">
        <span className={`text-lg font-heading font-extrabold ${isSelected ? "text-brand-pink" : "text-brand-charcoal"}`}>
          {formatPrice(addOn.priceCents)}+
        </span>
        <span className="text-xs text-slate-400">{addOn.unit}</span>
      </div>
      {isSelected && selectedItem && addOn.unit !== "flat" && (
        <div
          className="flex items-center gap-2 mt-3"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setQty(addOn.id, selectedItem.quantity - 1)}
            className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-slate-400"
            aria-label="Decrease"
          >
            <Minus size={11} />
          </button>
          <span className="text-sm font-semibold w-4 text-center">{selectedItem.quantity}</span>
          <button
            onClick={() => setQty(addOn.id, selectedItem.quantity + 1)}
            className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-slate-400"
            aria-label="Increase"
          >
            <Plus size={11} />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Selected Summary ─────────────────────────────────────────────────────

export function SelectedSummary() {
  const { calendlyUrl, selectedTier, selectedAddOns, clear } = useEstimate();
  const hasItems = selectedTier || selectedAddOns.length > 0;
  if (!hasItems) return null;

  const tierPrice = selectedTier?.tier.priceCents ?? 0;
  const addOnsPrice = selectedAddOns.reduce((sum, s) => sum + s.addOn.priceCents * s.quantity, 0);
  const totalCents = tierPrice + addOnsPrice;

  const params = new URLSearchParams({
    name: selectedTier ? `${selectedTier.categoryId} — ${selectedTier.tier.name}` : "",
    ...(selectedAddOns.length > 0 && { addons: selectedAddOns.map((s) => s.addOn.name).join(", ") }),
    ...(totalCents > 0 && { total: formatPrice(totalCents) }),
  });
  const bookingUrl = `${calendlyUrl}?${params.toString()}`;

  return (
    <div className="bg-white rounded-3xl shadow-card-hover border border-slate-100 p-6 sticky top-28">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-bold text-brand-charcoal">Your Selection</h3>
        <button onClick={clear} className="text-xs text-slate-400 hover:text-brand-pink transition-colors">
          Clear all
        </button>
      </div>

      {selectedTier && (
        <div className="mb-4 p-3 rounded-xl bg-brand-ice-blue">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-0.5">{selectedTier.categoryId}</p>
          <p className="font-heading font-bold text-brand-charcoal text-sm">{selectedTier.tier.name}</p>
          <p className="text-xs text-brand-pink font-semibold mt-0.5">
            {selectedTier.tier.priceCents > 0 ? `${formatPrice(selectedTier.tier.priceCents)}+ ${selectedTier.tier.priceLabel}` : "Custom Quote"}
          </p>
        </div>
      )}

      {selectedAddOns.length > 0 && (
        <ul className="space-y-2 mb-4">
          {selectedAddOns.map((s) => (
            <li key={s.addOn.id} className="flex items-center justify-between text-sm">
              <span className="text-brand-charcoal">
                {s.addOn.name}
                {s.quantity > 1 && <span className="text-slate-400"> ×{s.quantity}</span>}
              </span>
              <span className="font-semibold text-brand-charcoal shrink-0">
                {formatPrice(s.addOn.priceCents)}+
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="border-t border-dashed border-slate-200 pt-3 mb-4">
        {totalCents > 0 && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-brand-charcoal">Estimated Total</span>
            <span className="text-lg font-heading font-extrabold text-brand-pink">{formatPrice(totalCents)}+</span>
          </div>
        )}
        <p className="text-xs text-slate-400 italic leading-relaxed">
          Final pricing is subject to confirmation based on your cleaning needs.
        </p>
      </div>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center rounded-full bg-brand-pink text-white font-heading font-semibold py-3 text-sm hover:bg-[#d4206f] transition-colors"
      >
        Schedule Now →
      </a>
    </div>
  );
}
