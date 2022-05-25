import { useEffect, useState } from "react";

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
      <h1>Fournisseurs</h1>
    </main>
  );
}
