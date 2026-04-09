import { Container, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        my: 6,
        py: 6,
        background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
        borderRadius: 4,
        color: "white",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Cuidamos a tus mascotas 🐶🐱
      </Typography>

      <Typography sx={{ my: 2 }}>
        Atención veterinaria profesional con amor
      </Typography>

      <Button variant="contained" color="secondary">
        Agendar cita
      </Button>
    </Container>
  );
};

export default Hero;
