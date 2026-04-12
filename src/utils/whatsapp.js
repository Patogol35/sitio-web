export const sendToWhatsApp = (product) => {
  const phone = "593997979099"; 

  const message = `Hola, quiero comprar:
Producto: ${product.name}
Precio: $${product.price}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
