import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext";
import { sendCartToWhatsApp } from "../utils/whatsapp";

const CartDrawer = ({ isOpen, closeCart }) => {
  const { cart, removeFromCart, total } = useCart();

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
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`${item.quantity} x $${item.price}`}
              />
              <Button onClick={() => removeFromCart(item.id)} color="error">
                Eliminar
              </Button>
            </ListItem>
          ))}
        </List>

        <Typography variant="h6">Total: ${total}</Typography>

        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          onClick={() => sendCartToWhatsApp(cart, total)}
        >
          Pedir por WhatsApp
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
