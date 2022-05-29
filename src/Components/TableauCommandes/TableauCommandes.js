import React from "react";
import CardCommande from "../CardCommande/CardCommande";
import "./TabnleauCommandes.css";
export default function TableauCommandes() {
  return (
    <section className="tableau-commandes">
      <div className="top">
        <h1>Commandes en cours</h1>
        <form className="container-searchbar">
          {/* <label htmlFor="searchbar">Rechercher une commande</label> */}
          <input id="searchbar" />
        </form>
      </div>
      <div className="body">
        <CardCommande>
          <hgroup>
            <h3>Commande Kanban A34</h3>
            <h4>
              Jours avant retard : <span>5</span>
            </h4>
          </hgroup>
          <ul>
            <li>
              <p>Produit</p>
              <p>1DHHSZ8</p>
            </li>
            <li>
              <p>Kanban</p>
              <p>A34</p>
            </li>
            <li>
              <p>Demande</p>
              <p>12/05/22</p>
            </li>
            <li>
              <p>Commande</p>
              <p>13/05/22</p>
            </li>
            <li>
              <p>Fournisseur</p>
              <p>en cours</p>
            </li>
            <li>
              <p>Date prevu</p>
              <p>12/07/22</p>
            </li>
            <li>
              <p>Retard</p>
              <p>Non</p>
            </li>
          </ul>
        </CardCommande>
      </div>
    </section>
  );
}
