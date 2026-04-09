import { Container } from "@mui/material";
import usePets from "../hooks/usePets";
import PetList from "../components/PetList";
import AddPetForm from "../components/AddPetForm";

const Dashboard = () => {
  const { pets, addPet } = usePets();

  return (
    <Container sx={{ my: 4 }}>
      <AddPetForm addPet={addPet} />
      <PetList pets={pets} />
    </Container>
  );
};

export default Dashboard;
