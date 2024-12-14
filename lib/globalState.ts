import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

// Modal state interface
interface ModalState {
  isVisible: boolean;
  type: "success" | "error" | null;
  content: string;
}

// Global state interface
interface GlobalState {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  modal: ModalState;
  setModal: Dispatch<SetStateAction<ModalState>>;
}

// Declare the context
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// GlobalStateProvider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: null,
    content: "",
  });

  // Debug the context values
  console.log("GlobalStateContext Debug:", { loading, modal });

  return (
    <GlobalStateContext.Provider value={{ loading, setLoading, modal, setModal }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};