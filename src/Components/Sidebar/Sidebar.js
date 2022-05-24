import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import iconSet from "../../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
// imports des icones
import home_icone_white from "../../assets/icones/red/home_red.svg";
import product_icone_white from "../../assets/icones/red/produit_red.svg";
import commande_icone_white from "../../assets/icones/red/commande_red.svg";
import demmande_icone_white from "../../assets/icones/red/demande_red.svg";
import fournisseur_icone_white from "../../assets/icones/red/fournisseur_red.svg";
import kanban_icone_white from "../../assets/icones/red/kanban_red.svg";
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
            <li>
              <NavLink to={"/"}>
                <IcomoonReact iconSet={iconSet} size={40} icon="home_red" />
              </NavLink>
            </li>
            <NavLink to={"/commande"}>
              <li>
                <IcomoonReact iconSet={iconSet} size={40} icon="commande_red" />
              </li>
            </NavLink>
            <NavLink to={"/demmande"}>
              <li>
                <IcomoonReact iconSet={iconSet} size={40} icon="demande_red" />
              </li>
            </NavLink>
            <NavLink to={"/produit"}>
              <li>
                <IcomoonReact iconSet={iconSet} size={40} icon="produit_red" />
              </li>
            </NavLink>
            <NavLink to={"/fournisseur"}>
              <li>
                <IcomoonReact
                  iconSet={iconSet}
                  size={40}
                  icon="fournisseur_red"
                />
              </li>
            </NavLink>
            <NavLink to={"/kanban"}>
              <li>
                <IcomoonReact iconSet={iconSet} size={40} icon="kanban_red" />
              </li>
            </NavLink>
          </ul>
        </aside>
      </nav>
    </>
  );
}
