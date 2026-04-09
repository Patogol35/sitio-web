import { Card, CardContent, Typography } from "@mui/material";

const PetCard = ({ pet }) => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">{pet.name}</Typography>
        <Typography>{pet.type}</Typography>
      </CardContent>
    </Card>
  );
};

export default PetCard;
