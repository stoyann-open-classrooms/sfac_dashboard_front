import React from "react";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
export default function Product() {
  return (
    <main>
      <ModalAddFournisseur modalTitle={"Ajouter un Produit"} />
      <FournisseurTableau txt={"Produits"} />
    </main>
  );
}
