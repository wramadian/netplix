"use client"
import { FilmCard } from "@/components";
import useAlertStore from "@/states/alertState";
import { Stack, Typography } from "@mui/material";

const page = () => {
  const { handleOpenAlert } = useAlertStore();

  const handleClick = () => {
    handleOpenAlert();
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Series</Typography>
      <FilmCard onClick={handleClick} />
    </Stack>
  );
};

export default page;
