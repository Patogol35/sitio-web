import { Container, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Contáctanos
      </Typography>

      <TextField label="Nombre" fullWidth sx={{ mb: 2 }} />
      <TextField label="Email" fullWidth sx={{ mb: 2 }} />
      <TextField label="Mensaje" multiline rows={4} fullWidth sx={{ mb: 2 }} />

      <Button variant="contained">Enviar</Button>
    </Container>
  );
};

export default Contact;
