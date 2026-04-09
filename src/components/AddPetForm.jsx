import { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddPetForm = ({ addPet }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({ name, type });
    setName("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        Agregar
      </Button>
    </form>
  );
};

export default AddPetForm;
