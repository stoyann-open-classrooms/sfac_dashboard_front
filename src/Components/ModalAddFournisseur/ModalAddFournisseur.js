import React, { useState } from "react";
import "./ModalAddFournisseur.css";
import AddIcone from "../../assets/icones/red/add_red.png";
import CloseIcone from "../../assets/icones/close_icone.svg";
export default function ModalAddFournisseur(props) {
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
              <h2>{props.modalTitle}</h2>

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
