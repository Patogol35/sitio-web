import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const PetCard = ({ pet }) => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar>{pet.name[0]}</Avatar>
          <Box>
            <Typography variant="h6">{pet.name}</Typography>
            <Typography color="text.secondary">{pet.type}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PetCard;
