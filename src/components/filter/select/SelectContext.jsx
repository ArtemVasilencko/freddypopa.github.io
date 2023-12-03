import React, { createContext, useContext, useState } from "react";

const SelectContext = createContext();

export function SelectProvider({ children }) {
  const [activeSelect, setActiveSelect] = useState("popular");

  const onSelectChange = (select) => {
    setActiveSelect(select);
  };

  return (
    <SelectContext.Provider value={{ activeSelect, onSelectChange }}>
      {children}
    </SelectContext.Provider>
  );
}

export function useSelect() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a SelectProvider");
  }
  return context;
}
