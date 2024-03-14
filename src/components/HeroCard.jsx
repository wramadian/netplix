"use client";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

const HeroCard = ({ onClick }) => {
  return (
    <Card>
      <Stack
        alignItems="flex-end"
        justifyContent="flex-end"
        sx={{ width: "100%", height: "100%", padding: 3 }}
        onClick={onClick}
      >
        <Stack spacing={1} sx={{ width: "60%", height: "fit-content" }}>
          <Typography variant="h4">Judul Film</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum modi
            dicta deserunt natus praesentium magnam repudiandae molestiae
            dolorum inventore id cupiditate, sapiente atque commodi, ipsam sunt
            culpa quae voluptates reiciendis quia debitis eius doloremque,
            reprehenderit rem. Culpa quaerat ipsa hic ullam quibusdam.
            Repellendus pariatur earum nisi sint.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default HeroCard;

const Card = styled(Stack)`
  background-color: red;
  padding: 12px;
  width: 70vw;
  aspect-ratio: 3/1;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  :hover {
    cursor: pointer;
  }
`;
