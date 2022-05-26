import React from "react";
import CardRecap from "../../Components/CardRecap/CardRecap";
import Graphique from "../../Components/Graphique/Graphique";
import RetardFournisseur from "../../Components/RetardFournisseur/RetardFournisseur";
import TableauCommandes from "../../Components/TableauCommandes/TableauCommandes";
import "./Home.css";
export default function Home() {
  return (
    <main>
      <section className="recap_container">
        <CardRecap txt={"Commandes en cours"} nb={16} />
        <CardRecap txt={"Demandes a traiter"} nb={3} />
        <CardRecap txt={"Commandes en retard"} nb={8} />
      </section>
      <div className="home-body">
        <div className="left">
          <TableauCommandes />
        </div>
        <div className="right">
          <Graphique />
          <RetardFournisseur />
        </div>
      </div>
    </main>
  );
}
