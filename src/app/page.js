"use client";
import { HeroCard, MovieList } from "@/components";
import useMovieStore from "@/states/movieState";
import { getMovieList } from "@/utils/api";
import { Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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

  const [activeIndex, setActiveIndex] = useState(2);
  const heroRef = useRef(null);

  const scrollToCenter = (index) => {
    if (!heroRef.current || !heroRef.current.firstChild) return;

    const containerWidth = heroRef.current.offsetWidth;
    const itemWidth = heroRef.current.firstChild.offsetWidth;
    const scrollTo = itemWidth * index - containerWidth / 2 + itemWidth / 2;
    heroRef.current.scrollLeft = scrollTo;
    setActiveIndex(index);
  };

  useEffect(() => {
    scrollToCenter(activeIndex);
  }, [activeIndex]);

  return (
    <main>
      <Stack spacing={2}>
        <Stack
          direction="row"
          gap={2}
          ref={heroRef}
          style={{ overflow: "hidden", scrollBehavior: "smooth" }}
        >
          {movieList?.results?.slice(0, 5).map((movie, index) => (
            <div onClick={() => scrollToCenter(index)} key={movie.id}>
              <HeroCard data={movie} />
            </div>
          ))}
        </Stack>
        <MovieList movieList={movieList} handleClick={handleClick} />
      </Stack>
    </main>
  );
}
