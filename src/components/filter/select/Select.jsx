import * as React from "react";
import { TextField, MenuItem, Typography } from "@mui/material";
import { useSelect } from "./SelectContext";
import { usePagination } from "../../pagination/PaginationContext";

export function Select(props) {
  const { data, header } = props;
  const { activeSelect, onSelectChange } = useSelect();
  const { onPageChange } = usePagination();
  return (
    <>
      <Typography sx={{ marginBottom: "10px", fontSize: "14px" }}>
        {header}
      </Typography>
      <TextField
        select
        value={activeSelect}
        className="filter__select"
        onChange={(event) => {
          onSelectChange(event.target.value);
          onPageChange(1)
        }}
        variant="standard"
        sx={{ width: "330px", marginBottom: "35px" }}
        label="Выбрать"
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
