"use client";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

const HeroCard = ({ onClick, data }) => {
  return (
    <Box
      sx={{
        minWidth: "70vw",
        maxWidth: "70vw",
        height: 300,
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.backdrop_path}')`,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundSize: 'cover'
      }}
    >
      <Card>
        <Stack
          alignItems="flex-start"
          justifyContent="flex-end"
          sx={{ width: "100%", height: "100%", padding: 3 }}
          onClick={onClick}
        >
          <Stack spacing={1} sx={{ width: "60%", height: "fit-content" }}>
            <Typography variant="h4">{data?.title}</Typography>
            <Typography variant="body1">{data?.overview}</Typography>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default HeroCard;

const Card = styled(Stack)`
  background-color: #00000090;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  :hover {
    cursor: pointer;
  }
`;
