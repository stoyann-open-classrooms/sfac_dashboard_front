import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import AddIcone from "../../assets/icones/red/add_red.png";
import { useState } from "react";
import axios from "axios";
export default function Fournisseur() {
  const [fournisseur, setFournisseur] = useState({});

  const [logo, setLogo] = useState("");
  const formData = new FormData();
  formData.append("image", logo);
  formData.append("nom", fournisseur.nom);
  formData.append("adresse", fournisseur.adresse);
  formData.append("site", fournisseur.site);

  const handleForm = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:5000/sfac/api/fournisseur/addFournisseur",
      formData
    );
    window.location.reload();
    console.log("submit !");
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setFournisseur({
      ...fournisseur,
      [name]: value,
    });
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setLogo(e.target.files[0]);
  };
  return (
    <main>
      <ModalAddFournisseur
        icone={AddIcone}
        modalTitle={"ajouter un  fournisseur"}
      >
        <form method="POST" onSubmit={handleForm} encType="multipart/form-data">
          <label htmlFor="fournisseur_name">Nom du fournisseur</label>
          <input
            name="nom"
            onChange={handleInput}
            type="text"
            id="fournisseur_name"
          />
          <label htmlFor="adresse_fournisseur">adresse du fournisseur</label>
          <input
            name="adresse"
            onChange={handleInput}
            type="text"
            id="adresse_fournisseur"
          />
          <label htmlFor="fournisseur_site">site internet du fournisseur</label>
          <input
            name="site"
            onChange={handleInput}
            type="text"
            id="fournisseur_site"
          />
          <label for="fournisseur_site">Logo du fournisseur</label>

          <input
            onChange={handleFile}
            type="file"
            id="logo_fournisseur"
            name="image"
            accept="image/png, image/jpeg, image/png"
          />
          <button className="btn-form-submit" type="submit">
            Ajouter
          </button>
        </form>
      </ModalAddFournisseur>
      <FournisseurTableau txt={"Fournisseurs"} />
    </main>
  );
}
