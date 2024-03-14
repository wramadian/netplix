"use client";
import { FilmCard } from "@/components";
import useAlertStore from "@/states/alertState";
import useMovieStore from '@/states/movieState';
import { getMovieList } from "@/utils/api";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const page = () => {
  const { handleOpenAlert } = useAlertStore();
  const { handleSetSelectedMovie } = useMovieStore();

  const [movieList, setMovieList] = useState({});

  const handleClick = (movie) => () => {
    handleOpenAlert();
    handleSetSelectedMovie(movie);
  };

  useEffect(() => {
    getMovieList().then(setMovieList);
  }, []);

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Movies</Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {movieList?.results?.map((movie) => {
          return (
            <FilmCard
              onClick={handleClick(movie)}
              data={movie}
              key={movie.id}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default page;
