import { Grid } from "@mui/material";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  return (
    <Grid container spacing={2}>
      {pets.map((pet) => (
        <Grid item xs={12} md={4} key={pet.id}>
          <PetCard pet={pet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PetList;
