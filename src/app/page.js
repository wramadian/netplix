"use client";
import { FilmCard, FilmDetailDialog, HeroCard } from "@/components";
import { Stack, Typography } from "@mui/material";
import useAlertStore from "../states/alertState";

export default function Home() {
  const { handleOpenAlert } = useAlertStore();

  const handleClick = () => {
    handleOpenAlert()
  }

  return (
    <main>
      <Stack spacing={2}>
        <HeroCard onClick={handleClick} />
        <Typography variant="h5">Category</Typography>
        <FilmCard onClick={handleClick} />
      </Stack>
    </main>
  );
}
