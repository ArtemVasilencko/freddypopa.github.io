import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const [activePage, setActivePage] = useState(1);

  const onPageChange = (page) => {
    setActivePage(page);
  };

  return (
    <PaginationContext.Provider value={{ activePage, onPageChange }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
}
