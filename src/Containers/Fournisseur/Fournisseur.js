import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import AddIcone from "../../assets/icones/red/add_red.png";

export default function Fournisseur() {
  return (
    <main>
      <ModalAddFournisseur
        icone={AddIcone}
        modalTitle={"ajouter un  fournisseur"}
      >
        <label htmlFor="name">Nom du fournisseur</label>
        <input type="text" />
        <label htmlFor="name">adresse du fournisseur</label>
        <input type="text" />
        <label htmlFor="name">site internet du fournisseur</label>
        <input type="text" />
        <label for="avatar">Logo du fournisseur</label>

        <input
          type="file"
          id="logo"
          name="logo_fournisseur"
          accept="image/png, image/jpeg, image/png"
        />
        <button className="btn-form-submit" type="submit">
          Ajouter
        </button>
      </ModalAddFournisseur>
      <FournisseurTableau txt={"Fournisseurs"} />
    </main>
  );
}
