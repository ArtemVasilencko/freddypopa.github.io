import { Box, Typography } from "@mui/material";
import "./filmAboutPage.css";

export const MovieAboutDetails = ({ movieAboutDetails, movieAboutCredits }) => {
  const directingPerson = movieAboutCredits.crew.find(
    (person) => person.known_for_department === "Directing"
  );

  return (
    <Box className="movieDetailsContainer">
      <Typography className="movieDetailsItem">
        <strong>Страна:</strong>{" "}
        {movieAboutDetails.production_countries[0].name}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Год:</strong> {movieAboutDetails.release_date.split("-")[0]}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Жанр:</strong> {movieAboutDetails.genres[0].name}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Режиссер:</strong> {directingPerson ? directingPerson.name : ' не найден'}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Сценарий:</strong> {movieAboutDetails.overview}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Бюджет:</strong> {movieAboutDetails.budget + "$"}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Зрители:</strong> {movieAboutDetails.vote_count}
      </Typography>
      <Typography className="movieDetailsItem">
        <strong>Время:</strong> {movieAboutDetails.runtime + " minutes"}
      </Typography>
    </Box>
  );
};
