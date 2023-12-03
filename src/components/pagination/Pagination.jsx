import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePagination } from "./PaginationContext";

export function PaginationMenu() {
  const { activePage, onPageChange } = usePagination();

  return (
    <Stack sx={{ marginBottom: "20px", width: "450px" }} spacing={1}>
      <Pagination
        count={152}
        page={activePage}
        onChange={(event, value) => onPageChange(value)}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
