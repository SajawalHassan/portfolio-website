import { create } from "zustand";

export type poemType = { title: string; body: string; date: string };

export type EssayType = { title: string; badgeText: string; body: string; date: string };

interface EverythingState {
  doExitAnim: boolean;
  setDoExitAnim: (val: boolean) => void;

  transitionLink: string;
  setTransitionLink: (val: string) => void;

  showInitAnim: boolean;
  setShowInitAnim: (val: boolean) => void;

  quotes: string[];
  setQuotes: (val: string[]) => void;

  poems: poemType[];
  setPoems: (val: poemType[]) => void;

  essays: EssayType[];
  setEssays: (val: EssayType[]) => void;

  modalIsOpen: boolean;
  setModalIsOpen: (val: boolean) => void;

  isFetching: boolean;
  setIsFetching: (val: boolean) => void;
}

export const useEverythingState = create<EverythingState>((set) => ({
  doExitAnim: false,
  setDoExitAnim: (val) => set({ doExitAnim: val }),

  transitionLink: "#",
  setTransitionLink: (val) => set({ transitionLink: val }),

  showInitAnim: true,
  setShowInitAnim: (val) => set({ showInitAnim: val }),

  quotes: [],
  setQuotes: (val) => set({ quotes: val }),

  poems: [],
  setPoems: (val) => set({ poems: val }),

  essays: [],
  setEssays: (val) => set({ essays: val }),

  modalIsOpen: true,
  setModalIsOpen: (val) => set({ modalIsOpen: val }),

  isFetching: false,
  setIsFetching: (val) => set({ isFetching: val }),
}));
