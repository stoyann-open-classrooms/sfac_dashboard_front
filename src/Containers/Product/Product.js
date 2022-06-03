import React, { useEffect, useState } from "react";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import AddIcone from "../../assets/icones/red/add_red.png";
import trashIcone from "../../assets/icones/red/trash_red.svg";
import editIcone from "../../assets/icones/edit_icone.svg";
import axios from "axios";
import warningIcone from "../../assets/icones/red/warning_red.svg";
import FournisseurCard from "../../Components/FournisseurCard/FournisseurCard";
import { Link } from "react-router-dom";
export default function Product() {
  const [isLoading, setIsLoding] = useState(true);
  const [productData, setProductData] = useState({ data: [] });
  const [categories, setCategories] = useState({ data: [] });

  // fetch getAllProduits
  useEffect(() => {
    axios
      .get("http://localhost:9000/sfac/api/produit/allproduits")
      .then((res) => setProductData(res.data))
      .then((res) => setIsLoding(false));
  }, []);

  // fetch getAllCategories
  useEffect(() => {
    axios
      .get("http://localhost:9000/sfac/api/categorie/allcategories")
      .then((res) => setCategories(res.data));
  }, []);
  console.log(categories);

  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const formData = new FormData();
  formData.append("image", image);
  formData.append("designation", product.designation);
  formData.append("refference", product.refference);

  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/sfac/api/produit/addProduit", formData);
    window.location.reload();
    console.log("submit !");
  };

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const deleteProduct = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:9000/sfac/api/produit/${e.target.id}`);

    window.location.reload();
    console.log("produit supprimée !");
  };

  return (
    <main>
      <ModalAddFournisseur
        infoBulle={"ajouter un produit"}
        icone={AddIcone}
        modalTitle={"ajouter un  Produits"}
      >
        <form method="POST" onSubmit={handleForm} encType="multipart/form-data">
          <label htmlFor="product_designation">designation produit</label>
          <input
            name="designation"
            onChange={handleInput}
            type="text"
            id="product_designation"
          />
          <label htmlFor="product_refference">refference du produit</label>
          <input
            name="refference"
            onChange={handleInput}
            type="text"
            id="product_refference"
          />

          <label for="product_image">image produit</label>

          <input
            onChange={handleFile}
            type="file"
            id="product_image"
            name="image"
            accept="image/png, image/jpeg, image/png"
          />
          <button className="btn-form-submit" type="submit">
            Ajouter
          </button>
        </form>
      </ModalAddFournisseur>

      <FournisseurTableau txt={"produits"}>
        {productData.data.map((product) => (
          <Link to={`/produitDetails/${product.id}`}>
            <FournisseurCard key={product.id}>
              <div className="fourniseur-card__image-container">
                <img src={"http://localhost:9000/" + product.image} alt="" />
              </div>
              <div className="fournisseur-card__content">
                <h3>REF : {product.refference}</h3>
                <p>
                  <span>Catégorie : </span> <br /> {product.categorie.categorie}
                </p>
                <p>
                  <span>désignation : </span> <br /> {product.designation}
                </p>

                <div className="fournisseur-card__footer">
                  <ModalAddFournisseur
                    icone={editIcone}
                    modalTitle={"modifier le produit"}
                  >
                    <label htmlFor="name"></label>
                    <input type="text" />
                  </ModalAddFournisseur>
                  <ModalAddFournisseur icone={trashIcone}>
                    <form id={product.id} onSubmit={deleteProduct}>
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
          </Link>
        ))}
      </FournisseurTableau>
    </main>
  );
}
