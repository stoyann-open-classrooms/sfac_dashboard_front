import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// imports des icones
import home_icone_white from "../../assets/icones/white/home_white.svg";
import product_icone_white from "../../assets/icones/white/produit_white.svg";
import commande_icone_white from "../../assets/icones/white/commande_white.svg";
import demmande_icone_white from "../../assets/icones/white/demande_white.svg";
import fournisseur_icone_white from "../../assets/icones/white/fournisseur_white.svg";
import kanban_icone_white from "../../assets/icones/white/kanban_white.svg";
import burger_icone from "../../assets/icones/burger_icone.svg";
import close_icone from "../../assets/icones/close_icone.svg";
import "./Sidebar.css";
export default function Sidebar() {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const checkWidthFunc = () => {
    setCheckWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidthFunc);

    return () => {
      window.removeEventListener("resize", checkWidthFunc);
    };
  }, []);

  const [toggleNAv, setToggleNav] = useState(false);
  const toggleNavFunc = () => {
    setToggleNav(!toggleNAv);
  };
  return (
    <>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="button toggle-nav-btn">
          {" "}
          <img src={toggleNAv ? close_icone : burger_icone} alt="menu icone" />
        </button>
      )}
      <nav
        className={
          toggleNAv ? "container-sidebar visible-nav" : "container-sidebar"
        }
      >
        <aside className="sidebar">
          <ul>
            <Link to={"/"}>
              <li>
                <img src={home_icone_white} alt="icone accueil" />
              </li>
            </Link>
            <Link to={"/commande"}>
              <li>
                <img src={commande_icone_white} alt="icone commandes" />
              </li>
            </Link>
            <Link to={"/demmande"}>
              <li>
                <img src={demmande_icone_white} alt="icone demmandes" />
              </li>
            </Link>
            <Link to={"/produit"}>
              <li>
                <img src={product_icone_white} alt="icone produits" />
              </li>
            </Link>
            <Link to={"/fournisseur"}>
              <li>
                <img src={fournisseur_icone_white} alt="icone fournisseurs" />
              </li>
            </Link>
            <Link to={"/kanban"}>
              <li>
                <img src={kanban_icone_white} alt="icone kanban" />
              </li>
            </Link>
          </ul>
        </aside>
      </nav>
    </>
  );
}
