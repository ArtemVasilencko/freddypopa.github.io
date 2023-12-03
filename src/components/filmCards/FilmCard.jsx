import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  IconButton,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export function FilmCard({ image, movieName, raiting, onClick }) {
  const [favorite, setFavorite] = useState(false);

  const starColor = favorite ? "primary" : "";
  function handleStarClick(e) {
    e.preventDefault();
    setFavorite(!favorite);
  }

  return (
    <Link to="/filmAbout">
      <Card
        sx={{
          width: "100%",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={onClick}
      >
        <CardActionArea style={{ flex: 1 }}>
          <CardMedia
            component="img"
            height="150px"
            image={image}
            alt={movieName}
            style={{ objectFit: "cover" }}
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600 }}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {movieName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {raiting}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <IconButton onClick={handleStarClick}>
            <StarIcon color={starColor} />
          </IconButton>
        </Box>
      </Card>
    </Link>
  );
}
