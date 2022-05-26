import React from "react";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";

export default function Kanban() {
  return (
    <main>
      <ModalAddFournisseur modalTitle={"Ajouter un Kanban"} />
      <FournisseurTableau txt={"Kanban"} />
    </main>
  );
}
