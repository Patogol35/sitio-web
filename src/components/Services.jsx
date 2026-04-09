import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HealingIcon from "@mui/icons-material/Healing";

const services = [
  { title: "Consultas", icon: <PetsIcon /> },
  { title: "Vacunas", icon: <VaccinesIcon /> },
  { title: "Cirugías", icon: <HealingIcon /> },
];

const Services = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Servicios
      </Typography>

      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: "center", py: 3, borderRadius: 4 }}>
              <CardContent>
                {service.icon}
                <Typography variant="h6">{service.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
