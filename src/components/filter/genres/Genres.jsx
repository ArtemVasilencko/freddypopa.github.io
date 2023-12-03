import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import { fetchData } from "../../fetch/fetch.js";
import {
  useFilterDispatchContext,
  useFilterGenresContext,
} from "../FilterContext.jsx";
import { useEffect } from "react";

export function Genres() {
  const genres = useFilterGenresContext();
  const dispatch = useFilterDispatchContext();

  useEffect(() => {
    async function fetch() {
      const url = "https://api.themoviedb.org/3/genre/movie/list?language=ru";
      const data = await fetchData(url);
      data
        ? dispatch({
            type: "reloaded",
            data: data.genres,
          })
        : alert("Ошибка запроса всех жанров с сервера");
    }
    fetch();
  }, [dispatch]);

  return (
    <Autocomplete
      multiple
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          variant="standard"
          {...params}
          label="Жанры"
          placeholder="Найти"
        />
      )}
      sx={{ width: "330px" }}
    />
  );
}
