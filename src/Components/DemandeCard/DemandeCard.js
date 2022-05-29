import React from "react";
import "./DemandeCard.css";

export default function DemandeCard(props) {
  return <div className="demande-card">{props.children}</div>;
}
