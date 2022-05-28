import React, { useState } from "react";
import "./ModalAddFournisseur.css";
import CloseIcone from "../../assets/icones/close_icone.svg";
export default function ModalAddFournisseur(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <img src={props.icone} alt="bouton ouverture modal" />
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>{props.modalTitle}</h2>
              <div>{props.children}</div>
              <button onClick={toggleModal} className="close-modal">
                <img src={CloseIcone} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
