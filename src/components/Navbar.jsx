import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#2E7D32" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          🐾 VetCare
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            Mascotas
          </Button>
          <Button color="inherit" component={Link} to="/contacto">
            Contacto
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
