import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4">Sobre Nosotros</Typography>
      <Typography>
        Somos una veterinaria con experiencia y amor por los animales.
      </Typography>
    </Container>
  );
};

export default About;
