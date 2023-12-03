import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { fetchData } from "../fetch/fetch";
import { usePagination } from "../pagination/PaginationContext";
import { useSelect } from "../filter/select/SelectContext";
import { useMovieId } from "./FilmCardContext";
import { getImageUrl } from "../fetch/utils/getImageUrl";
import { Loading } from "../loadingWindow/Loading";

export function FilmCardsList() {
  const { activePage } = usePagination();
  const { activeSelect } = useSelect();
  const { onCardClick } = useMovieId();
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const popularUrl = `https://api.themoviedb.org/3/movie/popular?language=ru-US&page=${activePage}`;
  const ratingUrl = `https://api.themoviedb.org/3/movie/top_rated?language=ru-US&page=${activePage}`;

  useEffect(() => {
    async function fetchMovies() {
      let url = "";
      activeSelect === "popular" ? (url = popularUrl) : (url = ratingUrl);
      const data = await fetchData(url);
      setMoviesData(data.results);
    }

    const fetchDataAndSetLoading = async () => {
      setLoading(true);
      await fetchMovies();
      setLoading(false);
    };

    fetchDataAndSetLoading();
  }, [activePage, activeSelect, popularUrl, ratingUrl]);

  return loading ? (
    <Loading movieTitle={"Фильмы"} />
  ) : (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "24px",
        justifyContent: "space-around",
        alignItems: "stretch",
        padding: "16px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {moviesData.map((movieItem) => (
        <FilmCard
          key={movieItem.id}
          image={getImageUrl(movieItem.poster_path)}
          movieName={movieItem.title}
          raiting={`Рейтинг ${movieItem.vote_average}`}
          onClick={() => {
            onCardClick(movieItem.id);
            localStorage.setItem("activeId", movieItem.id);
          }}
        />
      ))}
    </Box>
  );
}
