import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
export default function Fournisseur() {
  return (
    <main>
      <ModalAddFournisseur modalTitle={"Ajouter un fournisseur"} />
      <FournisseurTableau txt={"Fournisseurs"} />
    </main>
  );
}
