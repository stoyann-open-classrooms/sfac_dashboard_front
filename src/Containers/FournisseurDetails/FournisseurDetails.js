import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function FournisseurDetails() {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div>
      <h1>Fiche fournisseur numero : {id}</h1>
    </div>
  );
}
