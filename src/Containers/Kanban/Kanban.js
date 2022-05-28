import React from "react";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import AddIcone from "../../assets/icones/red/add_red.png";

export default function Kanban() {
  return (
    <main>
      <ModalAddFournisseur icone={AddIcone} modalTitle={"Ajouter un Kanban"} />
    </main>
  );
}
