import React from "react";
import "./FournisseurCard.css";
export default function FournisseurCard(props) {
  return (
    <div className="fournisseur-card">
      {/* <div className="fourniseur-card__image-container"></div>
      <div className="fournisseur-card__content">
        <h3>AUXILIS</h3>

        <a href="https://www.auxillis.com/">voir le site</a>
        <div className="fournisseur-card__footer">
          <button>modifier</button>
          <button>supprimer</button>
        </div>
      </div> */}
      {props.children}
    </div>
  );
}
