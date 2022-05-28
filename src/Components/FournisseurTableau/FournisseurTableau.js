import React from "react";

import "./FournisseurTableau.css";

export default function FournisseurTableau(props) {
  return (
    <section className="fournisseur-tableau">
      <div className="fournisseur-tableau__top">
        <h1>{props.txt}</h1>
      </div>
      <div className="fournisseur-tableau__content">{props.children}</div>
    </section>
  );
}
