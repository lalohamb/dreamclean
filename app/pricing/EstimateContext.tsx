"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { PricingTier, AddOn } from "@/lib/pricing";

export interface SelectedTier {
  categoryId: string;
  tier: PricingTier;
}

export interface SelectedAddOn {
  addOn: AddOn;
  quantity: number;
}

interface EstimateState {
  selectedTier: SelectedTier | null;
  setTier: (categoryId: string, tier: PricingTier) => void;
  selectedAddOns: SelectedAddOn[];
  toggleAddOn: (addOn: AddOn) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}

const Ctx = createContext<EstimateState | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [selectedTier, setSelectedTierState] = useState<SelectedTier | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOn[]>([]);

  const setTier = useCallback((categoryId: string, tier: PricingTier) => {
    setSelectedTierState((prev) =>
      prev?.tier.id === tier.id ? null : { categoryId, tier }
    );
  }, []);

  const toggleAddOn = useCallback((addOn: AddOn) => {
    setSelectedAddOns((prev) => {
      const exists = prev.find((s) => s.addOn.id === addOn.id);
      if (exists) return prev.filter((s) => s.addOn.id !== addOn.id);
      return [...prev, { addOn, quantity: 1 }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setSelectedAddOns((prev) =>
      prev.map((s) => (s.addOn.id === id ? { ...s, quantity: Math.max(1, qty) } : s))
    );
  }, []);

  const clear = useCallback(() => {
    setSelectedTierState(null);
    setSelectedAddOns([]);
  }, []);

  return (
    <Ctx.Provider value={{ selectedTier, setTier, selectedAddOns, toggleAddOn, setQty, clear }}>
      {children}
    </Ctx.Provider>
  );
}

export function useEstimate() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEstimate must be used inside EstimateProvider");
  return ctx;
}
