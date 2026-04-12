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
        backgroundColor: "#fff",
        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Imagen */}
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 240,
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      <CardContent sx={{ p: 3 }}>
        {/* Nombre */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#1a1a1a",
            mb: 1,
            minHeight: 48,
          }}
        >
          {product.name}
        </Typography>

        {/* Categoría */}
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            mb: 2,
          }}
        >
          {product.category}
        </Typography>

        {/* Precio + botón */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#111",
            }}
          >
            ${product.price}
          </Typography>

          <Button
            variant="contained"
            size="small"
            onClick={() => addToCart(product)}
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              px: 2,
              backgroundColor: "#111",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Añadir
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
