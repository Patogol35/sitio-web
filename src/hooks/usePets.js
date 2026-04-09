import { useState, useEffect } from "react";

const usePets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets([
      { id: 1, name: "Max", type: "Perro" },
      { id: 2, name: "Luna", type: "Gato" }
    ]);
  }, []);

  const addPet = (pet) => {
    setPets([...pets, { ...pet, id: Date.now() }]);
  };

  return { pets, addPet };
};

export default usePets;
