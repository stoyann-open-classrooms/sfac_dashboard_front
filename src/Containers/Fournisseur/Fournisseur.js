import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import AddIcone from "../../assets/icones/red/add_red.png";
import trashIcone from "../../assets/icones/red/trash_red.svg";
import editIcone from "../../assets/icones/edit_icone.svg";
import warningIcone from "../../assets/icones/red/warning_red.svg";
import FournisseurCard from "../../Components/FournisseurCard/FournisseurCard";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Fournisseur() {
  const [fournisseurData, setFournisseurData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sfac/api/fournisseur/allFournisseurs")
      .then((res) => setFournisseurData(res.data));
  }, []);

  const deleateFournisseur = (e) => {
    e.preventDefault();

    console.log("submit !");
  };

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

      <FournisseurTableau txt={"Fournisseurs"}>
        {fournisseurData.map((fournisseur, index) => (
          <FournisseurCard key={fournisseur.id}>
            <div className="fourniseur-card__image-container">
              <img src={"http://localhost:5000/" + fournisseur.image} alt="" />
            </div>
            <div className="fournisseur-card__content">
              <h3>{fournisseur.nom}</h3>
              <p>{fournisseur.adresse}</p>

              <div className="fournisseur-card__footer">
                <ModalAddFournisseur
                  icone={editIcone}
                  modalTitle={"modifier le  fournisseur"}
                >
                  <label htmlFor="name"></label>
                  <input type="text" />
                </ModalAddFournisseur>
                <ModalAddFournisseur icone={trashIcone}>
                  <form onSubmit={deleateFournisseur} action="POST">
                    <div className="info">
                      <img src={warningIcone} alt="" />
                      <p>êtes vous sur de vouloir supprimer ce fournisseur ?</p>
                    </div>

                    <button className="btn-form-submit">valider</button>
                  </form>
                </ModalAddFournisseur>
              </div>
            </div>
          </FournisseurCard>
        ))}
      </FournisseurTableau>
    </main>
  );
}
