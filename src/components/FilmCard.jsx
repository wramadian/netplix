"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const FilmCard = ({ onClick, data }) => {
  return (
    <Box
      sx={{
        minWidth: "10vw",
        maxWidth: "10vw",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.poster_path}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: 2,
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      <Card onClick={onClick}>
        <Typography variant="body1" noWrap>
          {data?.title}
        </Typography>
      </Card>
    </Box>
  );
};

export default FilmCard;

const Card = styled(Box)`
  :hover {
    background-color: #00000090;
  }
  padding: 12px;
  aspect-ratio: 2/3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
