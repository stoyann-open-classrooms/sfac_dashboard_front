import React from "react";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import AddIcone from "../../assets/icones/red/add_red.png";

export default function Product() {
  return (
    <main>
      <ModalAddFournisseur icone={AddIcone} modalTitle={"Ajouter un Produit"} />
    </main>
  );
}
