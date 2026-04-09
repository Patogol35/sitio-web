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
    icon: <PetsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Amor",
    desc: "Tratamos a tus mascotas como familia",
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Experiencia",
    desc: "Profesionales altamente capacitados",
    icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
  },
];

const About = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        
        {/* TITULO */}
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

        {/* TEXTO */}
        <Typography
          sx={{
            mb: 5,
            color: "text.secondary",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Somos una clínica veterinaria dedicada al cuidado integral de tus
          mascotas, brindando atención profesional con amor, confianza y
          experiencia.
        </Typography>

        {/* IMAGEN */}
        <Box
          component="img"
          src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
          alt="Veterinaria"
          sx={{
            width: 120,
            mb: 5,
          }}
        />

        {/* VALORES */}
        <Grid container spacing={3} justifyContent="center">
          {values.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Card
                sx={{
                  borderRadius: 4,
                  py: 4,
                  textAlign: "center",
                  boxShadow: 1,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ color: "#2E7D32", mb: 2 }}>
                    {item.icon}
                  </Box>

                  <Typography fontWeight="bold" mb={1}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default About;
