import { useEffect, useState } from "react";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";

export default function Fournisseur() {
  const [dataFournisseur, setDataFournisseur] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/sfac/api/fournisseur/allFournisseurs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDataFournisseur(data);
      });
  }, []);
  console.log(dataFournisseur);
  return (
    <main>
      <FournisseurTableau />
    </main>
  );
}
