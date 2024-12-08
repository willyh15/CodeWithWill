import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalState {
  isVisible: boolean;
  type: "success" | "error" | "info" | "warning" | null;
  content: string | ReactNode;
}

interface GlobalStateContextProps {
  modal: ModalState;
  setModal: (modal: ModalState) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(
  undefined
);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: null,
    content: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ modal, setModal, loading, setLoading }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalState must be used within a GlobalStateProvider"
    );
  }
  return context;
};
