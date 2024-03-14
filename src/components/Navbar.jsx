"use client";
import styled from "@emotion/styled";
import { SearchRounded } from "@mui/icons-material";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch((prev) => !prev)
  }

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
        <Typography>Genre</Typography>
      </Stack>
      {
        openSearch ?
        <TextField 
          placeholder='cari...'
          sx={{border: '1px solid white'}}
          size='small'
          onBlur={handleOpenSearch}
        /> :
        <IconButton onClick={handleOpenSearch}>
          <SearchRounded sx={{ color: "#E6E6E6" }} />
        </IconButton>
      }
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled(Stack)`
  flex: 1;
  padding: 8px 16px;
  background-color: #242424;
`;
