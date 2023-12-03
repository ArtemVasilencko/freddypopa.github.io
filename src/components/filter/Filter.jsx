import * as React from "react";
import { RangeSlider } from "./rangeSlider/RangeSlider.jsx";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Typography, Box } from "@mui/material";
import { dataPopular } from "./select/dataSelect.js";
import { Select } from "./select/Select.jsx";
import { Genres } from "./genres/Genres.jsx";
import {
  FilterGenresContext,
  FilterDispatchContext,
} from "./FilterContext.jsx";
import { initialState, filterReducer } from "../filter/FilterContext.jsx";
import { useReducer } from "react";
import './filter.css'

export function Filter({ resetFilterClick, resetFilter }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterGenresContext.Provider value={state.dataGenres}>
      <FilterDispatchContext.Provider value={dispatch}>
        <Box key={resetFilter}>
          <Box className="filter__header">
            <Typography color={"primary"} variant="h5">
              Фильтры
            </Typography>
            <IconButton onClick={resetFilterClick}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Select header="Сортировать по:" data={dataPopular} />
          <Typography sx={{ marginBottom: '60px'}}>Год релиза:</Typography>
          <RangeSlider />
          <Genres />
        </Box>
      </FilterDispatchContext.Provider>
    </FilterGenresContext.Provider>
  );
}
