import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import "./FournisseurDetails.css";
import { BASE_URL } from "../../config ";
export default function FournisseurDetails() {
  const { id } = useParams();
  const [fournisseur, setFournisseur] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:9000/sfac/api/fournisseur/${id}`)
      .then((res) => setFournisseur(res.data));
  }, []);

  console.log(fournisseur);
  return (
    <div>
      <Link to={"/fournisseur"}>
        <button className="btn-retour">Retour</button>
      </Link>
      <h1 className="title-fournisseur-details">{fournisseur.nom}</h1>
    </div>
  );
}
