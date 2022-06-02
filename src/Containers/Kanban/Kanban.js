import React, { useEffect, useState } from "react";
import FournisseurTableau from "../../Components/FournisseurTableau/FournisseurTableau";
import ModalAddFournisseur from "../../Components/ModalAddFournisseur/ModalAddFournisseur";
import AddIcone from "../../assets/icones/red/add_red.png";
import axios from "axios";
import CardKanban from "../../Components/CardKanban/CardKanban";
export default function Kanban() {
  const [kanbanData, setKanbanData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:9000/sfac/api/kanban/allkanbans")
      .then((res) => setKanbanData(res.data));
  }, []);
  console.log(kanbanData.data);

  return (
    <main>
      <ModalAddFournisseur icone={AddIcone} modalTitle={"Ajouter un Kanban"} />
      <FournisseurTableau txt={"Kanbans"}>
        {/* {kanbanData.map((kanban, index) => (
          <CardKanban key={kanban.id}>
            <hgroup>
              <h3>{kanban.uid_nfc}</h3>
              <h4>REF Produit</h4>
            </hgroup>
            <div className="container_img_product"></div>
            <p>désignation</p>
          </CardKanban>
        ))} */}
      </FournisseurTableau>
    </main>
  );
}
