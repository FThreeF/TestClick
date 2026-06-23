import { create } from "zustand";

interface TypeClick {
  count: number;
  add: (count: number) => void;
}

export const useClickStore = create<TypeClick>((set) => ({
  count: 0,
  add: (count: number) => set((s) => ({ count: s.count + count })),
}));
