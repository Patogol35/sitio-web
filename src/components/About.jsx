import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const values = [
  {
    title: "Cuidado",
    desc: "Atención personalizada para cada mascota",
    icon: <PetsIcon sx={{ fontSize: 35 }} />,
  },
  {
    title: "Amor",
    desc: "Tratamos a tus mascotas como familia",
    icon: <FavoriteIcon sx={{ fontSize: 35 }} />,
  },
  {
    title: "Experiencia",
    desc: "Profesionales altamente capacitados",
    icon: <MedicalServicesIcon sx={{ fontSize: 35 }} />,
  },
];

const About = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* TEXTO */}
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.9rem", md: "2.4rem" },
                }}
              >
                Sobre Nosotros 🐾
              </Typography>

              <Typography
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                Somos una clínica veterinaria dedicada al cuidado integral de
                tus mascotas, ofreciendo servicios profesionales con un enfoque
                humano, cercano y de confianza.
              </Typography>

              {/* VALORES EN CARDS */}
              <Grid container spacing={2}>
                {values.map((item, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <Card
                      sx={{
                        textAlign: "center",
                        p: 2,
                        borderRadius: 3,
                        boxShadow: 1,
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ color: "#2E7D32", mb: 1 }}>
                          {item.icon}
                        </Box>

                        <Typography fontWeight="bold">
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

            </Box>
          </Grid>

          {/* IMAGEN */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
              alt="Veterinaria"
              sx={{
                width: "100%",
                maxWidth: 380,
                display: "block",
                margin: "0 auto",
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.1))",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
