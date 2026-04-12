import { Stack, Chip } from "@mui/material";

const CategoryFilter = ({ categories, selected, setSelected }) => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      <Chip
        label="Todos"
        clickable
        color={selected === "Todos" ? "primary" : "default"}
        onClick={() => setSelected("Todos")}
      />

      {categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          clickable
          color={selected === cat ? "primary" : "default"}
          onClick={() => setSelected(cat)}
        />
      ))}
    </Stack>
  );
};

export default CategoryFilter;
