import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  List,
  ListItem
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext";
import { sendCartToWhatsApp } from "../utils/whatsapp";

const CartDrawer = ({ isOpen, closeCart }) => {
  const {
    cart,
    removeFromCart,
    total,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart();

  const handleOrder = () => {
    sendCartToWhatsApp(cart, total);
    clearCart(); // 🧹 limpia carrito después de comprar
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeCart}>
      <Box sx={{ width: 360, p: 2 }}>
        
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Carrito</Typography>
          <IconButton onClick={closeCart}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {cart.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderBottom: "1px solid #eee",
                py: 2,
              }}
            >
              {/* Imagen */}
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 60,
                  height: 60,
                  objectFit: "contain",
                  bgcolor: "#f5f5f5",
                  borderRadius: 2,
                  p: 1,
                }}
              />

              <Box flex={1}>
                <Typography fontWeight="bold" fontSize={14}>
                  {item.name}
                </Typography>

                <Typography variant="body2">
                  ${item.price}
                </Typography>

                {/* Controles */}
                <Box display="flex" gap={1} mt={1}>
                  <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                </Box>
              </Box>

              <Button
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </Button>
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" mt={2}>
          Total: ${total}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleOrder}
          disabled={cart.length === 0}
        >
          Pedir por WhatsApp
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
