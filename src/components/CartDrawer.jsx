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
    decreaseQuantity
  } = useCart();

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeCart}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box display="flex" justifyContent="space-between">
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
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
                borderBottom: "1px solid #eee"
              }}
            >
              <Typography fontWeight="bold">{item.name}</Typography>

              <Typography variant="body2">
                ${item.price} c/u
              </Typography>

              {/* CONTROLES */}
              <Box display="flex" alignItems="center" gap={1}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>

                <Typography>{item.quantity}</Typography>

                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => increaseQuantity(item.id)}
                  disabled={item.quantity >= item.stock}
                >
                  +
                </Button>
              </Box>

              {/* STOCK */}
              <Typography variant="caption" color="text.secondary">
                Stock disponible: {item.stock}
              </Typography>

              <Button
                onClick={() => removeFromCart(item.id)}
                color="error"
                size="small"
              >
                Eliminar
              </Button>
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Total: ${total}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          onClick={() => sendCartToWhatsApp(cart, total)}
          disabled={cart.length === 0}
        >
          Pedir por WhatsApp
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
