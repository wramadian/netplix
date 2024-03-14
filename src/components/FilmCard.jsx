'use client'
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const FilmCard = ({ onClick }) => {
  return <Card onClick={onClick}>FilmCard</Card>;
};

export default FilmCard;

const Card = styled(Box)`
  background-color: red;
  padding: 12px;
  width: 10vw;
  aspect-ratio: 2/3;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`