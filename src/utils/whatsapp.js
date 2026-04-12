export const sendCartToWhatsApp = (cart, total) => {
  const phone = "593997979099"; // tu número real

  const items = cart
    .map(
      (item) =>
        `• ${item.name} x${item.quantity} - $${item.price * item.quantity}`
    )
    .join("\n");

  const message = `Hola 👋 quiero realizar el siguiente pedido:%0A%0A${items}%0A%0ATotal: $${total}`;

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
};
