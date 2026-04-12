import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        maxWidth: 300,
        mx: "auto", // 🔥 centra la card
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            maxHeight: "90%",
            maxWidth: "90%",
            objectFit: "contain", // 🔥 NO se deforma
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      {/* Contenido */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ color: "#888", mb: 1 }}
          >
            {product.category}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "#111",
              minHeight: 48,
            }}
          >
            {product.name}
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            ${product.price}
          </Typography>

          <Button
            fullWidth
            variant="contained"
            onClick={() => addToCart(product)}
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              backgroundColor: "#111",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Añadir al carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
