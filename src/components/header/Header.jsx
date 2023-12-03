import * as React from "react";
import { Typography, IconButton, AppBar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Header({ headerTitle }) {
  return (
    <AppBar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: "60px",
      }}
    >
      <Typography variant="h5" component="h2" sx={{ paddingLeft: "15px" }}>
        {headerTitle}
      </Typography>
      <IconButton sx={{ marginRight: "20px" }}>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>
    </AppBar>
  );
}
