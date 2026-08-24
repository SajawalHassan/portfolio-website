import { create } from "zustand";

interface EverythingState {
  doExitAnim: boolean;
  setDoExitAnim: (val: boolean) => void;
}

export const useEverythingState = create<EverythingState>((set) => ({
  doExitAnim: false,
  setDoExitAnim: (val) => set(() => ({ doExitAnim: val })),
}));
