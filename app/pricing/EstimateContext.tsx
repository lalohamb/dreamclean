"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Tier, ServiceAddon, CleaningPackage } from "@/lib/pricing";

export interface SelectedAddon {
  addon: ServiceAddon;
  tier: Tier;
  quantity: number;
}

interface EstimateState {
  tier: Tier;
  setTier: (t: Tier) => void;
  selected: SelectedAddon[];
  toggle: (addon: ServiceAddon, tier: Tier) => void;
  setQty: (id: string, qty: number) => void;
  selectedPackage: CleaningPackage | null;
  setPackage: (p: CleaningPackage | null) => void;
  clear: () => void;
}

const Ctx = createContext<EstimateState | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<Tier>("light");
  const [selected, setSelected] = useState<SelectedAddon[]>([]);
  const [selectedPackage, setPackage] = useState<CleaningPackage | null>(null);

  const toggle = useCallback((addon: ServiceAddon, t: Tier) => {
    setSelected((prev) => {
      const exists = prev.find((s) => s.addon.id === addon.id);
      if (exists) return prev.filter((s) => s.addon.id !== addon.id);
      return [...prev, { addon, tier: t, quantity: 1 }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setSelected((prev) =>
      prev.map((s) => (s.addon.id === id ? { ...s, quantity: Math.max(1, qty) } : s))
    );
  }, []);

  const clear = useCallback(() => {
    setSelected([]);
    setPackage(null);
  }, []);

  return (
    <Ctx.Provider value={{ tier, setTier, selected, toggle, setQty, selectedPackage, setPackage, clear }}>
      {children}
    </Ctx.Provider>
  );
}

export function useEstimate() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEstimate must be used inside EstimateProvider");
  return ctx;
}
