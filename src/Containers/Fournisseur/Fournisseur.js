import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import AddIcone from "../../assets/icones/red/add_red.png";
import trashIcone from "../../assets/icones/red/trash_red.svg";
import editIcone from "../../assets/icones/edit_icone.svg";
import warningIcone from "../../assets/icones/red/warning_red.svg";
import FournisseurCard from "../../Components/FournisseurCard/FournisseurCard";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
export default function Fournisseur() {
  const [fournisseurData, setFournisseurData] = useState({ data: [] });

  useEffect(() => {
    axios
      .get("http://localhost:9000/sfac/api/fournisseur/allFournisseurs")
      .then((res) => setFournisseurData(res.data));
  }, []);
  console.log(fournisseurData);
  const deleteFournisseur = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:9000/sfac/api/fournisseur/${e.target.id}`);

    window.location.reload();
    console.log("fournisseur supprimée !");
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
      "http://localhost:9000/sfac/api/fournisseur/addFournisseur",
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
        infoBulle={"ajouter un fournisseur"}
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
        {fournisseurData.data.map((fournisseur, index) => (
          <Link to={`/fournisseurDetails/${fournisseur.id}`}>
            <FournisseurCard key={fournisseur.id}>
              <div className="fourniseur-card__image-container">
                <img
                  src={"http://localhost:9000/" + fournisseur.image}
                  alt=""
                />
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
                    <form
                      id={fournisseur.id}
                      onSubmit={deleteFournisseur}
                      action="POST"
                    >
                      <div className="info">
                        <img src={warningIcone} alt="" />
                        <p>
                          êtes vous sur de vouloir supprimer ce fournisseur ?
                        </p>
                      </div>

                      <button className="btn-form-submit">valider</button>
                    </form>
                  </ModalAddFournisseur>
                </div>
              </div>
            </FournisseurCard>
          </Link>
        ))}
      </FournisseurTableau>
    </main>
  );
}
