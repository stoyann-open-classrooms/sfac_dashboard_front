import React from "react";
import "./FournisseurTableau.css";
export default function FournisseurTableau() {
  return (
    <section className="fournisseur-tableau">
      <div className="fournisseur-tableau__top">
        {" "}
        <h1>Fournisseurs</h1>
      </div>{" "}
      <div className="fournisseur-tableau__content"></div>{" "}
    </section>
  );
}
