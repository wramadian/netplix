"use client";
import useMovieStore from "@/states/movieState";
import styled from "@emotion/styled";
import { SearchRounded } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [openSearch, setOpenSearch] = useState(false);

  const { keyword, setKeyword } = useMovieStore();

  const handleOpenSearch = () => {
    setOpenSearch((prev) => !prev);
  };

  const handleSetKeyword = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <NavbarContainer
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack direction="row" alignItems="center" gap={5}>
        <Link href="/">
          <Typography variant="h4" color="red" fontWeight="800">
            NETPLIX
          </Typography>
        </Link>
        <Link href="/series">
          <Typography>Series</Typography>
        </Link>
        <Link href="/movies">
          <Typography>Movies</Typography>
        </Link>
      </Stack>
      {openSearch ? (
        <TextField
          placeholder="cari..."
          sx={{
            border: "1px solid white",
            ".MuiInputBase-input": {
              color: "#E6E6E6",
            },
          }}
          size="small"
          onBlur={handleOpenSearch}
          onChange={handleSetKeyword}
          value={keyword}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              router.push("/search");
              handleOpenSearch();
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded sx={{ color: "#E6E6E6" }} />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <IconButton onClick={handleOpenSearch}>
          <SearchRounded sx={{ color: "#E6E6E6" }} />
        </IconButton>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled(Stack)`
  flex: 1;
  padding: 8px 16px;
  background-color: #242424;
`;
