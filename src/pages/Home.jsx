import { useState, useMemo } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper
} from "@mui/material";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "Todos" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <Box sx={{ bgcolor: "#f5f7fb", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        {/* HERO */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 4,
            background: "linear-gradient(135deg, #1976d2, #42a5f5)",
            color: "white",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Catálogo de Productos
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Compra fácil y rápido por WhatsApp 🚀
          </Typography>
        </Paper>

        {/* FILTROS */}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 4,
          }}
        >
          <Box mb={2}>
            <SearchBar search={search} setSearch={setSearch} />
          </Box>

          <CategoryFilter
            categories={categories}
            selected={category}
            setSelected={setCategory}
          />
        </Paper>

        {/* PRODUCTOS */}
        <Grid container spacing={3}>
          {filtered.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
