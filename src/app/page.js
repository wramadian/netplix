"use client";
import { HeroCard, MovieList } from "@/components";
import useMovieStore from "@/states/movieState";
import { getMovieList } from "@/utils/api";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import useAlertStore from "../states/alertState";

export default function Home() {
  const { handleOpenAlert } = useAlertStore();
  const { handleSetSelectedMovie } = useMovieStore();

  const [movieList, setMovieList] = useState({});

  const handleClick = (movie) => {
    handleOpenAlert();
    handleSetSelectedMovie(movie);
  };

  useEffect(() => {
    getMovieList().then(setMovieList);
  }, []);

  return (
    <main>
      <Stack spacing={2}>
        <Stack direction="row" gap={2}>
          {movieList?.results?.slice(0, 5).map((movie) => {
            return (
              <HeroCard
                data={movie}
                key={movie.id}
              />
            );
          })}
        </Stack>
        <MovieList movieList={movieList} handleClick={handleClick} />
      </Stack>
    </main>
  );
}
