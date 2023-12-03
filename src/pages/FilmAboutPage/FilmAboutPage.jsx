import { fetchData } from "../../components/fetch/fetch";
import { useEffect, useState } from "react";
import { useMovieId } from "../../components/filmCards/FilmCardContext";
import { Typography, Box, IconButton } from "@mui/material";
import { Header } from "../../components/header/Header";
import ArrowBack from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../components/fetch/utils/getImageUrl";
import { MovieAboutDetails } from "./MovieAboutDetails";
import { MovieAboutActors } from "./MovieAboutActors";
import { Loading } from "../../components/loadingWindow/Loading";
import "./filmAboutPage.css";

export function FilmAboutPage() {
  const [movieAboutDetails, setMovieAboutDetails] = useState();
  const [movieAboutCredits, setMovieAboutCredits] = useState();
  const [loading, setLoading] = useState(true);

  const { activeId } = useMovieId();

  useEffect(() => {
    let id = activeId ? activeId : localStorage.getItem("activeId");

    async function fetchMovieDetails() {
      let url = `https://api.themoviedb.org/3/movie/${id}?language=ru-US`;
      const data = await fetchData(url);
      setMovieAboutDetails(data);
    }
    async function fetchMovieCredits() {
      let url = `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-US`;
      const data = await fetchData(url);
      setMovieAboutCredits(data);
    }

    const fetchDataAndSetLoading = async () => {
      setLoading(true);
      await fetchMovieDetails();
      await fetchMovieCredits();
      setLoading(false);
    };

    fetchDataAndSetLoading();
  }, [activeId]);

  return loading ? (
    <Loading isVisible={true}/>
  ) : (
    <>
      <Header headerTitle={`Фильмы - ${movieAboutDetails.title}`} />
      <Box className="movieAboutPage">
        <Box className="moviePoster">
          <Box className="movie-poster">
            <img src={getImageUrl(movieAboutDetails.poster_path)} alt="movie" />
          </Box>
        </Box>
        <Box>
          <Box className="movieTitle">
            <Typography
              variant="h4"
              component="h2"
              className="movieDetailsItem"
            >
              {movieAboutDetails.title} (
              {movieAboutDetails.release_date.split("-")[0]})
            </Typography>
            <IconButton className="backButton">
              <StarIcon />
            </IconButton>
          </Box>
          <Link to="/">
            <IconButton className="backButton">
              <ArrowBack />
            </IconButton>
          </Link>

          <Box className="actorsContainer">
            <MovieAboutActors movieAboutCredits={movieAboutCredits} />
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              className="movieDetailsItem"
              sx={{marginBottom: '20px'}}
            >
              Детали
            </Typography>

            <MovieAboutDetails
              movieAboutDetails={movieAboutDetails}
              movieAboutCredits={movieAboutCredits}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
