import { createContext, useContext } from "react";

export const FilterGenresContext = createContext(null);
export const FilterDispatchContext = createContext(null);

export function useFilterGenresContext() {
  return useContext(FilterGenresContext);
}

export function useFilterDispatchContext() {
  return useContext(FilterDispatchContext);
}

export function filterReducer(state, action) {
  if (action.type === "reloaded") {
    return {
      ...state,
      dataGenres: action.data,
    };
  } else if (action.type === "clicked") {
    return {
      ...state,
      resetFilter: action.resetFilter + 1,
    };
  }
}

export const initialState = {
  resetFilter: 0,
  dataGenres: [],
};
