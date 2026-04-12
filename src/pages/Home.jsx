import { useState, useMemo } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Catálogo
      </Typography>

      <Box mb={3}>
        <SearchBar search={search} setSearch={setSearch} />
      </Box>

      <Box mb={3}>
        <CategoryFilter
          categories={categories}
          selected={category}
          setSelected={setCategory}
        />
      </Box>

      <Grid container spacing={3}>
        {filtered.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
