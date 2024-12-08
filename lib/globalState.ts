import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ModalState {
  isVisible: boolean;
  type: "success" | "error" | "info" | "warning" | null;
  content: string | ReactNode;
}

interface GlobalStateContextProps {
  modal: [ModalState, Dispatch<SetStateAction<ModalState>>];
  loading: [boolean, Dispatch<SetStateAction<boolean>>];
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
    <GlobalStateContext.Provider value={{ modal: [modal, setModal], loading: [loading, setLoading] }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = <K extends keyof GlobalStateContextProps>(
  key: K
): GlobalStateContextProps[K] => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context[key];
};