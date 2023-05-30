/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useContext, useState } from "react";
import BillReducer from "./BillReducer";

const INITIAL_STATE = {
  billAmount: 0,
  tipAmount: 0,
  numberOfPersons: 1,
};

const BillContext = createContext(INITIAL_STATE);

export const BillContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BillReducer, INITIAL_STATE);
  const [selectedTip, setSelectedTip] = useState(null);

  return (
    <BillContext.Provider
      value={{ state, dispatch, selectedTip, setSelectedTip }}
    >
      {children}
    </BillContext.Provider>
  );
};

export const useBillContext = () => {
  const context = useContext(BillContext);
  if (!context) {
    throw new Error("useBillContext must be provided within a BillProvider");
  }
  return context;
};
