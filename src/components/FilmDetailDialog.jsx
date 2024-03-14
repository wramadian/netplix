"use client";
import useAlertStore from "@/states/alertState";
import useMovieStore from "@/states/movieState";
import styled from "@emotion/styled";
import { CloseRounded } from "@mui/icons-material";
import { Dialog, IconButton, Stack, Typography } from "@mui/material";

const FilmDetailDialog = () => {
  const { openAlert, handleOpenAlert } = useAlertStore();
  const { selectedMovie } = useMovieStore();

  return (
    <Dialog open={openAlert} maxWidth="md">
      <FilmDetailContainer spacing={2}>
        <Stack alignItems="flex-end">
          <IconButton onClick={handleOpenAlert}>
            <CloseRounded sx={{ color: "#E6E6E6" }} />
          </IconButton>
        </Stack>
        <iframe
          width="100%"
          style={{ aspectRatio: '4/3'}}
          src="https://www.youtube.com/embed/njX2bu-_Vw4"
        ></iframe>
        <Typography variant="h5" color="#E6E6E6">
          {selectedMovie.title || selectedMovie.original_name}
        </Typography>
        <Typography variant="body1" color="#E6E6E6">
          {selectedMovie.overview}
        </Typography>
      </FilmDetailContainer>
    </Dialog>
  );
};

export default FilmDetailDialog;

const FilmDetailContainer = styled(Stack)`
  background-color: #242424;
  min-width: 50vw;
  padding: 32px;
`;
