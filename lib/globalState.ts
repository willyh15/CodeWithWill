import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

// Define the ModalState interface
interface ModalState {
  isVisible: boolean;
  type: "success" | "error" | null;
  content: string;
}

// Define the GlobalState interface
interface GlobalState {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  modal: ModalState;
  setModal: Dispatch<SetStateAction<ModalState>>;
}

// Create context with a proper default value
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// GlobalStateProvider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: null,
    content: "",
  });

  return (
    <GlobalStateContext.Provider value={{ loading, setLoading, modal, setModal }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for accessing the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};