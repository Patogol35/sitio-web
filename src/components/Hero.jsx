import { Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Container sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h3">Cuidamos a tus mascotas</Typography>
      <Typography variant="h6">
        Atención profesional y amorosa
      </Typography>
    </Container>
  );
};

export default Hero;
