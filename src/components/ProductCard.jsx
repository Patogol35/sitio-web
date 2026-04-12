import { sendToWhatsApp } from "../utils/whatsapp";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={() => sendToWhatsApp(product)} style={styles.button}>
        Pedir por WhatsApp
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center"
  },
  image: {
    width: "100%",
    borderRadius: "10px"
  },
  button: {
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductCard;
