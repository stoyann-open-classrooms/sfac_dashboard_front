import React, { useState } from "react";
import "./Graphique.css";
import Chart from "../Chart/Chart";
import { CommandeData } from "../CardRecap/Data";
export default function Graphique() {
  const [commande, setCommande] = useState({
    datasets: [
      {
        label: ["en retard", "intime"],
        data: CommandeData.map((data) => data.retard),

        // backgroundColor: "fillPattern",

        backgroundColor: ["red", "green"],
      },
    ],
  });
  return (
    <div className="graphique-container">
      <h4>12% des commandes sont en retard</h4>
      <Chart chartData={commande} />
    </div>
  );
}
