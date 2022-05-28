import React, { useEffect, useState } from "react";
import FournisseurCard from "../FournisseurCard/FournisseurCard";
import "./FournisseurTableau.css";
import trashIcone from "../../assets/icones/red/trash_red.svg";
import editIcone from "../../assets/icones/edit_icone.svg";
import ModalAddFournisseur from "../ModalAddFournisseur/ModalAddFournisseur";
import axios from "axios";

export default function FournisseurTableau(props) {
  const [fournisseurData, setFournisseurData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sfac/api/fournisseur/allFournisseurs")
      .then((res) => setFournisseurData(res.data));
  }, []);

  console.log(fournisseurData);

  return (
    <section className="fournisseur-tableau">
      <div className="fournisseur-tableau__top">
        <h1>{props.txt}</h1>
      </div>
      <div className="fournisseur-tableau__content">
        {fournisseurData.map((fournisseur, index) => (
          <FournisseurCard key={fournisseur.id}>
            <div className="fourniseur-card__image-container">
              <img src={"http://localhost:5000/" + fournisseur.image} alt="" />
            </div>
            <div className="fournisseur-card__content">
              <h3>{fournisseur.nom}</h3>
              <p>{fournisseur.adresse}</p>

              <div className="fournisseur-card__footer">
                <ModalAddFournisseur
                  icone={editIcone}
                  modalTitle={"modifier le  fournisseur"}
                >
                  <label htmlFor="name"></label>
                  <input type="text" />
                </ModalAddFournisseur>

                <ModalAddFournisseur
                  icone={trashIcone}
                  modalTitle={"supprimer le  fournisseur"}
                />
              </div>
            </div>
          </FournisseurCard>
        ))}
      </div>
    </section>
  );
}
