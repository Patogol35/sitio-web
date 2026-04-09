import { Box, Container, Typography, Grid } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const About = () => {
  return (
    <Container sx={{ my: { xs: 6, md: 10 } }}>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
      >
        {/* IMAGEN */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
            alt="Veterinaria"
            sx={{
              width: "100%",
              maxWidth: 350,
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>

        {/* TEXTO */}
        <Grid item xs={12} md={6}>
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Sobre Nosotros 🐾
            </Typography>

            <Typography sx={{ mb: 3, opacity: 0.8 }}>
              Somos una veterinaria comprometida con la salud y bienestar de
              tus mascotas, brindando atención profesional con amor,
              experiencia y dedicación.
            </Typography>

            {/* VALORES */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <PetsIcon sx={{ fontSize: 40, color: "#2E7D32" }} />
                  <Typography fontWeight="bold">Cuidado</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    Atención personalizada
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <FavoriteIcon sx={{ fontSize: 40, color: "#2E7D32" }} />
                  <Typography fontWeight="bold">Amor</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    Tratamos como familia
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <MedicalServicesIcon sx={{ fontSize: 40, color: "#2E7D32" }} />
                  <Typography fontWeight="bold">Experiencia</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    Profesionales calificados
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
