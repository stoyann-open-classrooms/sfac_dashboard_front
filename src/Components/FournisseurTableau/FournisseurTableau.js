import React, { useEffect, useState } from "react";
import FournisseurCard from "../FournisseurCard/FournisseurCard";
import "./FournisseurTableau.css";
import trashIcone from "../../assets/icones/red/trash_red.svg";
import editIcone from "../../assets/icones/edit_icone.svg";

export default function FournisseurTableau(props) {
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
        <h1>{props.txt}</h1>
      </div>
      <div className="fournisseur-tableau__content">
        {/* {dataFournisseur.map((fournisseur, index) => (
            <FournisseurCard key={fournisseur.id}>
            <h3> {fournisseur.nom} </h3>
            </FournisseurCard>
        ))} */}
        <FournisseurCard>
          <div className="fourniseur-card__image-container"></div>
          <div className="fournisseur-card__content">
            <h3>Auxilis</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              excepturi.
            </p>
            <div className="fournisseur-card__footer">
              <button className="btn-fournisseur-card">
                <img src={editIcone} alt="" />
              </button>
              <button className="btn-fournisseur-card">
                <img src={trashIcone} alt="" />
              </button>
            </div>
          </div>
        </FournisseurCard>
      </div>
    </section>
  );
}
