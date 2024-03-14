"use client";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { FilmCard } from ".";
import styled from '@emotion/styled';
import { useRef } from 'react';

const MovieList = ({ movieList, handleClick }) => {
  const movieListRef = useRef(null);

  const scroll = (direction) => (e) => {
    e.preventDefault();
    if (direction === "left") {
      movieListRef.current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      movieListRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <>
      <Typography variant="h5">Popular</Typography>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CustomButton sx={{ left: 0 }} onClick={scroll("left")}>
          <ArrowBackIosNewRounded />
        </CustomButton>
        <Stack
          direction="row"
          gap={2}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          ref={movieListRef}
        >
          {movieList?.results?.map((movie) => {
            return (
              <FilmCard
                onClick={() => handleClick(movie)}
                data={movie}
                key={movie.id}
              />
            );
          })}
        </Stack>
        <CustomButton sx={{ right: 0 }} onClick={scroll("right")}>
          <ArrowForwardIosRounded />
        </CustomButton>
      </Box>
    </>
  );
};

export default MovieList;

const CustomButton = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 80px;
  background-color: #00000099;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 1;
  }
`;
