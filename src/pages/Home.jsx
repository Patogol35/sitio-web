import { Box, Typography, Button, Container } from "@mui/material";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
  return (
    <Box>

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <Box sx={{ backgroundColor: "#fff" }}>
        <About />
      </Box>

      {/* SERVICES */}
      <Services />

      {/* CTA FINAL */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 10 },
          background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
          color: "#fff",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            ¿Listo para cuidar a tu mascota? 🐾
          </Typography>

          <Typography sx={{ opacity: 0.9, mb: 4 }}>
            Agenda una cita con nuestros especialistas de confianza
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#fff",
              color: "#2E7D32",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              "&:hover": {
                backgroundColor: "#f1f1f1",
              },
            }}
          >
            Agendar cita
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default Home;
