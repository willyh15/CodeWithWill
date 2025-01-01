import { create } from "zustand";

interface ModalState {
  isVisible: boolean;
  type: "success" | "error" | null;
  content: string;
}

interface GlobalState {
  loading: boolean;
  modal: ModalState;
  setLoading: (loading: boolean) => void;
  setModal: (modal: ModalState) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  loading: false,
  modal: {
    isVisible: false,
    type: null,
    content: "",
  },
  setLoading: (loading) => set({ loading }),
  setModal: (modal) => set({ modal }),
}));