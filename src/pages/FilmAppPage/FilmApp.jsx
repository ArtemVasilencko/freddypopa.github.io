import * as React from "react";
import { useReducer } from "react";
import { Paper, Box } from "@mui/material";
import { Header } from "../../components/header/Header.jsx";
import { Filter } from "../../components/filter/Filter.jsx";
import { PaginationMenu } from "../../components/pagination/Pagination.jsx";
import { useSelect } from "../../components/filter/select/SelectContext.jsx";
import { usePagination } from "../../components/pagination/PaginationContext.jsx";
import {
  initialState,
  filterReducer,
} from "../../components/filter/FilterContext.jsx";
import { FilmCardsList } from "../../components/filmCards/FilmCardsList.jsx";
import "./filmApp.css";

export function FilmApp() {
  return (
    <>
      <Header headerTitle="Фильмы" />
      <Box className="film__app-wrapper">
        <FilmFilter />
        <FilmCardsList />
      </Box>
    </>
  );
}

function FilmFilter() {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { onSelectChange } = useSelect();
  const { onPageChange } = usePagination();

  function resetFilter() {
    dispatch({
      type: "clicked",
      resetFilter: state.resetFilter + 1,
    });
    onSelectChange("popular");
    onPageChange(1);
  }

  return (
    <Paper className="sort__menu">
      <Filter resetFilter={state.resetFilter} resetFilterClick={resetFilter} />
      <PaginationMenu key={state.resetFilter} />
    </Paper>
  );
}
