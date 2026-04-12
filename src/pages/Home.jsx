import { useState, useMemo } from "react";
import {
  Container,
  Grid,
  Typography,
  Box
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
      const matchCategory =
        category === "Todos" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        
        {/* Título */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "#111",
          }}
        >
          Catálogo
        </Typography>

        {/* Filtros */}
        <Box sx={{ mb: 5 }}>
          <Box sx={{ mb: 2 }}>
            <SearchBar search={search} setSearch={setSearch} />
          </Box>

          <CategoryFilter
            categories={categories}
            selected={category}
            setSelected={setCategory}
          />
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
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
