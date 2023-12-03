import { Typography } from "@mui/material";
import "./filmAboutPage.css";

export const MovieAboutActors = ({ movieAboutCredits }) => {
  return (
    <>
      <Typography
        variant="h4"
        className="movieDetailsItem"
        sx={{ marginBottom: "10px" }}
      >
        Актеры
      </Typography>

      <Typography sx={{ marginBottom: "8px" }} className="movieActors">
        {movieAboutCredits.cast[0].name}
      </Typography>

      <Typography sx={{ marginBottom: "8px" }} className="movieActors">
        {movieAboutCredits.cast[1].name}
      </Typography>

      <Typography sx={{ marginBottom: "8px" }} className="movieActors">
        {movieAboutCredits.cast[2].name}
      </Typography>

      <Typography sx={{ marginBottom: "8px" }} className="movieActors">
        {movieAboutCredits.cast[3].name}
      </Typography>
    </>
  );
};
