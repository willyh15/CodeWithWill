import { create } from "zustand";

// Define state types
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

// Create the Zustand store
export const useGlobalState = create<GlobalState>((set) => ({
  loading: false,
  modal: {
    isVisible: false,
    type: null,
    content: "",
  },
  setLoading: (loading: boolean) => set({ loading }),
  setModal: (modal: ModalState) => set({ modal }),
}));