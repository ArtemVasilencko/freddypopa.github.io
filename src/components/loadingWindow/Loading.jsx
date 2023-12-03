import * as React from "react";
import { Box } from "@mui/material";
import { Header } from "../header/Header";
import loadingGif from "../../images/filmAboutPage/loadingMoviePage.gif";
import "./loading.css";

export function Loading({ isVisible }) {
  return (
    <>
      {isVisible && <Header headerTitle={"Фильмы - loading..."} />}
      <Box className="loading__box">
        <img src={loadingGif} alt="loading gif" />
      </Box>
    </>
  );
}
