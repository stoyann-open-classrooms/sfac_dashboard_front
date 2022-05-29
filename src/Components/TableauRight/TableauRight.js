import React from "react";
import DemandeCard from "../DemandeCard/DemandeCard";
import { Link } from "react-router-dom";
import "./TableauRight.css";

export default function TableauRight() {
  return (
    <section className="tableau-right">
      <div className="header-tableau">
        <h1>Demandes a traiter</h1>
      </div>
      <div className="body-tableau">
        <Link
          to={{
            pathname: `/demmande`,
          }}
        >
          <DemandeCard>
            <h3>titre demmande</h3>
          </DemandeCard>
        </Link>
      </div>
    </section>
  );
}
