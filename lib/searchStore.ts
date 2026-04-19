import { create } from "zustand";

interface SearchState {
  businessType: string | null;
  timeline: string | null;
  budget: string | null;
  /** Incremented each time the header Submit button fires. AuditForm watches this to trigger pre-fill. */
  submitTrigger: number;
  /** Active niche filter from the secondary nav (e.g. "beauty", "food"). null = show all. */
  selectedNiche: string | null;
  /** Pre-built message injected by the cart widget when "Get your quote" is clicked. */
  cartMessage: string | null;
  setBusinessType: (value: string | null) => void;
  setTimeline: (value: string | null) => void;
  setBudget: (value: string | null) => void;
  triggerSubmit: () => void;
  setSelectedNiche: (niche: string | null) => void;
  setCartMessage: (msg: string | null) => void;
  reset: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  businessType: null,
  timeline: null,
  budget: null,
  submitTrigger: 0,
  selectedNiche: null,
  cartMessage: null,
  setBusinessType: (value) => set({ businessType: value }),
  setTimeline: (value) => set({ timeline: value }),
  setBudget: (value) => set({ budget: value }),
  triggerSubmit: () => set((s) => ({ submitTrigger: s.submitTrigger + 1 })),
  setSelectedNiche: (niche) => set({ selectedNiche: niche }),
  setCartMessage: (msg) => set({ cartMessage: msg }),
  reset: () => set({ businessType: null, timeline: null, budget: null }),
}));
