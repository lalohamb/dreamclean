"use client";
import { Flame, Bath, Refrigerator, LayoutGrid, FolderOpen, WashingMachine, Check, Plus, Minus } from "lucide-react";
import type { ServiceAddon, Tier } from "@/lib/pricing";
import { formatPrice } from "@/lib/pricing";
import { useEstimate } from "./EstimateContext";

const ICONS: Record<string, React.ElementType> = {
  Flame, Bath, Refrigerator, LayoutGrid, FolderOpen, WashingMachine,
};

export function TierSelector() {
  const { tier, setTier } = useEstimate();
  return (
    <div className="inline-flex rounded-full bg-slate-100 p-1 gap-1" role="group" aria-label="Select cleaning tier">
      <button
        onClick={() => setTier("light")}
        className={`rounded-full px-6 py-2.5 text-sm font-heading font-semibold transition-all duration-200 ${
          tier === "light"
            ? "bg-brand-blue text-white shadow-sm"
            : "text-slate-500 hover:text-brand-charcoal"
        }`}
        aria-pressed={tier === "light"}
      >
        💤 Light Sleeper
      </button>
      <button
        onClick={() => setTier("heavy")}
        className={`rounded-full px-6 py-2.5 text-sm font-heading font-semibold transition-all duration-200 ${
          tier === "heavy"
            ? "bg-brand-pink text-white shadow-sm"
            : "text-slate-500 hover:text-brand-charcoal"
        }`}
        aria-pressed={tier === "heavy"}
      >
        💪 Heavy Dreamer
      </button>
    </div>
  );
}

export function ServiceAddonCard({ addon }: { addon: ServiceAddon }) {
  const { tier, selected, toggle, setQty } = useEstimate();
  const tierPrice = tier === "light" ? addon.light : addon.heavy;
  const isSelected = selected.some((s) => s.addon.id === addon.id);
  const selectedItem = selected.find((s) => s.addon.id === addon.id);
  const Icon = ICONS[addon.icon] ?? LayoutGrid;
  const accentBlue = tier === "light";

  return (
    <div
      className={`relative rounded-2xl border-2 p-5 transition-all duration-200 cursor-pointer ${
        isSelected
          ? accentBlue
            ? "border-brand-blue bg-blue-50"
            : "border-brand-pink bg-pink-50"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
      onClick={() => tierPrice && toggle(addon, tier)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === " " && tierPrice && toggle(addon, tier)}
    >
      {isSelected && (
        <span className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center ${accentBlue ? "bg-brand-blue" : "bg-brand-pink"}`}>
          <Check size={13} className="text-white" />
        </span>
      )}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${accentBlue ? "bg-blue-100" : "bg-pink-100"}`}>
        <Icon size={20} className={accentBlue ? "text-brand-blue" : "text-brand-pink"} />
      </div>
      <h3 className="font-heading font-bold text-brand-charcoal text-sm mb-1">{addon.name}</h3>
      <p className="text-xs text-slate-500 leading-relaxed mb-3">{addon.description}</p>
      {tierPrice ? (
        <div className="flex items-end justify-between">
          <div>
            <span className={`text-xl font-heading font-extrabold ${accentBlue ? "text-brand-blue" : "text-brand-pink"}`}>
              {formatPrice(tierPrice.priceCents)}
            </span>
            <span className="text-xs text-slate-400 ml-1">{tierPrice.unit}</span>
            {tierPrice.limit && (
              <p className="text-xs text-slate-400 mt-0.5">{tierPrice.limit}</p>
            )}
          </div>
          {isSelected && selectedItem && (
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setQty(addon.id, selectedItem.quantity - 1)}
                className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-slate-400 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={12} />
              </button>
              <span className="text-sm font-semibold w-4 text-center">{selectedItem.quantity}</span>
              <button
                onClick={() => setQty(addon.id, selectedItem.quantity + 1)}
                className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-slate-400 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={12} />
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-xs text-slate-400 italic">Not available in this tier</p>
      )}
    </div>
  );
}

export function PackageCard({ pkg }: { pkg: import("@/lib/pricing").CleaningPackage }) {
  const { selectedPackage, setPackage } = useEstimate();
  const isSelected = selectedPackage?.id === pkg.id;

  return (
    <div
      className={`relative rounded-3xl border-2 p-7 cursor-pointer transition-all duration-200 flex flex-col ${
        pkg.highlight
          ? isSelected
            ? "border-brand-pink bg-brand-pink text-white shadow-lg scale-[1.02]"
            : "border-brand-pink bg-white shadow-card-hover"
          : isSelected
          ? "border-brand-blue bg-brand-blue text-white shadow-lg"
          : "border-slate-200 bg-white hover:border-slate-300 shadow-card"
      }`}
      onClick={() => setPackage(isSelected ? null : pkg)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === " " && setPackage(isSelected ? null : pkg)}
    >
      {pkg.highlight && (
        <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-heading font-bold px-4 py-1 rounded-full ${isSelected ? "bg-white text-brand-pink" : "bg-brand-pink text-white"}`}>
          Most Popular
        </span>
      )}
      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isSelected ? "opacity-80" : "text-brand-pink"}`}>
        {pkg.style}
      </p>
      <h3 className={`text-2xl font-heading font-extrabold mb-1 ${isSelected ? "" : "text-brand-charcoal"}`}>
        {pkg.name} Package
      </h3>
      <p className={`text-sm mb-5 ${isSelected ? "opacity-80" : "text-slate-500"}`}>{pkg.tagline}</p>
      <div className="mb-5">
        <span className={`text-4xl font-heading font-extrabold ${isSelected ? "" : pkg.highlight ? "text-brand-pink" : "text-brand-blue"}`}>
          {formatPrice(pkg.priceCents)}
        </span>
      </div>
      <div className={`flex items-center gap-2 text-sm mb-6 ${isSelected ? "opacity-90" : "text-slate-600"}`}>
        <Check size={15} className={isSelected ? "" : "text-brand-blue"} />
        {pkg.visits}
      </div>
      <div className={`mt-auto text-xs italic ${isSelected ? "opacity-70" : "text-slate-400"}`}>
        ⚠ Billing period subject to confirmation
      </div>
    </div>
  );
}

export function SelectedSummary() {
  const { selected, selectedPackage, tier, clear } = useEstimate();
  const hasItems = selected.length > 0 || selectedPackage;
  if (!hasItems) return null;

  return (
    <div className="bg-white rounded-3xl shadow-card-hover border border-slate-100 p-6 sticky top-28">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-bold text-brand-charcoal">Your Selection</h3>
        <button onClick={clear} className="text-xs text-slate-400 hover:text-brand-pink transition-colors">
          Clear all
        </button>
      </div>

      {selected.length > 0 && (
        <ul className="space-y-2 mb-4">
          {selected.map((s) => {
            const price = s.tier === "light" ? s.addon.light : s.addon.heavy;
            return (
              <li key={s.addon.id} className="flex items-start justify-between gap-3 text-sm">
                <span className="text-brand-charcoal leading-snug">
                  {s.addon.name}
                  {s.quantity > 1 && <span className="text-slate-400"> ×{s.quantity}</span>}
                  <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${s.tier === "light" ? "bg-blue-100 text-brand-blue" : "bg-pink-100 text-brand-pink"}`}>
                    {s.tier === "light" ? "Light" : "Heavy"}
                  </span>
                </span>
                <span className="font-semibold text-brand-charcoal shrink-0">
                  {price ? formatPrice(price.priceCents) : "—"}
                  {s.quantity > 1 && price ? ` ea.` : ""}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {selectedPackage && (
        <div className="border-t border-slate-100 pt-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-brand-charcoal">{selectedPackage.name} Package</span>
            <span className="font-semibold text-brand-charcoal">{formatPrice(selectedPackage.priceCents)}</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{selectedPackage.visits}</p>
        </div>
      )}

      <div className="border-t border-dashed border-slate-200 pt-3 mb-5">
        <p className="text-xs text-slate-400 italic leading-relaxed">
          Final pricing is subject to confirmation based on your cleaning needs.
        </p>
      </div>

      <a
        href={`/quote?services=${encodeURIComponent(selected.map((s) => s.addon.name).join(","))}&tier=${tier}${selectedPackage ? `&package=${selectedPackage.name}` : ""}`}
        className="block w-full text-center rounded-full bg-brand-pink text-white font-heading font-semibold py-3 text-sm hover:bg-[#d4206f] transition-colors"
      >
        Request a Quote →
      </a>
    </div>
  );
}
