import React from "react";
import CardRetardFournisseur from "../CardRetardFournisseur/CardRetardFournisseur";
import "./RetardFournisseur.css";
export default function RetardFournisseur() {
  return (
    <section className="retard-fournisseur-container">
      <div className="header-retard">
        <h4>Fournisseurs en retard</h4>
      </div>

      <div className="container-card">
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
        <CardRetardFournisseur />
      </div>
    </section>
  );
}
