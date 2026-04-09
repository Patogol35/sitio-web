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
        background: "linear-gradient(135deg, #1B5E20, #2E7D32)",
        color: "#fff",
        mt: 6,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          
          {/* LOGO */}
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              🐾 VetCare
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Cuidamos la salud y bienestar de tus mascotas con amor ❤️
            </Typography>
          </Grid>

          {/* NAVEGACIÓN */}
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              gap={3}
              flexWrap="wrap"
            >
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

          {/* REDES */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                sx={{
                  color: "#fff",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#fff",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <WhatsAppIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#fff",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>

            <Typography variant="body2" mt={1} sx={{ opacity: 0.8 }}>
              contacto@vetcare.com
            </Typography>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box
          textAlign="center"
          mt={4}
          pt={2}
          sx={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} VetCare - Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
