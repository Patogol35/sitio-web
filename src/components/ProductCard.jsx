import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="subtitle2" color="primary">
          {product.category}
        </Typography>

        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography variant="h6" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 2, borderRadius: 3 }}
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
