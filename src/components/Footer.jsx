import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1B5E20",
        color: "#fff",
        mt: 5,
        pt: 5,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* LOGO / INFO */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              🐾 VetCare
            </Typography>
            <Typography variant="body2">
              Cuidamos la salud y bienestar de tus mascotas con amor ❤️
            </Typography>
          </Grid>

          {/* NAVEGACIÓN */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Navegación
            </Typography>

            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink component={Link} to="/" color="inherit" underline="hover">
                Inicio
              </MuiLink>
              <MuiLink
                component={Link}
                to="/dashboard"
                color="inherit"
                underline="hover"
              >
                Mascotas
              </MuiLink>
              <MuiLink
                component={Link}
                to="/contacto"
                color="inherit"
                underline="hover"
              >
                Contacto
              </MuiLink>
            </Box>
          </Grid>

          {/* CONTACTO */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contacto
            </Typography>

            <Box display="flex" gap={1}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <WhatsAppIcon />
              </IconButton>
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
            </Box>

            <Typography variant="body2" mt={1}>
              contacto@vetcare.com
            </Typography>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box textAlign="center" mt={4} borderTop="1px solid rgba(255,255,255,0.2)" pt={2}>
          <Typography variant="body2">
            © {new Date().getFullYear()} VetCare - Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
