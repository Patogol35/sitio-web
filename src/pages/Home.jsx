import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Catálogo</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  }
};

export default Home;
