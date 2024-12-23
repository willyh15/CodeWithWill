import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define state types
type ModalState = {
  isVisible: boolean;
  type: "success" | "error" | null;
  content: string;
};

type GlobalState = {
  loading: boolean;
  modal: ModalState;
};

// Define actions
type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_MODAL"; payload: ModalState };

// Define the initial state
const initialState: GlobalState = {
  loading: false,
  modal: {
    isVisible: false,
    type: null,
    content: "",
  },
};

// Define the reducer
const globalStateReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_MODAL":
      return { ...state, modal: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Create context
const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// GlobalStateProvider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
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