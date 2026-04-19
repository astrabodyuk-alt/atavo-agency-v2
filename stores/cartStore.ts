import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  priceFrom: number;
};

type CartStore = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: () => number;
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
  total: () => get().items.reduce((sum, i) => sum + i.priceFrom, 0),
}));
