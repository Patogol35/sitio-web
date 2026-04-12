import { Box, Container, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
        color: "#fff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {/* TEXTO */}
          <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              Cuidamos a tus mascotas 🐶🐱
            </Typography>

            <Typography
              sx={{
                my: 3,
                fontSize: { xs: "1rem", md: "1.2rem" },
                opacity: 0.9,
              }}
            >
              Atención veterinaria profesional con amor, confianza y experiencia
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
          </Box>

          {/* IMAGEN */}
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="Mascota"
              sx={{
                width: { xs: 150, md: 250 },
                animation: "float 3s ease-in-out infinite",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* ANIMACIÓN */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;
