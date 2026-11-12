import { create } from "zustand";

export type ModalTypes = "quotes" | "poems" | "projects";

interface ModalData {
  title?: string;
  text?: string;
  [val: string]: any;
}

interface ModalStores {
  type: ModalTypes | null;
  data: ModalData;
  isOpen: boolean;
  openModal: (type: ModalTypes, data?: ModalData) => void;
  closeModal: () => void;
}

export const useModal = create<ModalStores>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  openModal: (type, data?: ModalData) => set({ type, isOpen: true, data }),
  closeModal: () => set({ isOpen: false, type: null }),
}));
