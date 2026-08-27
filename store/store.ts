import { create } from "zustand";

interface EverythingState {
  doExitAnim: boolean;
  setDoExitAnim: (val: boolean) => void;

  transitionLink: string;
  setTransitionLink: (val: string) => void;

  showInitAnim: boolean;
  setShowInitAnim: (val: boolean) => void;
}

export const useEverythingState = create<EverythingState>((set) => ({
  doExitAnim: false,
  setDoExitAnim: (val) => set(() => ({ doExitAnim: val })),
  transitionLink: "#",
  setTransitionLink: (val) => set(() => ({ transitionLink: val })),
  showInitAnim: true,
  setShowInitAnim: (val) => set(() => ({ showInitAnim: val })),
}));
