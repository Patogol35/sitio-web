import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack
} from "@mui/material";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        transition: "0.3s",
        boxShadow: 3,
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Stack spacing={1}>
          {/* Categoría */}
          <Chip
            label={product.category}
            color="primary"
            size="small"
            sx={{ width: "fit-content" }}
          />

          {/* Nombre */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              minHeight: 50,
            }}
          >
            {product.name}
          </Typography>

          {/* Precio */}
          <Typography
            variant="h5"
            color="success.main"
            fontWeight="bold"
          >
            ${product.price}
          </Typography>

          {/* Stock */}
          <Typography variant="body2" color="text.secondary">
            Stock: {product.stock}
          </Typography>

          {/* Botón */}
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{
              mt: 1,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: "bold",
              py: 1.2,
            }}
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
