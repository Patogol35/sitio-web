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
      <Box sx={{ width: 360, p: 2 }}>
        
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Tu carrito
          </Typography>

          <IconButton onClick={closeCart}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* LISTA */}
        <List>
          {cart.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              Tu carrito está vacío
            </Typography>
          )}

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
              {/* 🖼️ Imagen */}
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 60,
                  height: 60,
                  objectFit: "contain",
                  borderRadius: 2,
                  bgcolor: "#f5f5f5",
                  p: 1,
                }}
              />

              {/* INFO */}
              <Box flex={1}>
                <Typography fontWeight="bold" fontSize={14}>
                  {item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  ${item.price} c/u
                </Typography>

                {/* CONTROLES */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </Button>

                  <Typography>{item.quantity}</Typography>

                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => increaseQuantity(item.id)}
                    disabled={item.stock <= 0}
                  >
                    +
                  </Button>
                </Box>

                {/* STOCK */}
                <Typography variant="caption" color="text.secondary">
                  Stock restante: {item.stock}
                </Typography>
              </Box>

              {/* ELIMINAR */}
              <Button
                color="error"
                size="small"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </Button>
            </ListItem>
          ))}
        </List>

        {/* TOTAL */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Total: ${total}
        </Typography>

        {/* WHATSAPP */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 3,
            backgroundColor: "#25D366",
            "&:hover": {
              backgroundColor: "#1ebe5d",
            },
          }}
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
