"use client";
import useAlertStore from "@/states/alertState";
import styled from "@emotion/styled";
import { CloseRounded } from "@mui/icons-material";
import { Dialog, IconButton, Stack, Typography } from "@mui/material";

const FilmDetailDialog = () => {
  const { openAlert, handleOpenAlert } = useAlertStore();

  return (
    <Dialog open={openAlert} maxWidth="md">
      <FilmDetailContainer spacing={2}>
        <Stack alignItems="flex-end">
          <IconButton onClick={handleOpenAlert}>
            <CloseRounded sx={{color: '#E6E6E6'}} />
          </IconButton>
        </Stack>
        <>Video</>
        <Typography variant="h5" color='#E6E6E6'>Judul Film</Typography>
        <Typography variant="body1" color='#E6E6E6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum id
          eveniet vel, dolores iste laborum beatae quam aspernatur aliquid,
          porro quod voluptatibus atque excepturi quas eius? Magni itaque
          aliquid minima eaque dicta inventore, aut doloremque quaerat
          temporibus quasi quisquam repellendus aperiam deleniti quis nam
          aspernatur reiciendis. Delectus dolor minus maiores?
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
