import React, { createContext, useContext, useState } from "react";

const MovieIdContext = createContext();

export function MovieIdProvider({ children }) {
  const [activeId, setAcitveId] = useState("");

  const onCardClick = (id) => {
    setAcitveId(id);
  };

  return (
    <MovieIdContext.Provider value={{ activeId, onCardClick }}>
      {children}
    </MovieIdContext.Provider>
  );
}

export function useMovieId() {
  const context = useContext(MovieIdContext);
  if (!context) {
    throw new Error("useMovieId must be used within a MovieIdContext");
  }
  return context;
}
