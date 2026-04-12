import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// IMPORTANTE
import { CartProvider } from "./context/CartContext";

// MUI (opcional pero recomendado)
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light", // luego puedes poner dark 🔥
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#00c853",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CartProvider>
        <App />
      </CartProvider>

    </ThemeProvider>
  </React.StrictMode>
);
