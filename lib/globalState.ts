import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface ModalState {
  isVisible: boolean;
  type: "success" | "error" | null;
  content: string;
}

interface GlobalState {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  modal: ModalState;
  setModal: Dispatch<SetStateAction<ModalState>>;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};