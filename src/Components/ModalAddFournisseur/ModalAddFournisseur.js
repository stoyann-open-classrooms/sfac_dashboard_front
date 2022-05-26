import React, { useState } from "react";
import "./ModalAddFournisseur.css";
import AddIcone from "../../assets/icones/red/add_red.png";
import CloseIcone from "../../assets/icones/close_icone.svg";
export default function ModalAddFournisseur() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        <img src={AddIcone} alt="bouton ouverture modal" />
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Ajouter un fournisseur</h2>
              <form>
                <fieldset>
                  <label htmlFor="nom">nom du fournisseur</label>
                  <input type="text" name="" id="nom" />
                </fieldset>
                <fieldset>
                  <label htmlFor="adresse">adresse du fournisseur</label>
                  <input type="text" name="" id="adresse" />
                </fieldset>
                <fieldset>
                  <label htmlFor="site">site du fournisseur</label>
                  <input type="text" name="" id="site" />
                </fieldset>
                <button className="confirmation-btn" type="submit">
                  confirmer
                </button>
              </form>
              <button onClick={toggleModal} className="close-modal">
                <img src={CloseIcone} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
