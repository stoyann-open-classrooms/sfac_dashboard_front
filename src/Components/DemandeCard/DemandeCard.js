import React from "react";
import "./DemandeCard.css";
import trashIcone from "../../assets/icones/red/trash_red.svg";
export default function DemandeCard(props) {
  return (
    <div className="demande-card">
      <button className="demande-card-trash-btn">
        <img src={trashIcone} alt="" />
      </button>
    </div>
  );
}
