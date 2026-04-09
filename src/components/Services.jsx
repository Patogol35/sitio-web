import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HealingIcon from "@mui/icons-material/Healing";

const services = [
  {
    title: "Consultas",
    description: "Revisión general para mantener sana a tu mascota.",
    icon: <PetsIcon sx={{ fontSize: 50 }} />,
  },
  {
    title: "Vacunas",
    description: "Protección contra enfermedades comunes.",
    icon: <VaccinesIcon sx={{ fontSize: 50 }} />,
  },
  {
    title: "Cirugías",
    description: "Procedimientos seguros con profesionales.",
    icon: <HealingIcon sx={{ fontSize: 50 }} />,
  },
];

const Services = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        
        {/* TITULO */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.3rem" },
            }}
          >
            Nuestros Servicios 🐾
          </Typography>

          <Typography sx={{ opacity: 0.7 }}>
            Cuidamos a tu mascota en cada etapa de su vida
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 4,
                  px: 2,
                  borderRadius: 4,
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  
                  {/* ICONO */}
                  <Box
                    sx={{
                      color: "#2E7D32",
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* TITULO */}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {service.title}
                  </Typography>

                  {/* DESCRIPCIÓN */}
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {service.description}
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

export default Services;
