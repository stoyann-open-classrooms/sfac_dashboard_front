import React from "react";
import "./TabnleauCommandes.css";
export default function TableauCommandes() {
  return (
    <section className="tableau-commandes">
      <div className="top">
        <h1>Commandes en cours</h1>
        <form className="container-searchbar">
          <label htmlFor="searchbar">Rechercher une commande</label>
          <input id="searchbar" />
        </form>
      </div>
      <div className="body"></div>
    </section>
  );
}
