import React from "react";
import "./CardRecap.css";
export default function CardRecap(props) {
  return (
    <div className="card-recap">
      <h3>{props.txt}</h3>
      <h3 className="card-recap_nb">{props.nb}</h3>
    </div>
  );
}
