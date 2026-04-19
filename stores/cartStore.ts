import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  billingMode: "monthly" | "oneoff";
  oneOffAmount: number;
  monthlyAmount?: number; // only for managed services
};

type CartStore = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  totals: () => { oneOff: number; monthly: number };
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  add: (item) =>
    set((state) =>
      state.items.find((i) => i.id === item.id)
        ? state
        : { items: [...state.items, item] }
    ),
  remove: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] }),
  totals: () => {
    const items = get().items;
    const oneOff = items
      .filter((i) => i.billingMode === "oneoff")
      .reduce((sum, i) => sum + i.oneOffAmount, 0);
    const monthly = items
      .filter((i) => i.billingMode === "monthly")
      .reduce((sum, i) => sum + (i.monthlyAmount ?? 0), 0);
    return { oneOff, monthly };
  },
}));
