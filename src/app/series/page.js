"use client"
import { FilmCard } from "@/components";
import useAlertStore from "@/states/alertState";
import useMovieStore from '@/states/movieState';
import { getSeriesList } from '@/utils/api';
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from 'react';

const page = () => {
  const { handleOpenAlert } = useAlertStore();
  const { handleSetSelectedMovie } = useMovieStore();

  const [seriesList, setSeriesList] = useState({});

  const handleClick = (movie) => () => {
    handleOpenAlert();
    handleSetSelectedMovie(movie);
  };

  useEffect(() => {
    getSeriesList().then(setSeriesList);
  }, []);

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Series</Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {seriesList?.results?.map((movie) => {
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
