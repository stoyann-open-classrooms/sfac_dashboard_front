import React, { useEffect, useState } from "react";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import AddIcone from "../../assets/icones/red/add_red.png";
import trashIcone from "../../assets/icones/red/trash_red.svg";
import editIcone from "../../assets/icones/edit_icone.svg";
import axios from "axios";
import warningIcone from "../../assets/icones/red/warning_red.svg";
import FournisseurCard from "../../Components/FournisseurCard/FournisseurCard";
export default function Product() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sfac/api/produit/allproduits")
      .then((res) => setProductData(res.data));
  }, []);
  console.log(productData);
  return (
    <main>
      <ModalAddFournisseur
        icone={AddIcone}
        modalTitle={"ajouter un  Produits"}
      ></ModalAddFournisseur>
      <FournisseurTableau txt={"produits"}>
        {productData.map((product, index) => (
          <FournisseurCard key={product.id}>
            <div className="fourniseur-card__image-container">
              <img src={"http://localhost:5000/" + product.image} alt="" />
            </div>
            <div className="fournisseur-card__content">
              <h3>{product.designation}</h3>
              <p>refference : {product.refference}</p>

              <div className="fournisseur-card__footer">
                <ModalAddFournisseur
                  icone={editIcone}
                  modalTitle={"modifier le produit"}
                >
                  <label htmlFor="name"></label>
                  <input type="text" />
                </ModalAddFournisseur>
                <ModalAddFournisseur icone={trashIcone}>
                  <form action="POST">
                    <div className="info">
                      <img src={warningIcone} alt="" />
                      <p>êtes vous sur de vouloir supprimer ce produit ?</p>
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
