import React from "react";
import { Routes, Route } from "react-router-dom";

import DemandeFormContainer from "../../Components/DemandeFormContainer/DemandeFormContainer";
import TableauRight from "../../Components/TableauRight/TableauRight";
import "./Demande.css";
export default function Demande(props) {
  return (
    <main>
      <div className="content-demande">
        <TableauRight></TableauRight>
        <DemandeFormContainer />
      </div>
    </main>
  );
}
