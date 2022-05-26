import React, { useEffect, useState } from "react";
import FournisseurCard from "../FournisseurCard/FournisseurCard";
import "./FournisseurTableau.css";
// import AddIcone from "../../assets/icones/red/add_red.png";

export default function FournisseurTableau() {
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
    <section className="fournisseur-tableau">
      <div className="fournisseur-tableau__top">
        <h1>Fournisseurs</h1>
      </div>
      <div className="fournisseur-tableau__content">
        {/* {dataFournisseur.map((fournisseur, index) => (
            <FournisseurCard key={fournisseur.id}>
            <h3> {fournisseur.nom} </h3>
            </FournisseurCard>
        ))} */}
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
        <FournisseurCard></FournisseurCard>
      </div>
    </section>
  );
}
